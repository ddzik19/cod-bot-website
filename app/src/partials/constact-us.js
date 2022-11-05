import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/button";
import contact_image from "../assets/images/unnamed.png";

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
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

  return (
    <div className=" lg:grid lg:grid-cols-2 lg:gap-5 mx-10 2xl:mx-[20%] p-10 rounded-xl shadow-lg bg-[#323443]">
      <img
        className="hidden lg:block rounded-xl w-full h-full"
        src={contact_image}
        alt=""
      />
      <form ref={form} onSubmit={sendEmail} className={"pb-6"}>
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
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-500"
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
        <Button type="submit" className={"py-2 float-right"}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
