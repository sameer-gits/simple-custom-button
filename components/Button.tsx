import React from "react";
import Link from "next/link";

import { Open_Sans } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

interface ButtonProps {
  buttonLink: string;
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ buttonLink, buttonText }) => {
  return (
    <div className=" group/Button hover:scale-95 transition-all w-fit z-0">
      <Link
        href={buttonLink}
        className="flex justify-center items-center rounded-full bg-blue-600 w-fit font-bold tracking-widest text-lg relative overflow-hidden p-3 pl-4"
      >
        <span className="text-white z-10 absolute left-4 -translate-y-0 group-hover/Button:-translate-y-10 transition-transform duration-300">
          {buttonText}
        </span>
        <span className="text-white z-10 translate-y-10 group-hover/Button:translate-y-0 transition-transform duration-300">
          {buttonText}
        </span>
        <div className=" p-2 bg-blue-800 rounded-full ml-2 z-10 text-white group-hover/Button:scale-75 group-hover/Button:bg-violet-800 transition-all duration-300">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="bg-violet-600 absolute top-0 w-[105%] h-full z-0 translate-y-full group-hover/Button:translate-y-0 transition-all"></div>
      </Link>
    </div>
  );
};

export default Button;
