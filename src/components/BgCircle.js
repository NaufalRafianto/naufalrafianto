import React from "react";
import { motion } from "framer-motion";

export default function BgCircle({ cName }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["10%", "20%", "40%", "80%", "10%", "100%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center -z-5 mb-40"
    >
      <div
        className={`${cName} animate-ping absolute border  w-[150px] h-[150px] rounded-full`}
      />
      <div
        className={`${cName} animate-ping absolute border  w-[350px] h-[350px] rounded-full`}
      />
      <div
        className={`${cName} animate-pulse absolute border  w-[700px] h-[700px] rounded-full`}
      />
    </motion.div>
  );
}
