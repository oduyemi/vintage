import React, { useState } from "react";
import Button from "./elements/Button";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios'
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const RegisterForm = () => {
    // const [fname, setFname] = useState("");
    // const [surname, setSurname] = useState("");
    // const [email, setEmail] = useState("");
    // const [pwd, setPwd] = useState("");
    // const [cpwd, setCpwd] = useState("");
    // const [error, setError] = useState(null);
    const [showPwd, setShowPwd] = useState(false);
    const [showCpwd, setShowCpwd] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        surname: "",
        email: "",
        pwd: "",
        cpwd: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (formData.pwd !== formData.cpwd) {
                throw new Error("Both Passwords must match!");
            }
    
            const response = await axios.post("http://localhost:8000/register", formData, {
                headers: { "Content-Type": "application/json" }
            });
    
            console.log(response.data);
    
            setFlashMessage({
                type: "success",
                message: "Registration successful. Redirecting to Login.",
            });
    
            setFormSubmitted(true);
    
            setTimeout(() => {
                window.location.href = "/login"
            }, 2000);
    
        } catch (error) {
            console.error("Error:", error);
    
            let errorMessage;
            if (error.response) {
                console.log("Response Data:", error.response.data);
                errorMessage = error.response.data.detail || error.response.data.message;
            } else {
                console.error("Request Error:", error.request);
                errorMessage = "No response received from the server. Please try again later.";
            }
    
            setFlashMessage({ type: "error", message: errorMessage });
        }

    }
    const toggleShowPassword = () => {
        setShowPwd(!showPwd)
    }

    const toggleShowConfirmPassword = () => {
        setShowCpwd(!showCpwd)
    }
    return (
        <Box margin="10px" className="h-screen mx-auto border rounded-md shadow">
            <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
                <h1 className='text-center text-3xl  hover:text-lightorange font-extrabold py-3 text-greene'>Register</h1>
                    {/* {flashMessage && (
                        <Box className={`text-${flashMessage.type} text-center my-3 text-blu`}>
                            {flashMessage.message}
                    </Box>
                    )} */}
                <Box className="flex flex-col pt-10">
                    <label htmlFor="fname" className="">First Name</label>
                    <input type="text" name="fname" className="border mb-3 rounded-md" onChange={e => setFormData({...formData, fname: e.target.value})} value={formData.fname} />
                    <label htmlFor="surname" className="">Surname</label>
                    <input type="text" name="surname" className="border mb-3 rounded-md" onChange={e => setFormData({...formData, surname: e.target.value})} value={formData.surname} />
                    <label htmlFor="email" className="">Email</label>
                    <input type="email" name="email" className="border mb-3 rounded-md" onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
                    <label htmlFor="pwd" className="">Password</label>
                    <Box className="relative">
                    <input type={showPwd ? "text" : "password"} name="pwd" className="rounded-md border pr-48" onChange={e => setFormData({...formData, pwd: e.target.value})} value={formData.pwd} />
                        <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPwd ? <VisibilityIcon /> : <VisibilityOffIcon />} </button>
                    </Box>
                    <label htmlFor="cpwd" className="">Confirm Password</label>
                    <Box className="relative">
                    <input type={showCpwd ? "text" : "password"} name="cpwd" className="rounded-md border pr-48" onChange={e => setFormData({...formData, cpwd: e.target.value})} value={formData.cpwd} />
                        <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowConfirmPassword}> {showCpwd ? <VisibilityIcon /> : <VisibilityOffIcon />} </button>
                    </Box>
                    <Button type="submit" className="h-8 mt-5 " onClick={handleSubmit}>Register</Button>
                </Box>
                <Box className="text-blu text-center my-3">
                    <span style={{ fontSize: "smaller"}}>Already have an account? &nbsp;
                        <Link className="" to="/login" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </Box>
            </form>
        </Box>
    );
};    