import React, { useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { sidebarStructure } from "./Structure";
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import FaxIcon from '@mui/icons-material/Fax';
import AirplayIcon from '@mui/icons-material/Airplay';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DiamondIcon from '@mui/icons-material/Diamond';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import RvHookupIcon from '@mui/icons-material/RvHookup';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from "react-router-dom";



const Sidemenu = ({ isExpand = true, isExpandOnHover = false }) => {
//   const link = "/";

  const [openedMenu, setOpenedMenu] = useState({});
  const [activeName, setActiveName] = useState("");
  const activeLink = window.location.pathname;

  const listRef = useRef({});

  const handleNavigate = (path) => {
    setActiveName(path);
  };

  const handleToggle = (name) => {
    const rootEl = name.split(".")[0];

    if (openedMenu[name]?.open === true) {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: false,
          height: "0px"
        },
        [rootEl]: {
          open: rootEl === name ? false : true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) -
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    } else {
      setOpenedMenu((prevState) => ({
        ...prevState,
        [name]: {
          open: true,
          height: `${listRef.current[name]?.scrollHeight || 0}px`
        },
        [rootEl]: {
          open: true,
          height: `${
            (listRef.current[rootEl]?.scrollHeight || 0) +
            (listRef.current[name]?.scrollHeight || 0)
          }px`
        }
      }));
    }
  };

  const generateIcon = (icon) => {
    var icons_map = {};

    icons_map["vehicles"] = (
      <div className="text-pry">
        <LocalTaxiIcon sx={{color:"#31CB00"}} /> {" "}
        Vehicles
      </div>
    );

    icons_map["properties"] = (
        <div className="text-pry">
          <MapsHomeWorkIcon sx={{color:"#31CB00"}} /> {" "}
          Properties
        </div>
      );

    icons_map["device"] = (
    <div className="text-pry">
        <StayCurrentPortraitIcon sx={{color:"#31CB00"}} /> {" "}
        Mobile, Phones &amp; Tablets
    </div>
    );

    icons_map["electronics"] = (
        <div className="text-pry">
          <FaxIcon sx={{color:"#31CB00"}} /> {" "}
          Electronics
        </div>
      );

      icons_map["homeappliances"] = (
        <div className="text-pry">
          <AirplayIcon sx={{color:"#31CB00"}} /> {" "}
          Home, Furniture &amp; Appliance
        </div>
      );

      icons_map["healthbeauty"] = (
        <div className="text-pry">
          <MonitorHeartIcon sx={{color:"#31CB00"}} /> {" "}
          Health &amp; Beauty
        </div>
      );

    icons_map["fashion"] = (
    <div className="text-pry">
        <DiamondIcon sx={{color:"#31CB00"}} /> {" "}
        Fashion
    </div>
    );

    


    icons_map["cars"] = (
    <div className="text-pry">
        <DriveEtaIcon sx={{color:"#31CB00"}} /> {" "}
        Cars
    </div>
    );

    icons_map["buses"] = (
        <div className="text-pry">
            <DirectionsBusIcon sx={{color:"#31CB00"}} /> {" "}
            Buses &amp; microbuses
        </div>
    );

    icons_map["heavyequipment"] = (
        <div className="text-pry">
            <RvHookupIcon sx={{color:"#31CB00"}} /> {" "}
            Heavy Equipment
        </div>
    );

    icons_map["bikes"] = (
        <div className="text-pry">
            <ElectricBikeIcon sx={{color:"#31CB00"}} /> {" "}
            Motorbikes &amp; Scooters
        </div>
        );

    icons_map["trucks"] = (
        <div className="text-pry">
            <LocalShippingIcon sx={{color:"#31CB00"}} /> {" "}
            Trucks &amp; Trailers
        </div>
    );

    return icons_map[icon];
  };

  const generateMenu = (item, index, recursive = 0) => {
    if (activeName === "" && activeLink.includes(item.link)) {
      setActiveName(item.name);
    }
    const classesActive = activeName === item.name ? "active" : "";
  
    return (
      <li key={index}>
        <Link to=""
          role="button"
          tabIndex={0}
          id={item.id}
          onClick={() => {
            if ("child" in item) {
              handleToggle(item.name);
            } else if ("link" in item) {
              handleNavigate(item.name);
            }
          }}
          onKeyDown={(event) => {
            const { code } = event;
            if (code === "Space") {
              if ("child" in item) {
                handleToggle(item.name);
              } else if ("link" in item) {
                handleNavigate(item.name);
              }
            }
          }}
          className={[
            "group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none relative z-1",
            recursive === 0 ? "pl-4" : recursive === 1 ? "pl-11" : "pl-16",
            activeName === item.name || activeName.split(".")[0] === item.name
              ? `text-blue-600 font-semibold ${
                  item.parent ? "bg-blue-200/20 " : "bg-transparent"
                }`
              : `text-gray-500 ${item.parent && ""}`,
            "hover:bg-gray-300/20",
            classesActive
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            {/* Icon rendering */}
            {generateIcon(item.icon)}
            <div
              className={`truncate ${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {item.title}
            </div>
          </div>
          {"child" in item ? (
            <div
              className={`${
                isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
              }`}
            >
              {/* Arrow icon rendering */}
            </div>
          ) : (
            false
          )}
        </Link>
        {"child" in item ? (
          <ul
            ref={(el) => (listRef.current[item.name] = el)}
            className={[
              "transition-max-height overflow-hidden duration-300 ease-in-out",
              isExpand ? "" : isExpandOnHover ? "" : "h-0"
            ].join(" ")}
            style={{ maxHeight: `${openedMenu[item.name]?.height || "0px"}` }}
            key={item.name}
          >
            {item.child.map((value, idx) =>
              generateMenu(value, idx, recursive + 1)
            )}
          </ul>
        ) : (
          false
        )}
      </li>
    );
  };
  

  return (
    <SimpleBar style={{ height: "100%" }} autoHide timeout={100}>
      <div className="mb-0 list-none text-gray-500">
        <div
          className={`my-0 flex flex-col items-center overflow-x-hidden duration-300 ${
            isExpand ? "px-3" : isExpandOnHover ? "px-3" : "px-5"
          }`}
        >
          
        </div>

        <div className="mt-3 mb-10 p-0 leading-10">
          <ul className="list-none text-sm font-normal px-3">
            {sidebarStructure.map((item, index) => generateMenu(item, index))}
          </ul>
        </div>
      </div>
    </SimpleBar>
  );
};

export default Sidemenu;