import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Yess")
    setIsMenuOpen(!isMenuOpen);
  };
  const { setFilteredData, products, logout, isAuthenticated, cart } =
    useContext(AppContext);
  // console.log("user cart = ",cart)

  const filterbyCategory = (cat) => {
    setFilteredData(
      products.filter(
        (data) => data.category.toLowerCase() == cat.toLowerCase()
      )
    );
  };
  const filterbyPrice = (price) => {
    setFilteredData(products.filter((data) => data.price <= price));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm(" ");
  };
  return (
    <>
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link to={"/"}>
        <div className="flex items-center space-x-2">
        <img width="32" height="32" src="https://img.icons8.com/external-jumpicon-glyph-ayub-irawan/32/228BE6/external-E-commerce-digital-marketing-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan.png" alt="external-E-commerce-digital-marketing-jumpicon-(glyph)-jumpicon-glyph-ayub-irawan"/>
          
            {" "}
            <h1 className="text-xl font-semibold">ShopVault</h1>
          
        </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-16">
          <Link to={"/product"}><a
            href=""
            className="hover:text-blue-400 text-gray-300 text-xl"
          >
            Products
          </a></Link>
          <Link to={"/about"}>
          <a
            href=""
            className="hover:text-blue-400 text-gray-300 text-xl"
          >
            About
          </a></Link>
          
          <a href="#features" className="hover:text-blue-400 text-gray-300 text-xl">
            Features
          </a>
          
        </nav>
        
        {/* Call to Action Button */}
        <div className="hidden md:flex">

        {isAuthenticated && (
            <Link
              to={"/cart"}
              type="button"
              className="px-4 py-2 border rounded-3xl position-relative mx-3"
            >
              <div className="flex">
              <span className="material-symbols-outlined">shopping_cart</span>

              {cart?.items?.length > 0 && (
                <span className="position-absolute  top-2 start-110 translate-middle badge rounded-pill bg-danger">
                  {cart?.items?.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
              </div>
            </Link>
          )}

          {isAuthenticated && (
            <Link to={"/login"}>
              <button
                className="px-4 py-2 bg-red-600 rounded-full hover:bg-blue-700"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to={"/login"}>
              <button className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
        </div>
        <button className="lg:hidden md:hidden text-gray-300 focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        {isMenuOpen && (
        
          <nav className=" md:hidden flex-col mx-16 space-x-16 justify-center align-middle">
          <Link to={"/product"}><a
            href=""
            className="block hover:text-blue-400 font-bold text-gray-300 text-xl"
          >
            Products
          </a></Link>
          <Link to={"/about"}>
          <a
            href=""
            className="block hover:text-blue-400 font-bold text-gray-300 text-xl"
          >
            About
          </a></Link>

          <Link>
          <a href="#features" className="block  hover:text-blue-400 font-bold py-2 text-gray-300 text-xl">
            Features
          </a></Link>
          
        
       
          {isAuthenticated && (
            <Link
              to={"/cart"}
              type="button"
              className=" my-2 px-4 py-2 border rounded-3xl position-relative mx-3"
            >
              <div className="block">
              <span className="material-symbols-outlined">shopping_cart</span>

              {cart?.items?.length > 0 && (
                <span className="position-absolute  top-2 start-110 translate-middle badge rounded-pill bg-danger">
                  {cart?.items?.length}
                  <span className="visually-hidden">unread messages</span>
                </span>
              )}
              </div>
            </Link>
          )}
          {isAuthenticated && (
            <Link to={"/login"}>
              <button
                className="block my-3 px-4 py-2 bg-red-600 rounded-full hover:bg-blue-700"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          )}
          {!isAuthenticated && (
            <Link to={"/login"}>
              <button className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700">
                Login
              </button>
            </Link>
          )}
          </nav>
       
        
      )}
     
    </header>
    </>
  );
};

export default Navbar;
