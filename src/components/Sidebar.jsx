import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Sidemenu from "./Sidemenu";



export const Sidebar = ({ setExpand }) => {
  const [isExpand, setIsExpand] = useState(true);
  const [isExpandOnHover, setIsExpandOnHover] = useState(false);

  const handleHoverExpand = (value) => {
    if (!isExpand) {
      setIsExpandOnHover(value);
    }
  };

  return (
    <nav
      role="navigation"
      className={[
        "sidebar relative z-1 bg-white shadow shadow-3 border-r rounded-xl h-screen top-0",
        "transition-all duration-300 ease-in-out md:sticky",
        `${
          isExpand
            ? "bg-faded w-72"
            : isExpandOnHover
            ? "bg-faded/70 w-72 backdrop-blur-md"
            : "bg-faded w-20"
        }`
      ].join(" ")}
    >
      <div
        onMouseEnter={() => handleHoverExpand(true)}
        onMouseLeave={() => handleHoverExpand(false)}
        className={`relative h-full overflow-hidden`}
      >
        <Sidemenu isExpand={isExpand} isExpandOnHover={isExpandOnHover} />
      </div>
    </nav>
  );
};