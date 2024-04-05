import React, { useState } from "react";
// import { UserContext } from "../UserContext";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from "./elements/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const LoginForm = () => {
    // const { handleLogin, flashMessage } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [error, setError] = useState(null);
    const [showPwd, setShowPwd] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        pwd: "",
     });
     const [formSubmitted, setFormSubmitted] = useState(false);

     const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
     };

    //  const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setFormSubmitted(true); 
    //     handleLogin(formData.email, formData.pwd)
    //  };


    const toggleShowPassword = () => {
        setShowPwd(!showPwd)
    }
    return (
        <Box margin="10px" className="h-screen mx-auto border rounded-md shadow">
            <form className="max-w-sm mx-auto w-full" onSubmit="">
                <h1 className='text-center text-3xl text-greene hover:text-lightorange font-extrabold pt-10 pb-10'>Login Form</h1>
                    {/* {flashMessage && (
                        <Box className={`text-${flashMessage.type} text-center my-3 text-main`}>
                            {flashMessage.message}
                        </Box>
                    )} */}
                <Box className="flex flex-col pt-10">
                    <label htmlFor="email" className="">Email</label>
                        <input type="email" name="email" className="border mb-3 rounded-md" onChange={e => setFormData({...formData, email: e.target.value})} value={formData.email} />
                    <label htmlFor="pwd" className="">Password</label>
                    <Box className="relative">
                    <input type={showPwd ? "text" : "password"} name="pwd" className="rounded-md border pr-48" onChange={e => setFormData({...formData, pwd: e.target.value})} value={formData.pwd} />
                    <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPwd ? <VisibilityIcon /> : <VisibilityOffIcon />} </button>
                    </Box>
                    <Button type="submit" className="h-8 mt-5 " onClick="">Login</Button>
                </Box>
                <Box className="text-main text-center my-3">
                    <span style={{ fontSize: "smaller"}}>Don't have an account yet? &nbsp;
                        <Link className="" to="/register" style={{ textDecoration: "none" }}>Click Here</Link>
                    </span>
                </Box>
            </form>
        </Box>
    )
}