import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import useWindowDimensions from "./WindowScreen";

const Cloud = () => {
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
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
        radius: width >= 768 ? 200 : 150,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <div>
      <span className={`tagcloud`}></span>
    </div>
  );
};

export default Cloud;
