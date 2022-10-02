import React from "react";
import Birthdaycake from "../img/Birthdaycake.png";

const CreateEvenet = () => {
  return (
    <div className="w-full h-full bg-[#FBFAFF] ">
      <div className="max-w-[1100px]  mx-auto">
        <div className="">
          <img src={Birthdaycake} alt="" className="w-full" />
        </div>
        <div className="w-400 mx-auto px-4">
          <form action="">
            <div className="mb-2 p-2">
              <input
                type="text"
                placeholder="Event name"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <input
                type="text"
                placeholder="Host name"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <label htmlFor="date">Start Date</label>
              <input
                type="date"
                placeholder="Start Date"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <label htmlFor="time">Start Time</label>
              <input
                type="time"
                placeholder="Start time"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <label htmlFor="date">End Date</label>
              <input
                type="date"
                placeholder="End Date"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <label htmlFor="time">End Time</label>
              <input
                type="time"
                placeholder="End time"
                className="p-2 border-2 border-gray-400 w-full outline-none"
              />
            </div>
            <div className="mb-2 p-2">
              <input
                type="submit"
                value="Next"
                className="py-3 px-5 text-xl bg-gradient-to-r from-[#8456EC] to-[#E87BF8] rounded-xl text-bold text-white w-full "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEvenet;
