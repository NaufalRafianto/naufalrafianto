import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageName from "../components/PageName";
import ToLink from "../components/ToLink";
import Transition from "../components/Transition";
import Maps from "../components/Maps";
import MyModal from "../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  const form = useRef();
  const inp = document.querySelectorAll(`.inputField`);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fhf08vs",
        "template_u1ha3aa",
        form.current,
        "kBxsp6UPVbxer-GIZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        text1={
          inp.value === null ? (
            <FontAwesomeIcon className="text-red-500 text-6xl" icon={faXmark} />
          ) : (
            <FontAwesomeIcon
              className="text-green-500 text-6xl"
              icon={faCheck}
            />
          )
        }
        text2={
          inp.value === null
            ? "Please fill the form properly!"
            : "Thank you, for contacting me, have a nice day"
        }
      />
      <PageName To="/Contact" Text="CONTACT" />
      <Transition>
        <div className=" w-full h-[90%]  flex justify-evenly items-center  mb-52 max-md:p-0 max-md:m-0 max-md:flex-col max-md:justify-start">
          {/* Contact */}
          <div className="h-[50%] w-[27.5%] max-md:w-[90%] flex-col items-center max-md:mx-auto max-md:mb-80 ml-10 ">
            <div className=" w-full text-justify max-md:w-full max-md:text-sm max-md:mb-2 opacity-80">
              I'm interested in freelance opportunities in small or large
              projects, feel free to contact me for request.
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col space-y-2 w-fit max-md:w-[100%] "
            >
              <div className="flex space-x-2 max-md:justify-between ">
                <input
                  className="inputField max-md:pr-28 max-sm:w-[50%]"
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                />
                <input
                  className="inputField max-md:pr-28 max-sm:w-[50%]"
                  placeholder="Email"
                  required
                  type="email"
                  name="email"
                />
              </div>
              <input
                name="subject"
                className="inputField"
                placeholder="Subject"
                required
                type="text"
              />
              <input
                name="message"
                className="inputField pb-10 resize-none"
                placeholder="Message"
                required
                type="text"
              />
              <button
                onClick={openModal}
                required
                type="submit"
                name="submit"
                className="w-full py-3  input-text rounded-lg bg-[rgba(0,0,0,0.75)] duration-500 hover:bg-[rgba(0,0,0,1)] text-white max-md:py-2 "
              >
                SUBMIT
              </button>
            </form>
          </div>
          {/* Maps */}
          <div className="h-[75vh] w-[50%] shadow max-md:absolute max-md:bottom-20 max-md:h-[30vh] max-md:w-[90%] ">
            <Maps />
          </div>
        </div>
        <div className="absolute  bottom-0 w-screen flex justify-between p-10">
          <ToLink To="/About" Text={"About"} cName={"rotate-45"} />
          <ToLink To="/Work" Text={"Work"} cName={"-rotate-45"} />
        </div>
      </Transition>
    </>
  );
}
