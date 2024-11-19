import React from "react";
import avatar from "../assets/avatar.png";
import { data } from "../../data/side";
const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen bg-purple-500 top-0 left-0 hidden sm:block overflow-visible">
      <div className="flex items-center gap-3 px-3 py-3">
        <div className="w-10">
          <img src={avatar} className="rounded-md h-10" />
        </div>
        <div className="text-white-500 whitespace-nowrap">
          <p className="font-semibold">Yashaswa</p>
          <p className="underline text-black-200 font-light">Visit Store</p>
        </div>
        <div className="ml-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#ffffff"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div>
        <ul className="space-y-1 font-medium mt-4 mr-2 ml-2">
          {data.map((ele) => {
            return (
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 text-white-500 hover:bg-purple-400 rounded-md"
                >
                  <span dangerouslySetInnerHTML={{ __html: ele.svg }} />
                  <p className="ml-2">{ele.value}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ml-4 mb-4 fixed bottom-0 left-0 flex items-center bg-purple-400 rounded-md p-3 gap-x-4 text-white-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.00312 3.79727C2.42636 3.79727 1.80313 4.35527 1.80313 5.24727V18.7473C1.80313 19.6393 2.42636 20.1973 3.00312 20.1973H21.0031C21.5799 20.1973 22.2031 19.6393 22.2031 18.7473V15.8473H17.0032C14.8769 15.8473 13.1532 14.1236 13.1532 11.9973C13.1532 9.87097 14.8769 8.14727 17.0032 8.14727H22.2031V5.24727C22.2031 4.35527 21.5799 3.79727 21.0031 3.79727H3.00312ZM23.8031 8.14727V5.24727C23.8031 3.65398 22.6355 2.19727 21.0031 2.19727H3.00312C1.37075 2.19727 0.203125 3.65398 0.203125 5.24727V18.7473C0.203125 20.3405 1.37075 21.7973 3.00312 21.7973H21.0031C22.6355 21.7973 23.8031 20.3405 23.8031 18.7473V15.8473H23.8532V8.14727H23.8031ZM16.0032 11.9473C16.0032 11.4778 16.3837 11.0973 16.8532 11.0973H18.1532C18.6226 11.0973 19.0032 11.4778 19.0032 11.9473C19.0032 12.4167 18.6226 12.7973 18.1532 12.7973H16.8532C16.3837 12.7973 16.0032 12.4167 16.0032 11.9473ZM14.8532 11.9973C14.8532 10.8099 15.8158 9.84727 17.0032 9.84727H22.1532V14.1473H17.0032C15.8158 14.1473 14.8532 13.1847 14.8532 11.9973Z"
            fill="white"
          />
        </svg>
        <div>
          <p>Available Credits</p>
          <p>222.10</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
