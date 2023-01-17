import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  faSass,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function RotatingCube() {
  const icon = [
    { icon: faHtml5, color: "#dd0031" },
    { icon: faJsSquare, color: "#E4D04B" },
    { icon: faReact, color: "#00D1F2" },
    { icon: faNodeJs, color: "#7CC327" },
    { icon: faSass, color: "#C36291" },
    { icon: faGitAlt, color: "#E44C30" },
  ];

  return (
    <div className="cube-container">
      <div className="cube-spinner">
        {icon.map((e, i) => {
          return (
            <div className={`icon${i}`}>
              <FontAwesomeIcon icon={e.icon} color={e.color} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
