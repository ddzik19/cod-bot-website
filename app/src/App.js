import Footer from "./partials/footer";
import Layout from "./partials/layout";
import Banner from "./partials/banner";
import Header from "./components/header";
import React from "react";
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
			<ContentBlock className={"md:pt-10"}>
				{/* About */}
				<Header>About COD Bot</Header>
			</ContentBlock>
			<ContentBlock className={"text-center"}>
				{/* Commands */}
				<Header>Commands</Header>
				<div className="bg-[#323443] rounded-lg shadow-lg  mx-[50px]">
					<table className="md:w-[800px]">
						{rows.map((row) => {
							return (
								<tr>
									<th className="command md:w-[400px] text-left">{row.command}</th>
									<td className="w-[450px] text-left">{row.desc}</td>
								</tr>
							);
						})}
					</table>
				</div>
			</ContentBlock>
			<ContentBlock className={"text-center"}>
				{/* Video player */}
				<video autoPlay muted loop>
					<source
						src="https://www.youtube.com/watch?v=0E44DClsX5Q&t=5s&ab_channel=CallofDuty"
						type="video/mp4"
					/>
				</video>
			</ContentBlock>
			<ContentBlock>{/* Gallery */}</ContentBlock>
			<ContentBlock>{/* Contact form */}</ContentBlock>
			<Footer />
		</Layout>
	);
}

export default App;
