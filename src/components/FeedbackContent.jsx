

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";




export const FeedbackContent = () => {
    return(
        <>
             <Box id="sideNav" className="lg:block hidden bg-faded w-full lg:w-64 h-screen fixed rounded-none border-none">
                <Box className="p-4 space-y-4">
                    <Link to="/profile" aria-label="dashboard"
                        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-main">
                        <span className="-mr-1 font-medium">{" "}My Ads</span>
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

            <Box className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

                <Box className="lg:flex gap-4 items-stretch">
                    <Box className="bg-white md:p-2 p-6 rounded-xl border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[50%]">
                        <Box className="flex justify-center items-center space-x-3 h-full">
                            <Box>
                                <Typography variant="h5" className="text-greene mt-2" paragraph>John Doe</Typography><br/>
                                <p>07055444778</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="bg-white p-4 rounded-xl xs:mb-4 max-w-full shadow-md lg:w-[50%]">
                        <Box className="flex flex-wrap justify-between h-full">
                            <Box
                                className="flex-1 bg-gradient-to-r from-main to-sharpgreen rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                                <Link to="" className="text-lightcream hover:text-main">Closed Ads</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-gradient-to-r from-main to-sharpgreen rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <i className="fas fa-exchange-alt text-white text-4xl"></i>
                                <Link to="" className="text-lightcream hover:text-main">Current Ads</Link>
                            </Box>

                            <Box
                                className="flex-1 bg-dark rounded-xl flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <Link to="/sell" className="text-lightcream hover:text-main">Post New</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="bg-white rounded-xl p-4 shadow-md my-4">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border-b-2 w-full">
                                    <h2 className="text-ml font-bold text-greene">Reviews</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b w-full">
                                <td className="px-4 py-2 text-left align-top w-2/3">
                                    <Box display="flex" justifyContent="center" alignItems="center" margin="10px">
                                        <Box>
                                            <Box>
                                            <span className="grid">
                                            <img src={require("../assets/images/avatar.png")} 
                                                className="w-8 inline" alt="ads" /> &emsp; 
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className=""
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                Jane Doe
                                            </Typography>
                                            </span> 
                                            </Box>
                                        </Box>
                                        <Box className="ml-8">
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className="mx-auto"
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                It is obvious now that I really look, but I purchased this 
                                                for my third tv. I already have two firesticks. I must admit
                                                that I didn’t look very hard at the pictures or functions
                                                because I assumed I knew what I was getting due to already having two.
                                                I bought a refurbished one because the other two were very
                                                expensive in comparison. This works great, but I have to get up
                                                to turn the tv on and off and to change the volume. I really wish
                                                that I had spend $7 more and gotten the one with volume and power. 
                                                Just be aware of that when purchasing.
                                            </Typography>
                                            </Box>
                                        </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right">
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className="pr-8"
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                </td>

                            </tr>
                            <tr className="border-b w-full">
                            <td className="px-4 py-2 text-left align-top w-2/3">
                                    <Box display="flex" justifyContent="center" alignItems="center" margin="10px">
                                        <Box>
                                            <Box>
                                            <span className="grid">
                                            <img src={require("../assets/images/avatar.png")} 
                                                className="w-8 inline" alt="ads" /> &emsp; 
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className=""
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                Jane Doe
                                            </Typography>
                                            </span> 
                                            </Box>
                                        </Box>
                                        <Box className="ml-8">
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className="mx-auto"
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                It is obvious now that I really look, but I purchased this 
                                                for my third tv. I already have two firesticks. I must admit
                                                that I didn’t look very hard at the pictures or functions
                                                because I assumed I knew what I was getting due to already having two.
                                                I bought a refurbished one because the other two were very
                                                expensive in comparison. This works great, but I have to get up
                                                to turn the tv on and off and to change the volume. I really wish
                                                that I had spend $7 more and gotten the one with volume and power. 
                                                Just be aware of that when purchasing.
                                            </Typography>
                                            </Box>
                                        </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right">
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className="pr-8"
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                </td>
                            </tr>
                            <tr className="border-b w-full">
                            <td className="px-4 py-2 text-left align-top w-2/3">
                                    <Box display="flex" justifyContent="center" alignItems="center" margin="10px">
                                        <Box>
                                            <Box>
                                            <span className="grid">
                                            <img src={require("../assets/images/avatar.png")} 
                                                className="w-8 inline" alt="ads" /> &emsp; 
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className=""
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                Jane Doe
                                            </Typography>
                                            </span> 
                                            </Box>
                                        </Box>
                                        <Box className="ml-8">
                                            <Typography 
                                                variant="h5"
                                                paragraph 
                                                className="mx-auto"
                                                sx={{
                                                    fontSize: "14px"
                                                }}
                                            >
                                                It is obvious now that I really look, but I purchased this 
                                                for my third tv. I already have two firesticks. I must admit
                                                that I didn’t look very hard at the pictures or functions
                                                because I assumed I knew what I was getting due to already having two.
                                                I bought a refurbished one because the other two were very
                                                expensive in comparison. This works great, but I have to get up
                                                to turn the tv on and off and to change the volume. I really wish
                                                that I had spend $7 more and gotten the one with volume and power. 
                                                Just be aware of that when purchasing.
                                            </Typography>
                                            </Box>
                                        </Box>
                                </td>
                               
                                <td className="px-4 py-2 text-right">
                                    <Typography 
                                        variant="h5"
                                        paragraph 
                                        className="pr-8"
                                        sx={{
                                            fontSize: "14px"
                                        }}
                                    >
                                        24/07/2024
                                    </Typography>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </Box>
    </>
    )
}