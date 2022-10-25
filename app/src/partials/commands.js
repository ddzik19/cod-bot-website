import React from "react";
const Commands = () => {
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
	return (
		<div className="bg-[#323443] w-fit rounded-lg shadow-lg md:mx-[5%] 2xl:pl-[10px] 2xl:mx-[300px] mx-2 px-2 py-2">
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
	);
};

export default Commands;
