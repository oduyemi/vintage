import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Featured = () => {
    return(
        <Box className="container pt-5">
            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-5">
                <Box className="pb-1">
                    <Box className="border mb-4 p-6 flex items-center bg-newgreen">
                        <h1 className="fas fa-check text-4xl mr-3"></h1>
                        <h5 className="font-semibold text-lightcream">Quality Product</h5>
                    </Box>
                </Box>
                <Box className="pb-1">
                    <Box className="border mb-4 p-6 flex items-center bg-newgreen">
                        <h1 className="fas fa-shipping-fast text-4xl mr-3"></h1>
                        <h5 className="font-semibold text-lightcream">Free Shipping</h5>
                    </Box>
                </Box>
                <Box className="pb-1">
                    <Box className="border mb-4 p-6 flex items-center bg-newgreen">
                        <h1 className="fas fa-exchange-alt text-4xl mr-3"></h1>
                        <h5 className="font-semibold text-lightcream">14-Day Return</h5>
                    </Box>
                </Box>
                <Box className="pb-1">
                    <Box className="border mb-4 p-6 flex items-center bg-newgreen">
                        <h1 className="fas fa-phone-volume text-4xl mr-3 text-lightorange"></h1>
                        <h5 className="font-semibold text-lightcream">24/7 Support</h5>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
