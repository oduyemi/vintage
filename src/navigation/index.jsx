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
import Sell from "../pages/Sell";
import Feedback from "../pages/Feedback";
import Ads from "../pages/Ads";
import AdminLogin from "../pages/AdminLogin";




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
                    <Route path="/profile-review" element={<Feedback />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/ads" element={<Ads />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/sell" element={<Sell />} />
                    <Route path="/admin/login" element={<AdminLogin />} />
                </Routes>
        </>
    );
};