import React from "react";
import { Box } from "@mui/material";
import Button from "./elements/Button"
import { Link } from "react-router-dom";
import ListIcon from '@mui/icons-material/List';
import MessageIcon from '@mui/icons-material/Message';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import PersonPinIcon from '@mui/icons-material/PersonPin';


export const Header = () => {
  
  return (
    <header className="bg-lightorange main_header">
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
                <Link to="">
                        <ListIcon className="text-lightcream"/>
                    </Link>
                </Box>
                <Box className="flex items-center justify-between space-x-4">   
                    <Link to="">
                        <MessageIcon className="text-lightcream" />
                    </Link>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Link to="">
                        <SpeakerNotesIcon  className="text-lightcream"/>
                    </Link>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Link to="">
                        <PersonPinIcon className="text-lightcream" />
                    </Link>
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