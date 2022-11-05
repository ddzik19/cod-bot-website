import React from "react";
import Button from "../components/button";
import Header from "../components/header";
import SubHeading from "../components/sub-heading";
import trailer from "../assets/videos/trailer.mp4"
const Banner = () => {
	return (
		<div className="h-full w-auto text-center pt-[13%] md:mb-[2%] ">
			<video autoPlay muted loop className="shadow-2xl video md:h-[85vh]">
				<source
					src={trailer}
					type="video/mp4"
				/>
			</video>
			<Header >
				Power Up
				<br /> Your Loadout
			</Header>
			<SubHeading>
				With Commander-B, find what you want and need 10x faster than you would traditionally. 
			</SubHeading>
			<div className="md:pt-5 pb-10">
				<Button children={"Add Commander-B"} href={"https://discord.com/api/oauth2/authorize?client_id=934543703572369448&permissions=0&scope=bot"} className="banner-btn p-3 mt-5" />
			</div>
		</div>
	);
};

export default Banner;
