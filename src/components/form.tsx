"use client";

// UI ELEMENTS
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

// FIRESTORE
import { firestore } from "@/lib/firebase/config";
import { addDoc, collection, Timestamp } from "firebase/firestore/lite";

// FONTS
import { inter } from "@/utils/fonts/fonts";

// REACT HOOK FORM
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      await addDoc(collection(firestore, "waitlist"), {
        data,
        sentAt: Timestamp.now().toDate(),
      });
    } catch (err) {
      console.error(err);
    } finally {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-4 max-sm:flex-col">
        <Input
          {...register("email", {
            required: "Please enter an email",
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            },
          })}
          className={`${inter.variable} h-12 font-inter text-lg font-semibold lg:h-14`}
          placeholder="Enter your email here"
        />
        <Button
          disabled={isSubmitting}
          className={`h-14 font-bold uppercase ${inter.variable} rounded-sm font-inter text-lg`}
          variant="blue"
          size="blue"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "Submitting" : "Join Waitlist"}
        </Button>
      </div>
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      {isSubmitSuccessful && (
        <p className="text-green-500">Submitted Successfully</p>
      )}
    </form>
  );
}
