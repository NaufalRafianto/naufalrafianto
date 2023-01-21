import React from "react";
import Typewriter from "typewriter-effect";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Transition from "../components/Transition";
import Cloud from "../components/cloud";

export default function WelcomePage() {
  return (
    <Transition>
      (
      <div className="flex flex-col items-center justify-evenly h-[70%] w-full text-center ">
        <Cloud />
        <div className="font-bold font-mono text-base mb-20">
          <Typewriter
            onInit={(tp) => {
              tp.typeString("Hello, Welcome to my website!").start();
            }}
          />
        </div>
        <Link
          to="/Home"
          className=" animate-bounce flex flex-col items-center justify-between "
        >
          <div className=" text-small">Press it</div>
          <RiArrowDownSLine />
        </Link>
      </div>
      ){" "}
    </Transition>
  );
}
