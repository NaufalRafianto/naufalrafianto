import { motion } from "framer-motion";
import React from "react";

export default function Transition({ children, cName }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: -100 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -100, y: 100 }}
      className={`w-screen h-screen mt-20 flex items-center justify-center ${cName}  `}
    >
      {children}
    </motion.div>
  );
}
