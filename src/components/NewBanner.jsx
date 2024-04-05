


import { Link } from "react-router-dom";
import "../assets/css/style.css";
// import { SlideBanner } from "./SlideBanner";
import { Sidebar } from "./Sidebar";



export const NewBanner = () => {
    return(
        <section class="hero">
            <div class="container mx-auto">
                <div class="flex flex-wrap">
                    <div class="lg:w-1/4">
                        <div class="hero__categories">
                            <div class="hero__categories__all">
                                <i class="fa fa-bars"></i>
                                <span>All Categories</span>
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                    <div class="lg:w-3/4">
                        <div class="hero__search">
                            <div class="hero__search__form">
                                <form action="">
                                    <div class="hero__search__categories">
                                        All Categories
                                        <span class="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do you need?" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
                                    <button type="submit" class="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">SEARCH</button>
                                </form>
                            </div>
                            <div class="hero__search__phone">
                                <div class="hero__search__phone__icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                        <div class="hero__item set-bg">
                            <div class="hero__text">
                                {/* <SlideBanner /> */}
                                {/* <span>FRUIT FRESH</span>
                                <h2>Vegetable <br />100% Organic</h2>
                                <p>Free Pickup and Delivery Available</p>
                                <Link to="" class="px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600">SHOP NOW</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}