import React, { useContext } from "react";
import { useState } from "react";
import AppContext from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const onChangerHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const {  email, password } = formData;
  const submitHandler = async (e) => {
    e.preventDefault();
    // alert("Your form has been submited")

    const result = await login( email, password);

    if (result.success) {
      navigate("/");
    }

    // console.log(formData);
  };
  return (
    <>
      {/* <div
        className="container my-5 p-4"
        style={{
          width: "600px",
          border: "2px solid yellow",
          borderRadius: "10px",
        }}
      >
        <h1 className="text-center">User Login</h1>
        <form onSubmit={submitHandler} className="my-3">
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={onChangerHandler}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={onChangerHandler}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid col-6 mx-auto my-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to={"/register"}><button type="submit" className="btn btn-primary">
              register
            </button></Link>
          </div>
         
        </form>
      </div> */}



<div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="relative bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white">
          ✕
        </button>

        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700">
            <span className="text-3xl text-white">🔒</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-white">
          Sign in
        </h2>
        <p className="text-center text-gray-400 text-sm mb-8">
          Keep it all together and you'll be fine
        </p>

        {/* Form */}
        <form onSubmit={submitHandler} >
          {/* Email/Phone Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg text-gray-400 mb-2"
            >
              E-mail 
            </label>
            <input
             name="email"
             value={formData.email}
             onChange={onChangerHandler}
             type="email"
             
             id="exampleInputEmail1"
             aria-describedby="emailHelp"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-lg text-gray-400 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
               name="password"
               value={formData.password}
               onChange={onChangerHandler}
               type={showPassword ? "text" : "password"}
              
               id="exampleInputPassword1"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <a
              href="#"
              className="text-sm text-violet-500 hover:underline"
            >
              Forgot Password
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-violet-500 text-white text-lg font-semibold py-2 rounded-lg hover:bg-violet-600 transition"
          >
            Sign in
          </button>
          <Link to={"/register"}><button
            
            className="w-full border border-violet-500 text-white text-lg font-semibold py-2 my-2 rounded-lg hover:bg-violet-600 transition"
          >
            Register
          </button></Link>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
