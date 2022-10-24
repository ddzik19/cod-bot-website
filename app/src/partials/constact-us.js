import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/button";

const ContactUs = () => {
	const form = useRef();
	const [subject, setSubject] = useState();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.SERVICE_ID,
				process.env.TEMPLATE_ID,
				form.current,
				process.env.PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const changeSubject = (value) => {};

	return (
		<div className="mx-10  md:mx-[30%] p-10 rounded-xl shadow-lg bg-[#323443]">
			<form ref={form} onSubmit={sendEmail}>
				<div class="relative z-0 mb-6 w-full group">
					<input
						type="email"
						name="email"
						id="email"
						class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#ffa100] appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
						placeholder=" "
						required=""
					/>
					<label
						for="email"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa100] peer-focus:dark:text-[#ffa100] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email
					</label>
				</div>
                <div class="relative z-0 mb-6 w-full group">
					<input
						type="text"
						name="subject"
						id="subject"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ffa100] appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
						placeholder=" "
						required=""
					/>
					<label
						for="name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa100] peer-focus:dark:text-[#ffa100] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Subject
					</label>
				</div>
				<div class="relative z-0 mb-6 w-full group">
					<input
						type="text"
						name="name"
						id="name"
						class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ffa100] appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
						placeholder=" "
						required=""
					/>
					<label
						for="name"
						class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#ffa100] peer-focus:dark:text-[#ffa100] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Name
					</label>
				</div>
				<div class="relative z-0 mb-6 w-full group">
					<label
						for="message"
						class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
					>
						Your message
					</label>
					<textarea
						id="message"
                        name="message"
						rows="4"
						class="block p-2.5 w-full text-sm rounded-lg border border-[#ffa100] bg-gray-700 placeholder-gray-400 text-white"
						placeholder="Your message..."
					></textarea>
				</div>
				<Button type="submit" className={"py-2"}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default ContactUs;
