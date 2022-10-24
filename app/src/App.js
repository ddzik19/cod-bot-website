import React from "react";
import Footer from "./partials/footer";
import Layout from "./partials/layout";
import Banner from "./partials/banner";
import Header from "./components/header";
import ContactUs from "./partials/constact-us";
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
			<ContentBlock className={"pt-[10%] md:pt-[6%] lg:pt-[13%] xl:pt-[13%] 2xl:pt-[8%]"}>
				{/* About */}
				<Header>What is <br/> Commander-B?</Header>
				<div className="px-[20%]">
					<p>
						Commander-B was firstly developed for a group of friends that
						enjoyed playing Warzone together. Now our Discord bot is available
						for anyone! This Discord bot was a small portfolio project which
						turned out to be something that people were missing.
					</p>
					<br />
					<p>
						Our Discord bot allows users to get their desired gun builds with a
						simple command, as to looking it up on the internet and looking for
						the right, up to date build. Now people can use a simple command
						that sends an image into the chat with their desired gun build.
					</p>
					<br />
					<p>
						We get our gun builds from professional Call of Duty players. We
						found that they tend to stay up to date and create new builds
						according to patch notes.
					</p>
				</div>
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
									<td className="command text-left">{row.command}</td>
									<td className=" text-left">{row.desc}</td>
								</tr>
							);
						})}
					</table>
				</div>
			</ContentBlock>
			<ContentBlock>
				{/* Contact Us */}
				<Header children={"Contact Us"} />
				<ContactUs />
			</ContentBlock>
			<Footer />
		</Layout>
	);
}

export default App;
