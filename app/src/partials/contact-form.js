import React from "react";
import Input from "../components/input";
import Header from "../components/header";
import Label from "../components/label";
const ContactForm = () => {
	return (
		<>
			<Header children={"Contact Us"} />
			<div className="px-[10%] text-center">
				<form action={`mailto:${process.env.SUPPORT_EMAIL}`} encType="text/plain" className="bg-[#323443] md:py-[2%] rounded-lg shadow-xl">
					<div className="py-4">
						<Label children={"Email"} />
						<Input name={"email"} type={"email"} placeholder={"email@email.com"}/>
					</div>
					<div className="py-4">
						<Label children={""}/>
						<Input />
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
