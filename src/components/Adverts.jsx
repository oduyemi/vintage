

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "./elements/Button";




export const Adverts = () => {
    return(
        <>
            <Box id="sideNav" className="lg:block hidden bg-white w-64 h-screen fixed rounded-none border-none">
                <Box className="p-4 space-y-4">
                    <Link to="/profile" aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-main">
                        <span className="-mr-1 font-medium"> My Ads</span>
                    </Link>

                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <i className="fas fa-wallet"></i>
                        <span><Link to="/profile-review">Reviews</Link></span>
                    </Link>
                    <Link to="#" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <i className="fas fa-exchange-alt"></i>
                        <span><Link to="/wishlist">Wishlist</Link></span>
                    </Link>
                </Box>
            </Box>

            <Box className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-0 mx-2">

                <Box className="bg-white rounded-xl p-4 shadow-md mb-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border-b-2 w-full">
                                    <h2 className="text-ml font-bold text-gray-600">My Ads</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                
                                    <Box>
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className=""
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                    <img src={require("../assets/images/4.webp")} className="md:w-40 mx-auto" alt="ads" />    
                                    </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right text-red-600">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Link to="">Delete</Link> &emsp; &emsp;
                                        <Link to="/sell"><Button className="px-4">Post Again</Button></Link>
                                    </Box>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                
                                    <Box>
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className=""
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                    <img src={require("../assets/images/2.webp")} className="md:w-40 mx-auto" alt="ads" />    
                                    </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right text-red-600">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Link to="">Delete</Link> &emsp; &emsp;
                                        <Link to="/sell"><Button className="px-4">Post Again</Button></Link>
                                    </Box>
                                </td>
                                <td>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                
                                    <Box>
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className=""
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                    <img src={require("../assets/images/1.webp")} className="md:w-40 mx-auto" alt="ads" />    
                                    </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right text-red-600">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <Link to="">Delete</Link> &emsp; &emsp;
                                        <Link to="/sell"><Button className="px-4">Post Again</Button></Link>
                                     </Box>
                                </td>
                                <td>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
    </>
    )
}