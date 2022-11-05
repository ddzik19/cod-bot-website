/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Button from "../components/button";
import Logo from "../assets/images/unnamed.png";
import List from "../components/list-element";

export default function Footer() {
  return (
    <div className="p-5 md:w-full grid grid-cols-2">
      <div className="text-center md:text-right md:pr-10">
        <img
          alt="logo"
          className="m-auto pb-4 max-w-[100px] md:ml-auto md:mr-[50px] md:pb-3"
          src={Logo}
        />
        <Button
          className={"py-3"}
          href={
            "https://discord.com/api/oauth2/authorize?client_id=934543703572369448&permissions=0&scope=bot"
          }
          children={"Add Commander-B"}
        />
        <p className="pt-3 text-white md:pr-6">&copy; Damian Dzik 2022</p>
      </div>
      <ul className="text-center md:text-left md:pl-10 md:list-none text-[#b3b8cd] footer-list">
        <List href={"https://discord.gg/9SSTbFFcgu"} children={"Our Discord"} />
        <List
          href={
            "https://discord.com/api/oauth2/authorize?client_id=934543703572369448&permissions=0&scope=bot"
          }
          children={"Add Commander-B"}
        />
        <List href={"https://www.patreon.com/DevDamo"} children={"Donate"} />
        <List children={"FAQ"} />
      </ul>
    </div>
  );
}
