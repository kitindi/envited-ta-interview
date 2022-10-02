import React from "react";
import BirthdayCard from "../components/BirthdayCard";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="bg-[#EDE5FF]  w-full lg:flex lg:items-center lg:justify-center">
      <div className="w-full lg:max-w-[1100px] lg:mx-auto flex flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-between">
        <div className="py-20 px-4 lg:pt-40">
          <h1 className="text-4xl md:text-6xl font-bold text-[#240D57] text-center tracking-wide lg:text-right">
            Image if
            <p className=" text-transparent bg-clip-text bg-gradient-to-r from-[#8456EC] to-[#E87BF8] leading-normal text-center pl-2 lg:text-right">
              Snapchat
            </p>
            had events.
          </h1>
          <p className="text-base text-[#4F4F4F] text-center font-normal mt-4 w-[320px] md:w-[521px] md:text-2xl mx-auto lg:text-right">
            Easily host and share events with your friends across any social
            media.
          </p>
          <div className="py-8 text-center hidden lg:flex lg:justify-end">
            <Link to="/create">
              <Button />
            </Link>
          </div>
        </div>
        <div className=" lg:py-20">
          <BirthdayCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
