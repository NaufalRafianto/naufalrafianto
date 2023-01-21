import React from "react";
import PageName from "../components/PageName";
import RotatingCube from "../components/RotatingCube";
import ToLink from "../components/ToLink";
import Transition from "../components/Transition";
import Data from "../Assets/Image";

export default function AboutPage({ cName }) {
  return (
    <>
      <PageName To={"/About"} Text={"ABOUT"} />
      <Transition>
        <div className="w-full h-full flex justify-center">
          <div
            className={` w-[80%] h-[75%] rounded-md m-auto absolute flex justify-between mb-40 max-md:flex-col max-md:w-full max-md:h-[50%]  max-md:items-center`}
          >
            <div
              className={`${cName} h-full w-[50%] flex items-center mt-11 justify-center text-justify border-2 rounded-lg max-md:w-[90%] max-md:h-full `}
            >
              {/* About Me */}

              <div className="relative w-[60%] h-[75%] max-md:w-[90%]">
                <h1
                  className="uppercase font-bold text-2xl  text-center tracking-[10px] opacity-80 h-[15%]
              b before:content-['<h1>'] before:absolute before:opacity-50 before:font-mono before:lowercase before:tracking-tight before:text-sm before:top-[-20px] before:left-0 after:content-['</h1>'] after:font-mono after:lowercase after:absolute after:tracking-tight after:text-sm after:top-[50px] after:left-0 after:opacity-50 mb-20  max-md:before:top-[-15px] max-md:before:text-xs max-md:after:text-xs max-md:mb-10 max-md:mt-[-10px] max-md:after:top-[10px] max-md:text-sm max-md:tracking-[5px]"
                >
                  about me
                </h1>
                <div
                  className="h-[70%] mt-[-10px] text-small before:content-['<span>'] before:absolute before:font-mono before:lowercase before:tracking-tight before:text-sm before:top-[100px] before:opacity-50 before:left-[-25px] after:absolute after:font-mono after:content-['</span>'] after:opacity-50 after:text-sm after:right-[-20px] after:bottom-0 2xl:after:absolute max-md:text-xs  max-md:after:bottom-[-15px] max-md:before:left-0 max-md:before:top-[35px] max-md:after:right-[-10px] max-md:py-5
                max-md:before:text-xs max-md:after:text-xs"
                >
                  Hello, I'm{" "}
                  <span className="uppercase">Muhammad Naufal Rafianto</span>,
                  second year Computer Engineering student at Institute
                  Technology of Sepuluh Nopember. Has interest in{" "}
                  <span className="uppercase font-bold">
                    Mobile development and Web development.
                  </span>
                </div>
              </div>
            </div>
            {/* SKILL */}
            <div className="w-[50%] flex-col items-center justify-between max-md:w-full ">
              <div className="  pl-20 text-2xl opacity-80 mt-3 uppercase  font-bold w-full text-center tracking-[10px] max-md:pl-0 max-md:mb-5 ">
                Skill
              </div>
              <div className=" flex flex-col-reverse ml-7 w-full h-full max-md:flex-row">
                <div className="skill">
                  {Data.map((e) => {
                    return (
                      <div className="skill-grid ">
                        <img
                          className=" w-[50%] p-2 m-auto cursor-pointer max-sm:w-[100%]"
                          src={e.image}
                          alt="im"
                        />
                      </div>
                    );
                  })}
                </div>
                <RotatingCube />
              </div>
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
