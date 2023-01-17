import React, { useEffect } from "react";
import { motion } from "framer-motion";
import PageName from "../components/PageName";

import ToLink from "../components/ToLink";
import Transition from "../components/Transition";
import { TagCloud } from "react-tagcloud";

export default function AboutPage({ cName }) {
  useEffect(() => {
    return () => {
      const container = ".tagCloud";
      const text = [
        "HTML",
        "CSS",
        "SASS",
        "SCSS",
        "JavaScript",
        "Next JS",
        "React JS",
        "Node JS",
        "Express JS",
        "JQuery",
        "Git",
        "Firebase",
        "MySQL",
      ];

      const options = {
        radius: 200,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, text, options);
    };
  });

  return (
    <>
      <PageName To={"/About"} Text={"ABOUT"} />
      <Transition>
        <div className="w-full h-full flex justify-center">
          <div
            className={` w-[75%] h-[65%] rounded-md m-auto absolute flex justify-between mb-40 max-md:flex-col max-md:w-full max-md:h-[50%]  max-md:items-center`}
          >
            <motion.div
              className={`${cName} h-full w-[50%] flex items-center  justify-center text-justify border-2 rounded-lg max-md:w-[90%] max-md:h-full `}
              whileHover={{
                scale: 1.1,
                boxShadow: `0 0 10px lightyellow`,
                backgroundColor: "transparent",
              }}
              transition={{
                duration: 1,
                default: { ease: "linear" },
              }}
            >
              <div className="relative w-[60%] h-[75%] max-md:w-[90%]">
                <h1
                  className="uppercase font-bold text-2xl text-center tracking-[10px] opacity-80 h-[15%]
              b before:content-['<h1>'] before:absolute before:opacity-50 before:font-mono before:lowercase before:tracking-tight before:text-sm before:top-[-20px] before:left-0 after:content-['</h1>'] after:font-mono after:lowercase after:absolute after:tracking-tight after:text-sm after:top-[50px] after:left-0 after:opacity-50 mb-20 max-md:mb-10 max-md:mt-[-10px] max-md:after:top-[20px]"
                >
                  about me
                </h1>
                <div className="h-[50%] text-small before:content-['<span>'] before:absolute before:font-mono before:lowercase before:tracking-tight before:text-sm before:top-[100px] before:opacity-50 before:left-[-25px] after:absolute after:font-mono after:content-['</span>'] after:opacity-50 after:text-sm after:right-[-20px] after:bottom-0 2xl:after:absolute max-md:text-xs  max-md:after:bottom-[-20px] max-md:before:left-0 max-md:before:top-[35px] max-md:after:right-[-10px] max-md:py-5">
                  Hello, I'm{" "}
                  <span className="uppercase">Muhammad Naufal Rafianto</span>,
                  second year Computer Engineering student at Institute
                  Technology of Sepuluh Nopember. Has interest in{" "}
                  <span className="uppercase font-bold">
                    Mobile development and Web development.
                  </span>
                </div>
              </div>
            </motion.div>

            <div className="w-[50%] flex-col items-center justify-between max-md:w-full -100">
              <div className=" pl-20 text-2xl font-bold w-full text-center tracking-[10px] max-md:pl-0 opacity-80 mt-3">
                SKILL
              </div>
              <div className="tagCloud w-full pl-20 max-md:pl-10 m-auto " />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-between p-10">
          <ToLink To={"/Home"} cName={"rotate-45"} Text={"Home"} />
          <ToLink To={"/Work"} cName={"-rotate-45"} Text={"Work"} />
        </div>
      </Transition>
    </>
  );
}
