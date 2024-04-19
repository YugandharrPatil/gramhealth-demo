import Icon from "./icon";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import { default as check, default as delivery } from "../../public/icons/check.png";
import handshake from "../../public/icons/handshake.png";
import shield from "../../public/icons/shield.png";

import box from "../../public/card-icons/box.png";
import deliveryBox from "../../public/card-icons/delivery.png";
import feedback from "../../public/card-icons/feedback.png";
import hands from "../../public/card-icons/hands.png";
import Card from "./card";

export default function Details() {
	return (
		<main className="text-center py-12 container">
			<h1 className="text-3xl font-semibold">How GramHealth Partners With Trusted Pharmacies</h1>
			<div className="flex flex-wrap justify-center gap-2 w-fit mx-auto mt-8">
				<Icon link={handshake} text="Trusted Pharmacies" />
				<Icon link={shield} text="100% Genuine Medicines" />
				<Icon link={check} text="Quality Assurance" />
				<Icon link={delivery} text="DOOR STEP DELIVERY" />
			</div>
			<h1 className="text-3xl font-semibold mt-12">How GramHealth Partners With Trusted Pharmacies</h1>
			<div className="flex flex-wrap gap-12 justify-center">
				<Card
					image={box}
					title="Specialized Packaging Solutions"
					body="GramHealth's specialized packaging ensures secure transport, shielding medicines from damage, safeguarding their potency and integrity throughout delivery."
				/>
				<Card
					image={deliveryBox}
					title="Lightning Fast Delivery"
					body="Skip the pharmacy lines and multiple trips. With GramHealth's 30-minute medicine delivery, order and pay for your medications online with ease. Just a few clicks, and your meds are at your doorstep, saving you time and hassle."
				/>
				<Card
					image={hands}
					title="Careful Handling"
					body="Our delivery personnel are trained to handle medications with utmost care and attention. They follow strict protocols for handling, loading, and unloading to minimize the risk of damage. Additionally, fragile or delicate items are marked and handled with extra caution"
				/>
				<Card
					image={feedback}
					title="Customer Feedback"
					body="Our delivery personnel are trained to handle medications with utmost care and attention. They follow strict protocols for handling, loading, and unloading to minimize the risk of damage. Additionally, fragile or delicate items are marked and handled with extra caution"
				/>
			</div>
			<div className="mt-24">
				<h3 className="uppercase text-center font-semibold text-lg">get early access</h3>
				<div className="flex max-sm:flex-col gap-3 mt-2 mx-auto">
					<Input />
					<Button className="uppercase text-white font-bold" variant="gradient">
						join waitlist
					</Button>
				</div>
			</div>
		</main>
	);
}
