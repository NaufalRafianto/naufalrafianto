import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";

export default function ToLink({ To, cName, Text }) {
  return (
    <Link to={To} className="flex flex-col items-center z-20">
      <h1>{Text}</h1>
      <RiArrowDownSLine className={cName} />
    </Link>
  );
}
