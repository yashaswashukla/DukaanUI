import React from "react";

const BlueRevenueCard = ({ title, amount, orderCount, date }) => {
  return (
    <div className="text-white-500 overflow-hidden">
      <div className="bg-blue-700 p-5 rounded-t-md hover:bg-blue-70">
        <div className="flex gap-1 place-items-center">
          <div>{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="flex pt-3 justify-between">
          <div className="text-3xl font-semibold">₹{amount}</div>
          <div className="flex place-items-center underline">
            {orderCount} Orders
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-1 px-6 rounded-b-md flex justify-between">
        <span>Next payout date:</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlueRevenueCard;
