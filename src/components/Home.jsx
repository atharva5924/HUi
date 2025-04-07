import React, { useContext, useState } from "react";
import RandomDots from "./Randomdots";
import AppContext from "../context/AppContext";
import TestimonialsSection from "./testimonials";
import Footer from "./footer";
import { Link } from "react-router-dom";

function Home() {
    const { products} = useContext(AppContext);
    // console.log(products);


  return (
    <>
    <div className="bg-backgroundColor text-white min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section id="hero" className="relative py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Revolutionize Your <br />
              Shopping Experience
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Discover the best products with cutting-edge technology at unbeatable prices.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link to={"/product"}><a
                href=""
                className="px-6 py-3 bg-blue-500 rounded-3xl hover:bg-blue-600 text-white"
              >
                Shop Now
              </a></Link>
              <a
                href="#features"
                className="px-6 py-3 border border-blue-500 rounded-xl hover:bg-blue-500 hover:text-white"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-0 w-1/2">
            <img
              src="https://static.wixstatic.com/media/c837a6_8abd90a25be34a758931e215516dbd7f~mv2.png/v1/crop/x_1756,y_452,w_3479,h_3461/fill/w_548,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/new%20first%20fold.png"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section -----------------------------------------------------------------*/}
      <section id="features" className=" text-white py-16">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-sm text-blue-400 uppercase">Why Us</p>
          <h2 className="text-3xl font-bold">
            Built for Traders, costemers and clients
          </h2>
          <p className="mt-4 text-gray-400">
            One stop destination for tech related product and best place to buy them.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-4 rounded-full">
                {/* Icon for Secure Transactions */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2a7 7 0 00-7 7v4.235a5.002 5.002 0 001 9.766 5 5 0 0010 0 5.002 5.002 0 001-9.766V9a7 7 0 00-7-7zm0 18a3 3 0 10-3-3 3 3 0 003 3zm-3-7a5 5 0 0110 0v.765a5.99 5.99 0 00-5-1.732 5.99 5.99 0 00-5 1.732z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
            <p className="text-gray-400">
              Advanced encryption for peace of mind.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-4 rounded-full">
                {/* Icon for Built for Speed */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M13 2v8h8L13 2zm-4 10H3v9h16v-9H9zm7 7h-2v-3h2v3zm-4 0h-2v-3h2v3zm-4 0H6v-3h2v3z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Quality Product</h3>
            <p className="text-gray-400">
              Lightning-fast blockchain processing.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-4 rounded-full">
                {/* Icon for Seamless Integration */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H9a1 1 0 01-1-1V2zM7 6h10v2H7V6zm4 5a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2zm-6 5h10v2H5v-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast delivery</h3>
            <p className="text-gray-400">
              Works with major wallets and crypto.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Product Highlights */}
      <section id="products" className="py-20  ">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold text-center mb-10">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-gray-800 p-3 w-3/4 rounded-lg">
              <img
                src={products.length > 0 ? products[0]?.imgSrc : 'Loading...'}
                alt="Product 1"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{products.length > 0 ? products[0]?.title : 'Loading...'}</h3>
              <p className="text-gray-400 mb-4">{products.length > 0 ? products[0]?.price : 'Loading...'}</p>
              <Link to={`/product/${products[0]?._id}`}><button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                View Details
              </button></Link>
            </div>
            <div className="bg-gray-800 p-6 w-3/4 rounded-lg">
              <img
                src={products.length > 0 ? products[1]?.imgSrc : 'Loading...'}
                alt="Product 2"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{products.length > 0 ? products[1]?.title : 'Loading...'}</h3>
              <p className="text-gray-400 mb-4">${products.length > 0 ? products[1]?.price : 'Loading...'}</p>
              <Link to={`/product/${products[1]?._id}`}><button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                View Details
              </button></Link>
            </div>
            <div className="bg-gray-800 p-6 w-3/4 rounded-lg">
              <img
                src={products.length > 0 ? products[2]?.imgSrc : 'Loading...'}
                alt="Product 3"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{products.length > 0 ? products[2]?.title : 'Loading...'}</h3>
              <p className="text-gray-400 mb-4">{products.length > 0 ? products[2]?.price : 'Loading...'}</p>
              <Link to={`/product/${products[2]?._id}`}><button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                View Details
              </button></Link>
            </div>
            
          </div>
        </div>
      </section>

{/* ------------------------------testimonilas */}
<TestimonialsSection/>



      {/* Footer */}
     <Footer/>
    </div>
    </>
  );
}

export default Home;
