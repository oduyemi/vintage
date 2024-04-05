import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/style.css";



export const NewTrending = () => {
    return(
        <Box id="featured-products" className="product-store py-16">
            <Box className="container mx-auto">
                <Box className="flex flex-wrap items-center justify-between mb-8">
                    <Typography variant="h2" className="text-3xl font-bold">Trending</Typography>            
                    <Box className="btn-wrap">
                        <Link to="shop.html" className="flex items-center text-primary">View all products <i className="icon icon-arrow-io ml-1"></i></Link>
                    </Box>            
                </Box>
                <Box className="swiper product-swiper overflow-hidden">
                    <Box className="swiper-wrapper">
                        <Box className="swiper-slide">
                            <Box className="product-item">
                                <Box className="image-holder">
                                    <img src={require("../assets/images/1.webp")} alt="Books" className="product-image w-1/3" />
                                </Box>
                                <Box className="cart-concern">
                                    <Box className="cart-button flex justify-between items-center">
                                        <button type="button" className="btn-wrap cart-link flex items-center">Contact Seller <i className="icon icon-arrow-io"></i></button>
                                        <button type="button" className="view-btn tooltip flex">
                                            <i className="icon icon-screen-full"></i>
                                            <span className="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" className="wishlist-btn">
                                            <i className="icon icon-heart"></i>
                                        </button>
                                    </Box>
                                </Box>
                                <Box className="product-detail">
                                    <h3 className="product-title">
                                        <Link to="single-product.html">Full sleeve cover shirt</Link>
                                    </h3>
                                    <span className="item-price text-primary">$40.00</span>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="swiper-slide">
                            <Box className="product-item">
                                <Box className="image-holder">
                                    <img src={require("../assets/images/2.webp")} alt="Books" className="product-image w-1/3" />
                                </Box>
                                <Box className="cart-concern">
                                    <Box className="cart-button flex justify-between items-center">
                                        <button type="button" className="btn-wrap cart-link flex items-center">Contact Seller <i className="icon icon-arrow-io"></i></button>
                                        <button type="button" className="view-btn tooltip flex">
                                            <i className="icon icon-screen-full"></i>
                                            <span className="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" className="wishlist-btn">
                                            <i className="icon icon-heart"></i>
                                        </button>
                                    </Box>
                                </Box>
                                <Box className="product-detail">
                                    <h3 className="product-title">
                                        <Link to="single-product.html">Full sleeve cover shirt</Link>
                                    </h3>
                                    <span className="item-price text-primary">$40.00</span>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="swiper-slide">
                            <Box className="product-item">
                                <Box className="image-holder">
                                    <img src={require("../assets/images/3.webp")} alt="Books" className="product-image w-1/3" />
                                </Box>
                                <Box className="cart-concern">
                                    <Box className="cart-button flex justify-between items-center">
                                        <button type="button" className="btn-wrap cart-link flex items-center">Contact Seller <i className="icon icon-arrow-io"></i></button>
                                        <button type="button" className="view-btn tooltip flex">
                                            <i className="icon icon-screen-full"></i>
                                            <span className="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" className="wishlist-btn">
                                            <i className="icon icon-heart"></i>
                                        </button>
                                    </Box>
                                </Box>
                                <Box className="product-detail">
                                    <h3 className="product-title">
                                        <Link to="single-product.html">Full sleeve cover shirt</Link>
                                    </h3>
                                    <span className="item-price text-primary">$40.00</span>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="swiper-slide">
                            <Box className="product-item">
                                <Box className="image-holder">
                                    <img src={require("../assets/images/4.webp")} alt="Books" className="product-image w-1/3" />
                                </Box>
                                <Box className="cart-concern">
                                    <Box className="cart-button flex justify-between items-center">
                                        <button type="button" className="btn-wrap cart-link flex items-center">Contact Seller <i className="icon icon-arrow-io"></i></button>
                                        <button type="button" className="view-btn tooltip flex">
                                            <i className="icon icon-screen-full"></i>
                                            <span className="tooltip-text">Quick view</span>
                                        </button>
                                        <button type="button" className="wishlist-btn">
                                            <i className="icon icon-heart"></i>
                                        </button>
                                    </Box>
                                </Box>
                                <Box className="product-detail">
                                    <h3 className="product-title">
                                        <Link to="single-product.html">Full sleeve cover shirt</Link>
                                    </h3>
                                    <span className="item-price text-primary">$40.00</span>
                                </Box>
                            </Box>
                        </Box>
                        {/* Repeat similar structure for other swiper-slide elements */}
                    </Box>
                </Box>
                <Box className="swiper-pagination"></Box>
            </Box>
        </Box>
    )
}
