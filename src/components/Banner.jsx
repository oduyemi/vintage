import { Box, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const Banner = () => {
    return(
        <Box maxWidth="xl" height={240} className="bg-main text-white">
            <Box maxWidth="l" className="">
                <Box className="pt-16">
                    <Typography
                        variant="h6" 
                        paragraph 
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontWeight: "100",
                            
                            
                        }}
                        
                    >
                        Find anything in Nigeria
                    </Typography>
                </Box>
                <Box>
                <form className="mx-auto text-center"> 
                    <span>
                        <input 
                            type="search"
                            placeholder="Looking for..."
                            className="
                                w-2/5
                                rounded-md
                                border
                                border-[#E9EDF4]
                                py-3
                                px-5
                                bg-[#FCFDFE]
                                text-black
                                placeholder-[#ACB6BE]
                                outline-none
                                focus-visible:shadow-none
                                focus:border-main
                                "
                        />
                            <SearchIcon 
                                className="
                                    relative 
                                    right-8 
                                    top-1/2 
                                    transform 
                                    -translate-y-1/5 
                                    text-gray-400
                                    "
                            />
                    </span>
                </form>
            </Box>
            </Box>
           
        </Box>
    )
}