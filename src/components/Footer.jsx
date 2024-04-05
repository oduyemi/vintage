import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FooterBottom } from "./FooterBottom";
import Button from "./elements/Button"




export const Footer = () => {
    return(
        <Box className="bg-dark text-lightcream">
            <footer id="footer">
                <Box className="container mx-auto">
                    <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                        <Box className="footer-menu">
                            <Typography variant="h5" className="font-bold text-lightorange">About Us</Typography>
                            <ul className="menu-list list-none">
                                <li className="menu-item">
                                    <Link to="">About Vintage</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="">Careers </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="">Terms &amp; Conditions</Link>
                                </li>
                                
                                <li className="menu-item">
                                    <Link to="">Billing Policy</Link>
                                </li>
                            </ul>
                        </Box>
                        <Box className="footer-menu">
                            <Typography variant="h5" className="font-bold text-lightorange">Customer Service</Typography>
                            <ul className="menu-list list-none">
                                <li className="menu-item">
                                    <Link to="">FAQ</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="">Contact Us</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="">Privacy Policy</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="">Cookie Guidelines</Link>
                                </li>
                            </ul>
                        </Box>
                        <Box className="footer-menu">
                            <Typography variant="h5" gutterBottom className="font-bold text-lightorange">App</Typography>
                            <ul className="menu-list list-none">
                                <li className="menu-item">
                                    <Link to="">
                                        <img src={require("../assets/images/app.png")} width="50%" alt="Appstore" />
                                    </Link>
                                </li><br/>
                                <li className="menu-item">
                                    <Link to="">
                                    <img src={require("../assets/images/play.png")} width="50%" alt="Playstore" />
                                    </Link>
                                </li>
                            </ul>
                            {/* <Typography variant="body1" paragraph>
                                Do you have any questions or suggestions? <Link to="#" className="text-blue-600">ourservices@ultras.com</Link>
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Do you need assistance? Give us a call. <br />
                                <strong>+57 444 11 00 35</strong>
                            </Typography> */}
                        </Box>
                        <Box className="footer-menu">
                            <Typography variant="h5" className="font-bold text-lightorange">Blank</Typography>
                            <p>Cras mattis sit ornare in metus eu amet adipiscing enim. Ullamcorper in orci, ultrices integer eget arcu. Consectetur leo dignissim lacus, lacus sagittis dictumst.</p>
                            <Box className="social-links">
                                <ul className="flex list-none">
                                    <li>
                                        <Link to="">
                                            <i className="icon icon-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="icon icon-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="icon icon-youtube-play"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <i className="icon icon-behance-square"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </footer>
            <hr />

            <FooterBottom />
        </Box>
    )
}
