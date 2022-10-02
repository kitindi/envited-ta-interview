import React from "react";
import { Link } from "react-router-dom";
import Birthdaycake from "../img/Birthdaycake.png";
import { ImCalendar, ImLocation, ImLink } from "react-icons/im";
//Used heroicons because I couldn.t get an arrow icon from theicons recommended for this project
import { HiOutlineChevronRight } from "react-icons/hi";
import Button from "./Button";

const BirthdayCard = () => {
  return (
    <div>
      <div className="bg-[#F6F2FF] w-[350px] mx-auto rounded-lg overflow-hidden">
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
          <div className=" flex items-center justify-between p-2 mb-3">
            <div className="bg-white p-3 rounded-lg">
              <span className="text-2xl text-[#828282]">
                <ImCalendar />
              </span>
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#240D57]">
                18 August 6:00PM
              </p>
              <p className="text-sm text-[#828282]">
                to{" "}
                <span className="text-[13px]  font-semibold">
                  19 August 1:00 PM
                </span>
                UTC +10
              </p>
            </div>
            <span className="text-[#BDBDBD] text-2xl font-bold">
              <HiOutlineChevronRight />
            </span>
          </div>
          <div className=" flex items-center justify-between p-2 mb-3">
            <div className="bg-white p-3 rounded-lg">
              <span className="text-2xl text-[#828282]">
                <ImLocation />
              </span>
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#240D57]">
                Street Name
              </p>
              <p className="text-sm text-[#828282]">301 Rowes Lane, WA, 7183</p>
            </div>
            <span className="text-[#BDBDBD] text-2xl font-bold">
              <HiOutlineChevronRight />
            </span>
          </div>
          <div className=" flex items-center justify-between  p-2 mb-3">
            <div className="flex gap-6">
              <div className="bg-white p-3 rounded-lg">
                <span className="text-2xl text-[#828282]">
                  <ImLink />
                </span>
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#240D57] text-left">
                  Link
                </p>
                <a
                  href="https://www.netflix.com/tz/"
                  target="_new"
                  className="text-sm text-[#828282]"
                >
                  netflix.com
                </a>
              </div>
            </div>

            <span className="text-[#BDBDBD] text-2xl font-bold justify-items-end">
              <HiOutlineChevronRight />
            </span>
          </div>
        </div>
      </div>
      <div className="py-8 text-center lg:hidden">
        <Link to="/create">
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default BirthdayCard;
