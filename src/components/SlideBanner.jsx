import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Link } from "react-router-dom";

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
            <Box display="flex" height={260} justifyContent="center" alignItems="center"  className="slidebanner relative z-1 mx-auto">
                <Box maxWidth="md" className="slidebox shadow border rounded-xl mt-6 ml-6">
                    <Slider {...settings}
                        className="ad_slider flex items-center justify-center"
                    >
                        <Box className="item mx-auto">
                            <img src={require("../assets/images/Footer.png")} 
                                className="post_ad_img px-6 md:px-12 object-cover" alt="Admin Ads" 
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
                <Box maxWidth="sm" marginLeft="30px" className="bg-dark hover:bg-newgreen shadow rounded-xl mt-6 mx-6 w-fit">
                    <Typography 
                        variant="h5"
                        className="text-lightcream  animate-pulse"
                        sx={{
                            margin: "10px",
                            padding: "10px",
                            textAlign: "center",
                            fontWeight: "300",
                            fontSize: "16px"
                        }}
                    >
                        Want to sell something?
                    </Typography>
                    <Link to="/sell">
                        <ControlPointIcon 
                            className="text-lightcream pointicon"
                            sx={{
                                fontSize: 80,
                                marginLeft:"34%"
                            }}
                        />
                    </Link>
                    <Typography
                        variant="h5"
                        className="text-lightcream"
                        sx={{
                            margin: "10px",
                            padding: "10px",
                            textAlign: "center",
                            fontWeight: "300",
                            fontSize: "16px"
                        }}
                    >
                        Post an advert for free
                    </Typography>


                </Box>
      </Box>
      </>
    )
}