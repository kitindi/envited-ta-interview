import React from "react";
import BirthdayCard from "../components/BirthdayCard";

const Home = () => {
  return (
    <div className="bg-[#EDE5FF] h-full w-full">
      <div className="w-full lg:max-w-[1204px] lg:mx-auto flex flex-col items-center">
        <div className="py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#240D57] text-center tracking-wide">
            Image if
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] leading-normal text-center pl-2">
              Snapchat
            </p>
            had events.
          </h1>
          <p className="text-base text-[#4F4F4F] text-center font-normal mt-4 w-[320px] md:w-[521px] md:text-2xl mx-auto">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className="">
          <BirthdayCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
