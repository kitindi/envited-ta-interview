import React from "react";
import Birthdaycake from "../img/Birthdaycake.png";
import { ImCalendar } from "react-icons/im";

const Home = () => {
  return (
    <div className="bg-[#EDE5FF] h-full w-full">
      <div className="w-full lg:max-w-[1204px] lg:mx-auto flex flex-col items-center">
        <div className="py-20 px-4">
          <h1 className="text-4xl font-bold text-[#240D57] text-center tracking-wide">
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
        <div className="bg-[#F6F2FF] w-[300px] mx-auto rounded-lg overflow-hidden">
          <img src={Birthdaycake} alt="Birth Day cake" className="w-full" />
          <div className="p-4">
            <p className="text-[#240D57 text-xl font-semibold mb-2">
              Movie Night
            </p>
            <p className="text-[#828282] mb-3">
              👋 Hosted by
              <span className="pl-2 font-semibold">Elysia</span>
            </p>
            <div className="bg-white flex items-center justify-between p-3 mb-4">
              <span className="text-sm">14 responses</span>
              <span className="text-sm text-[#8456EC]">see guests</span>
              <button className="text-sm bg-[#8456EC] py-2 px-3 rounded-md text-white">
                🤝Invite
              </button>
            </div>
            <div className=" flex items-center justify-between p-3 mb-3">
              <span className="text-2xl text-[#828282]">
                <ImCalendar />
              </span>
              <span className="text-sm text-[#8456EC]">see guests</span>
              <button className="text-sm bg-[#8456EC] py-2 px-3 rounded-md text-white">
                🤝Invite
              </button>
            </div>
            <div className=" flex items-center justify-between p-3 mb-3">
              <span className="text-sm">14 responses</span>
              <span className="text-sm text-[#8456EC]">see guests</span>
              <button className="text-sm bg-[#8456EC] py-2 px-3 rounded-md text-white">
                🤝Invite
              </button>
            </div>
            <div className=" flex items-center justify-between p-3">
              <span className="text-sm">14 responses</span>
              <span className="text-sm text-[#8456EC]">see guests</span>
              <button className="text-sm bg-[#8456EC] py-2 px-3 rounded-md text-white">
                🤝Invite
              </button>
            </div>
          </div>
        </div>

        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
