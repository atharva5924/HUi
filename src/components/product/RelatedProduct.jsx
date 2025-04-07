import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const RelatedProduct = ({ category }) => {
  const navigate = useNavigate();
  const { products, addToCart } = useContext(AppContext);
  const [realtedProduct, setRealtedProduct] = useState([]);
  useEffect(() => {
    setRealtedProduct(
      products.filter(
        (data) => data?.category?.toLowerCase() == category?.toLowerCase()
      )
    );
  }, [category, products]);

  const handleBuy = () => {
    addToCart(
      product._id,
      product.title,
      product.price,
      1,
      realtedProduct.imgSrc
    );
    navigate("/cart");
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

  return (
    <>
      <div className=" text-center bg-backgroundColor">
        <h1>Related Product</h1>
        <div className="container d-flex justify-content-center align-items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 px-9 my-9">
        {realtedProduct.map((product, index) => (
                          <Link to={`/product/${product._id}`}>
                            <div
                              className="border  shadow-md rounded-lg overflow-hidden mx-4 align-middle justify-center"
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
                                  {product.description.split(" ").slice(0, 6).join(" ")}...
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
    </>
  );
};

export default RelatedProduct;
