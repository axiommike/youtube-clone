import React from "react";
import Image from "next/image";

export default function Topnav() {
  return (
    <div className="flex justify-between items-center w-full ">
      {/* Left */}
      <div className="flex flex-row p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <Image
          src="/img/yt_logo_rgb_light.png"
          height={20}
          width={90}
          objectFit="contain"
        />
      </div>
      {/* Center */}
      <div className="justify-center items-center flex">
        <input
          type="text"
          placeholder="Search"
          className=" border-gray-100 border-2 align-top w-full"
        />
        <button className="bg-gray-100 w-20 items-center text-center hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-6 self-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 18 18"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              strokeWidth={1}
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/* Right */}

      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 items-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
        <button className="flex justify-center p-2 text-blue-800 border-2 border-blue-800 m-3 px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 items-center"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          Sign In
        </button>
      </div>
    </div>
  );
}
