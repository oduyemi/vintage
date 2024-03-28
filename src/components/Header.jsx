import React from "react";
import { Box } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import Button from "./elements/Button"
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import MessageIcon from '@mui/icons-material/Message';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import PersonPinIcon from '@mui/icons-material/PersonPin';


export const Header = () => {
  
  return (
    <header className="bg-main opacity-95 sticky top-0 z-50 shadow">
        <nav
        id="header"
        className=""
        >  
            <Box className="flex items-center justify-between">
            <Box className="mt-[-2.8%] logo mr-2">
                <Link to="/" className="text-l block">
                <img
                src={require("../assets/images/logo/logo.png")}
                alt="logo"
                width="100%"
                className="ml-4 w-40 w-40"
                />
                </Link>
            </Box> 
           
            <Box className="flex items-center justify-between space-x-4 mt-[-2.8%]">
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Wishlist">
                        <Link to="/wishlist">
                            <ListIcon className="text-lightcream"/>
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4"> 
                    <Tooltip title="Messages">  
                        <Link to="/messages">
                            <MessageIcon className="text-lightcream" />
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="My Ads">
                        <Link to="/ads">
                            <SpeakerNotesIcon  className="text-lightcream"/>
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Profile">
                        <Link to="/profile">
                            <PersonPinIcon className="text-lightcream" />
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Link to="/signup">
                        <Button className="px-8 mr-6">SELL</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
        </nav>
    </header>
  );  
};