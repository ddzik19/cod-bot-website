import React from "react";
import gif1 from "../assets/videos/gif1.mp4";
import gif2 from "../assets/videos/gif2.mp4";

const About = () => {
  return (
    <>
      <div className="mx-[10%] md:mx-[5%] 2xl:mx-[20%]">
        <p>
          Commander-B was firstly developed for a group of friends that enjoyed
          playing Warzone together. Now our Discord bot is available for anyone!
          This Discord bot was a small portfolio project which turned out to be
          something that people were missing.
        </p>
        <br />
        <p>
          Our Discord bot allows users to get their desired gun builds with a
          simple command, as to looking it up on the internet and looking for
          the right, up to date build. Now people can use a simple command that
          sends an image into the chat with their desired gun build.
        </p>
        <br />
        <p>
          We get our gun builds from professional Call of Duty players. We found
          that they tend to stay up to date and create new builds according to
          patch notes.
        </p>
        <div className="grid grid-cols-2 mt-10">
          <video autoPlay muted loop className="shadow-2xl">
            <source src={gif1} type="video/mp4" />
          </video>
          <video autoPlay muted loop className="shadow-2xl">
            <source src={gif2} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default About;
