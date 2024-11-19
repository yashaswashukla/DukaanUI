import React, { useState } from "react";
import BlueRevenueCard from "./BlueRevenueCard";
import RevenueCard from "./RevenueCard";

const Overview = () => {
  const [isOpen, setIsOpen] = useState(0);
  const give = () => {
    if (isOpen)
      return (
        <button
          onClick={handleClick}
          className="absolute right-0 mt-2 py-1 px-3 bg-black-100 rounded-sm shadow-md border border-black-150 "
        >
          Last Month
        </button>
      );
  };
  const handleClick = () => {
    console.log("I ran");
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className="flex justify-between pb-4">
        <div className="text-xl">Overview</div>
        <div className="relative inline-block">
          <button
            onClick={handleClick}
            className="flex justify-between border border-black-150 py-1 px-3 rounded-sm place-items-center gap-1"
          >
            This Month
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {isOpen != 0 && (
            <button
              onClick={handleClick}
              className="absolute right-0 mt-2 py-1 px-3 bg-black-100 rounded-sm shadow-md border border-white-50 "
            >
              Last Month
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-start">
        <BlueRevenueCard
          title={"Next Payout"}
          amount={"2,312.23"}
          orderCount={23}
          date={"Today, 04:00 PM"}
        />
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={13}
        />
        <RevenueCard
          title={"Amount Pending"}
          amount={"92,312.20"}
          orderCount={13}
        />
      </div>
    </div>
  );
};

export default Overview;
