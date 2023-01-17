import React from "react";
import PageName from "../components/PageName";
import ToLink from "../components/ToLink";
import Transition from "../components/Transition";

export default function WorkPage() {
  return (
    <>
      <PageName To={"/Work"} Text={"WORK"} />
      <Transition>
        <h1 className="uppercase text-5xl font-bold">on progress</h1>

        <div className="absolute bottom-0 flex w-full justify-between p-10">
          <ToLink To="/About" Text={"About"} cName={"rotate-45"} />
          <ToLink To="/Home" Text={"Home"} cName={"-rotate-45"} />
        </div>
      </Transition>
    </>
  );
}
