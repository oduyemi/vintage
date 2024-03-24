import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const SlideBanner = () => {
 var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    gutter: 10,
    infinite: true,
    };

    return(
        <>
            <Box display="flex" height={240} justifyContent="center" margin="10px" className="slidebanner relative z-1">
                <Box maxWidth="l" className="slidebox shadow border rounded-xl">
                    <Slider {...settings}
                        className="ad_slider flex items-center justify-center"
                    >
                        <Box className="item mx-auto">
                            <img src={require("../assets/images/logo/logo.png")} 
                                className="post_ad_img px-6 md:px-12 w-50" alt="Admin Ads" 
                            />
                        </Box>
                        <Box className="item mx-auto">
                            <img src={require("../assets/images/logo/logo.png")}
                                className="post_ad_img px-6 md:px-12 w-50" alt="Admin Ads" 
                            />
                        </Box>
                        <Box className="item mx-auto">
                            <img src={require("../assets/images/logo/logo.png")}
                                className="post_ad_img px-6 md:px-12 w-50" alt="Admin Ads" 
                            />
                        </Box>
                    </Slider>
                </Box>
                <Box maxWidth="sm" marginLeft="30px" className="bg-sharpgreen shadow rounded-xl">
                    <Typography 
                        variant="h5"
                        className="text-lightcream  animate-pulse"
                        sx={{
                            margin: "10px",
                            paddingTop: "10px",
                            textAlign: "center",
                            fontWeight: "300",
                            fontSize: "20px"
                        }}
                    >
                        Want to sell something?
                    </Typography>
                    <ControlPointIcon 
                        className="text-lightcream"
                        sx={{
                            fontSize: 80,
                            marginLeft:"34%"
                        }}
                    />
                    <Typography
                        variant="h5"
                        className="text-lightcream"
                        sx={{
                            margin: "10px",
                            textAlign: "center",
                            fontWeight: "300",
                            fontSize: "20px"
                        }}
                    >
                        Post an advert for free
                    </Typography>


                </Box>
      </Box>
      </>
    )
}