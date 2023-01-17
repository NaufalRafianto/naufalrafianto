import React from "react";
import { Switch } from "@headlessui/react";

export default function ModeToggle({ click, modeHandler }) {
  return (
    <Switch
      checked={click}
      onChange={modeHandler}
      className={`${
        click ? "bg-white" : "bg-rose-300"
      } relative inline-flex h-6 w-11 items-center rounded-full `}
    >
      <span
        className={`${
          click ? "translate-x-6 bg-blue-200" : "translate-x-1 bg-white"
        } inline-block h-4 w-4 transform rounded-full  transition`}
      />
    </Switch>
  );
}
