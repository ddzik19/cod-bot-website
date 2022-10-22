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
			<Header>
				Lorem ipsum dolor
				<br /> dolor sit amet dolor sit amet
			</Header>
			<SubHeading>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed leo
				posuere, volutpat sem a, vulputate neque. Morbi viverra tortor id dolor
				pharetra pharetra.
			</SubHeading>
			<div className="md:pt-5 pb-10">
				<Button children={"Get COD Bot"} className="banner-btn p-3 mt-5" />
			</div>
		</div>
	);
};

export default Banner;
