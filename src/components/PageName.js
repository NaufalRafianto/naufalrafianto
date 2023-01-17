import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function PageName({ To, Text }) {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 10000 }}
      transition={{ duration: 1 }}
    >
      <Link
        to={To}
        className="absolute left-10 top-10 text-center tracking-[10px] opacity-70 text-2xl "
      >
        {Text}
      </Link>
    </motion.div>
  );
}
