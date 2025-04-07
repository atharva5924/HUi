import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import RelatedProduct from "./RelatedProduct";
import AppContext from "../../context/AppContext";
import Footer from "../footer";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "https://shopvault-backend.onrender.com/api";
  // const url = "http://localhost:1000/api";
  const { addToCart } = useContext(AppContext);
  useEffect(() => {
    const fetchProduct = async () => {
      const api = await axios.get(`${url}/product/${id}`, {
        headers: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });
      // console.log(api);
      // console.log("yess");
      setProduct(api.data.product);
      // setProducts(api.data.products);
    };
    fetchProduct();
  }, [id]);

  const handleBuy = () => {
    addToCart(product._id, product.title, product.price, 1, product.imgSrc);
    navigate("/cart");
  };
  return (
    <>
      <div className="bg-backgroundColor top-1 min-h-screen  items-start py-10 justify-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center gap-12 px-6 text-white">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <img
              src={product?.imgSrc} // Replace with the actual image URL
              alt="Dynasty Headphone"
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold">{product?.title}</h1>
            <p className="mt-4 text-lg text-gray-400">{product?.category}</p>
            <p className="mt-4 text-3xl text-blue-500 font-semibold">
              ₹ {product?.price}
            </p>

            {/* Features */}
            <div className="mt-6 space-y-2 text-gray-400">
              <p>📆 30-day free trial</p>
              <p>🎁 Available gift wrapping</p>
              <p>🔒 3 years warranty</p>
            </div>

            {/* Stock Information */}

            {product?.qty == 0 && (
              <p className="mt-6 text-red-500 font-medium">Out of Stock</p>
            )}
            {product?.qty != 0 && (
              <p className="mt-6 text-blue-500 font-medium">
                {" "}
                HURRY, ONLY {product?.qty} ITEMS LEFT IN STOCK!
              </p>
            )}

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              {product?.qty != 0 && (
                <button
                  className="w-full bg-white text-black py-3 font-medium rounded-lg hover:bg-gray-200 "
                  onClick={handleBuy}
                >
                 Buy now
                </button>
              )}
              {product?.qty == 0 && (
                <button
                  className="w-full bg-gray-400 text-black py-3 font-medium rounded-lg  disabled "
                 
                >
                  Out Of Stock
                </button>
              )}
              {product?.qty != 0 && (
                <button
                  className="w-full bg-white text-black py-3 font-medium rounded-lg hover:bg-gray-200 "
                  onClick={() =>
                    addToCart(
                      product?._id,
                      product?.title,
                      product?.price,
                      1,
                      product?.imgSrc
                    )
                  }
                >
                  ADD TO CART
                </button>
              )}
              {product?.qty == 0 && (
                <button
                  className="w-full bg-gray-400 text-black py-3 font-medium rounded-lg  disabled "
                 
                >
                  Buy now
                </button>
              )}
             
            </div>
          </div>
        </div>
      <div className=" mx-auto px-6 py-10 align-middle justify-center bg-backgroundColor">
        <h2 className="text-2xl font-bold justify-center align-middle text-white">Product Description</h2>
        <p className="text-gray-400 mt-4">
          {product?.description}
        </p>
        
      </div>
      </div>

      {/* Tech Specs */}

      <RelatedProduct category={product?.category} />
      <Footer />
    </>
  );
};

export default ProductDetail;
