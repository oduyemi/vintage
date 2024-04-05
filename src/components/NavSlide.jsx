import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const NavSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return(
        <div className="container-fluid mb-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 border-t px-5">
                <div className="lg:col-span-3 hidden lg:block">
                    <Link to="#navbar-vertical" className="btn shadow-none flex items-center justify-between bg-primary text-white w-full" data-toggle="collapse" style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}>
                        <h6 className="m-0">Categories</h6>
                        <i className="fa fa-angle-down text-dark"></i>
                    </Link>
                    <nav className="collapse show navbar navbar-vertical navbar-light flex flex-col p-0 border border-t-0 border-b-0" id="navbar-vertical">
                        <div className="navbar-nav w-full overflow-hidden" style={{ height: '410px' }}>
                            <div className="nav-item dropdown">
                                <Link to="" className="nav-link" data-toggle="dropdown">Dresses <i className="fa fa-angle-down float-right mt-1"></i></Link>
                                <div className="dropdown-menu absolute bg-secondary border-0 rounded-0 w-full m-0">
                                    <Link to="" className="dropdown-item">Men's Dresses</Link>
                                    <Link to="" className="dropdown-item">Women's Dresses</Link>
                                    <Link to="" className="dropdown-item">Baby's Dresses</Link>
                                </div>
                            </div>
                            <Link to="" className="nav-item nav-link">Shirts</Link>
                            <Link to="" className="nav-item nav-link">Jeans</Link>
                            <Link to="" className="nav-item nav-link">Swimwear</Link>
                            <Link to="" className="nav-item nav-link">Sleepwear</Link>
                            <Link to="" className="nav-item nav-link">Sportswear</Link>
                            <Link to="" className="nav-item nav-link">Jumpsuits</Link>
                            <Link to="" className="nav-item nav-link">Blazers</Link>
                            <Link to="" className="nav-item nav-link">Jackets</Link>
                            <Link to="" className="nav-item nav-link">Shoes</Link>
                        </div>
                    </nav>
                </div>
                <div className="lg:col-span-9">
                    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                        <Link to="" className="text-decoration-none block lg:hidden">
                            <h1 className="m-0 text-2xl font-semibold"><span className="text-primary font-bold border px-3 mr-1">V</span>Shopper</h1>
                        </Link>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto py-0">
                                <Link to="index.html" className="nav-item nav-link active">Home</Link>
                                <Link to="shop.html" className="nav-item nav-link">Shop</Link>
                                <Link to="detail.html" className="nav-item nav-link">Shop Detail</Link>
                                <div className="nav-item dropdown">
                                    <Link to="" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <Link to="cart.html" className="dropdown-item">Shopping Cart</Link>
                                        <Link to="checkout.html" className="dropdown-item">Checkout</Link>
                                    </div>
                                </div>
                                <Link to="contact.html" className="nav-item nav-link">Contact</Link>
                            </div>
                            <div className="navbar-nav ml-auto py-0">
                                <Link to="" className="nav-item nav-link">Login</Link>
                                <Link to="" className="nav-item nav-link">Register</Link>
                            </div>
                        </div>
                    </nav>
                    {/* <section id="latest-collection" className="bg-gray-100">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-12">
                                <div className="col-span-7 lg:col-span-7">
                                    <div className="collection-item">
                                        <div className="products-thumb">
                                            <img src={require("../assets/images/w1.jpeg")} alt="collection item" className="w-full rounded-lg" />
                                        </div>
                                        <div className="col-span-6 md:col-span-6 sm:col-span-6 product-entry">
                                            <div className="categories text-gray-600">Casual Collection</div>
                                            <h3 className="item-title text-2xl font-semibold">Street Wear</h3>
                                            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                            <div className="btn-wrap mt-4">
                                                <Link to="" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md">Shop Collection <i className="icon icon-arrow-io ml-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-5 lg:col-span-5">
                                    <div className="collection-item top-item">
                                        <div className="products-thumb">
                                            <img src={require("../assets/images/w1.jpeg")} alt="collection item" className="w-full rounded-lg" />
                                        </div>
                                        <div className="col-span-6 md:col-span-6 product-entry">
                                            <div className="categories text-gray-600">Basic Collection</div>
                                            <h3 className="item-title text-2xl font-semibold">Basic Shoes</h3>
                                            <div className="btn-wrap mt-4">
                                                <Link to="" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md">Shop Collection <i className="icon icon-arrow-io ml-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="collection-item bottom-item mt-6">
                                        <div className="products-thumb">
                                            <img src={require("../assets/images/w1.jpeg")} alt="collection item" className="w-full rounded-lg" />
                                        </div>
                                        <div className="col-span-6 md:col-span-6 product-entry">
                                            <div className="categories text-gray-600">Best Selling Product</div>
                                            <h3 className="item-title text-2xl font-semibold">Woolen Hat</h3>
                                            <div className="btn-wrap mt-4">
                                                <Link to="" className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md">Shop Collection <i className="icon icon-arrow-io ml-1"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <Slider {...settings}>
                        <div className="carousel-item active" style={{ height: '410px' }}>
                            <img className="img-fluid" src={require("../assets/images/logo/logo.png")} alt="Image" />
                            <div className="carousel-caption flex flex-col items-center justify-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h4 className="text-light text-uppercase font-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="text-white font-semibold text-4xl mb-4">Fashionable Dress</h3>
                                    <Link to="" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" style={{ height: '410px' }}>
                            <img className="img-fluid" src={require("../assets/images/logo/logo.png")} alt="Image" />
                            <div className="carousel-caption flex flex-col items-center justify-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h4 className="text-light text-uppercase font-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="text-white font-semibold text-4xl mb-4">Reasonable Price</h3>
                                    <Link to="" className="btn btn-light py-2 px-3">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
