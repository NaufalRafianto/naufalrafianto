import Navbar from "./Page/Navbar";
import { useState } from "react";
import "./Globals.scss";
import WelcomePage from "./Page/WelcomePage";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import WorkPage from "./Page/WorkPage";
import ContactPage from "./Page/ContactPage";

import { Routes, Route } from "react-router-dom";

function App() {
  const [change, setChange] = useState();

  function modeChanger() {
    setChange(!change);
  }

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${
        change ? "bg-darkBG text-textDark" : "bg-lightBG text-lightDark"
      }`}
    >
      <Navbar click={change} onModeHandler={modeChanger} />

      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route
          path="/Home"
          element={
            <HomePage cName={` ${change ? "border-white" : "border-black"}`} />
          }
        />
        <Route
          path="/About"
          element={
            <AboutPage cName={`${change ? "border-white" : "border-black"}`} />
          }
        />
        <Route path="/Work" element={<WorkPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
