import React from "react";
import ModeToggle from "../components/ModeToggle";
import { BsMoon, BsSun } from "react-icons/bs";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
export default function Navbar({ click, onModeHandler }) {
  return (
    <div className="w-full h-fit p-3 flex justify-end fixed z-50">
      <div className=" mr-[8rem] w-[120px] items-center flex justify-between">
        <Link to="/Contact">
          <SocialIcon
            fgColor="#fff"
            network="email"
            style={{ height: 25, width: 25 }}
          />
        </Link>
        <SocialIcon
          fgColor="#fff"
          style={{ height: 25, width: 25 }}
          network="instagram"
          url="https://www.instagram.com/naufal.rafianto/"
        />
        <SocialIcon
          fgColor="#fff"
          style={{ height: 25, width: 25 }}
          network="linkedin"
          url="https://www.linkedin.com/in/naufal-rafianto-4159a8206/?originalSubdomain=id"
        />
        <SocialIcon
          fgColor="#fff"
          style={{ height: 25, width: 25 }}
          network="github"
          url="https://github.com/naufalRafianto"
        />
      </div>
      <div className="flex w-[100px] justify-between">
        <BsSun size={20} />
        <ModeToggle click={click} modeHandler={onModeHandler} />
        <BsMoon size={20} />
      </div>
    </div>
  );
}
