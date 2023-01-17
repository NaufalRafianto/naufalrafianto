import React from "react";
import ToLink from "../components/ToLink";
import BgCircle from "../components/BgCircle";
import { useTypewriter } from "react-simple-typewriter";
import Transition from "../components/Transition";
import PageName from "../components/PageName";
import { motion } from "framer-motion";

export default function HomePage({ cName }) {
  const [text] = useTypewriter({
    words: ["Man-who-love-girl.tsx", "<ButLovetoCodeMost/>"],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <>
      <PageName To={"/Home"} Text={"HOME"} />
      <Transition>
        <div className=" absolute w-max[400px] h-48 z-20">
          <motion.div className="text-center tracking-[20px] opacity-50 text-2xl uppercase">
            naufal rafianto
          </motion.div>
          <div className="font-bold text-4xl text-center font-mono">{text}</div>
        </div>
        <div className="absolute bottom-0 flex w-full justify-between p-10">
          <ToLink To="/About" Text={"About"} cName={"rotate-45"} />
          <ToLink To="/Work" Text={"Work"} cName={"-rotate-45"} />
        </div>
        <BgCircle cName={cName} />
      </Transition>
    </>
  );
}
