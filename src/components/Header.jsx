import React from "react";
import { Box } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import Button from "./elements/Button"
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonPinIcon from '@mui/icons-material/PersonPin';


export const Header = () => {
  
  return (
    <header className="bg-main opacity-95 sticky top-0 z-50 shadow">
        <nav
        id="header"
        className=""
        >  
            <Box className="flex items-center justify-between">
            <Box className="mt-3 logo mr-2">
                <Link to="/" className="text-l block">
                <img
                src={require("../assets/images/logo/logo.png")}
                alt="logo"
                className="ml-4 w-20"
                />
                </Link>
            </Box> 
           
            <Box className="flex items-center justify-between space-x-4 mt-4">
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Wishlist">
                        <Link to="/wishlist">
                            <FavoriteIcon className="text-lightcream hover:text-greene"/>
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4"> 
                    <Tooltip title="Messages">  
                        <Link to="/messages">
                            <MarkUnreadChatAltIcon className="text-lightcream hover:text-greene" />
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="My Ads">
                        <Link to="/ads">
                            <PointOfSaleIcon className="text-lightcream hover:text-greene"/>
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Tooltip title="Profile">
                        <Link to="/profile">
                            <PersonPinIcon className="text-lightcream hover:text-greene" />
                        </Link>
                    </Tooltip>
                </Box>
                <Box className="flex items-center justify-between space-x-4">
                    <Link to="/sell">
                        <Button className="px-8 mr-7">SELL</Button>
                    </Link>
                </Box>
            </Box>
        </Box>
        </nav>
    </header>
  );  
};