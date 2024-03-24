import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login/index";
import ForgetPassword from "../pages/ForgetPassword";
import ResetPassword from "../pages/ResetPassword";
import Profile from "../pages/Profile";
import Wishlist from "../pages/Wishlist";
import Messages from "../pages/Messages";
import Seller from "../pages/Seller";




export const Navigation = () => {
    return (
        <>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />}  />
                    <Route path="/forget-password" element={<ForgetPassword />}  />
                    <Route path="/reset-password" element={<ResetPassword />}  />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/seller" element={<Seller />} />
                </Routes>
        </>
    );
};