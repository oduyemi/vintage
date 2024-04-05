import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";




export const FooterBottom = () => {
    return(
        <Box id="footer-bottom" className="bg-sharpgreen py-6">
            <Box className="container mx-auto">
                <Box className="mx-auto">
                    <Box className="copyright">
                        <Typography variant="h6" sx={{fontSize:"14px", fontWeight:"300"}} paragraph className="text-base text-center">Vintage&copy; | ACE Limited | 
                            All rights reserved
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>    
    )
}
