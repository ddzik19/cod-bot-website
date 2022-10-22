/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "../components/button";
import Logo from "../assets/images/unnamed.png"
import List from "../components/list-element";

export default function Footer() {
	return (
		<div className="p-5 md:w-full md:grid md:grid-cols-2">
			<div className="text-center md:text-right md:pr-10">
				<img alt="logo" className="m-auto pb-4 max-w-[100px] md:ml-auto md:mr-8 md:pb-3"  src={Logo}/>
				<Button className={"py-3"} children={"Add to Server"}  href="#"/>
				<p className="font-bold pt-3 text-white pr-3"> &copy; Damian Dzik 2022 </p>
			</div>
			<ul className="text-center md:text-left md:pl-10 mdlist-none text-[#b3b8cd] footer-list">
				<List children={"Our Discord"} />
				<List children={"Add COD Bot"}/>
				<List children={"Contact"}/>
				<List children={"Donate"}/>
				<List children={"FAQ"}/>
			</ul>
		</div>
	);
}
