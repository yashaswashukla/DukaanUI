import React from "react";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 items-center px-5 py-3 ">
      <div className="flex items-center gap-4 ">
        <div className="hover:cursor-pointer block sm:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <p className="text-xl font-medium">Payouts</p>
        <div className="text-xs flex items-center gap-1">
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
          <p>How it Works</p>
        </div>
      </div>

      <div className="bg-black-100 flex items-center justify-start gap-3 py-2 px-3 rounded-md">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z"
            fill="#808080"
          />
        </svg>
        <form action="" className="sm:w-full hidden sm:block">
          <input
            placeholder="Search features, tutorials, etc."
            type="text"
            className="w-full bg-black-100 text-base pl border-none focus:outline-none"
          />
        </form>
      </div>

      <div className="flex h-10 gap-4 items-center ml-auto">
        <div className="w-10 h-10 flex items-center bg-black-150 justify-center rounded-full hover:cursor-pointer">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z"
              fill="#4D4D4D"
            />
          </svg>
        </div>
        <div className="flex items-center bg-black-150 rounded-full w-10 h-10 justify-center hover:cursor-pointer">
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.11092 8.50209C7.51563 9.15823 6.48437 9.15823 5.88908 8.50209L0.615075 2.68901C-0.259446 1.7251 0.424491 0.181107 1.72599 0.181107L12.274 0.181108C13.5755 0.181108 14.2594 1.7251 13.3849 2.68901L8.11092 8.50209Z"
              fill="#4D4D4D"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
