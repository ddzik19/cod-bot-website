import React from "react";
import Footer from "./partials/footer";
import Layout from "./partials/layout";
import Banner from "./partials/banner";
import Header from "./components/header";
import ContentBlock from "./partials/content-block";

const rows = [
	{
		command: "!cod.help",
		desc: "Display all available commands",
	},
	{
		command: "!cod.wz<game_name>",
		desc: "Displays all available gun builds for the specified game, [ mw, cw, vg ]",
	},
	{
		command: "!cod.wz2.<game_name>",
		desc: "Displays all available gun builds for the specified game, [ mw2 ]",
	},
	{
		command: "!list.<wz/wz2>.<gun_type>",
		desc: "Display gun builds for specific gun type.  EXAMPLE: !list.wz.sr ; GUN TYPES: ar, smg, lmg, sr, mr ,ps, shg, tac",
	},
	{
		command: "!build.<wz/wz2>.<game_name>.<gun_name>",
		desc: "Display a specific gun build for a game. EXAMPLE: !build.wz.cw.mp5",
	},
];

function App() {
	return (
		<Layout>
			<Banner />
			<ContentBlock className={"pt-[10%] md:pt-[13%] lg:pt[20%]"}>
				{/* About */}
				<Header>What is COD Bot?</Header>
			</ContentBlock>
			<ContentBlock>{/* Gallery */}</ContentBlock>
			<ContentBlock className={"text-center"}>
				{/* Commands */}
				<Header>Commands</Header>
				<div className="bg-[#323443] w-fit rounded-lg shadow-lg md:px-[2%] md:mx-[5%] 2xl:pl-[10px] 2xl:mx-[300px] mx-2 px-2 py-2">
					<table>
						{rows.map((row) => {
							return (
								<tr>
									<th className="command text-left">{row.command}</th>
									<td className=" text-left">{row.desc}</td>
								</tr>
							);
						})}
					</table>
				</div>
			</ContentBlock>
			{/* <ContentBlock>
				<ContactForm />
			</ContentBlock> */}
			<Footer />
		</Layout>
	);
}

export default App;
