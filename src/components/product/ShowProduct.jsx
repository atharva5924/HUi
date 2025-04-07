/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer";

const ShowProduct = () => {
  const { products, filteredData, addToCart } = useContext(AppContext);
  const navigate = useNavigate();
  const handleBuy = () => {};
  return (
    <>
      <div className="flex items-center justify-center py-6 min-h-screen bg-backgroundColor">
        <div className="w-11/12 lg:w-3/4 md:w-5/6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {products.map((product, index) => (
              <Link to={`/product/${product._id}`}>
                <div
                  className="border  shadow-md rounded-lg overflow-hidden"
                  key={index}
                >
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="w-full h-36 py-2 px-2 rounded-lg object-cover"
                      style={{
                        height: "300px",
                      }}
                    />
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    5⭐
                    </div>
                  </div>
                  {/* Details */}
                  <div className="p-4">
                    <h3 className="font-bold text-blue-300 text-xl py-2">
                      {product.title.split(" ").slice(0, 2).join(" ")}...
                    </h3>
                    <p className="text-gray-200 text-lg">
                      {product.description.split(" ").slice(0, 3).join(" ")}...
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <span className="text-orange-500 text-lg font-bold ">
                        {product.price}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        {product.originalPrice}
                      </span>
                      <span className="text-green-500 font-bold text-xs">
                        {product.discount}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShowProduct;
