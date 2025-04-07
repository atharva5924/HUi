import React, { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom"
import LoginPage from "./LoginPage";
import SignUpPage from "./Signup";
import ForgotPasswordPage from "./ForgotPasswordPage";
import { UserCredentials, SignUpData, ForgotPasswordData, LoginResponse } from "./types";
import axios from 'axios';

const AuthComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"login" | "signup" | "forgot">(
    "login"
  );
  const navigate: NavigateFunction = useNavigate();

  const handleLogin = async (credentials: UserCredentials) => {
    try {
      const res = await axios.post<LoginResponse>(
        "http://localhost:3000/api/auth/login",
        credentials,
        { withCredentials: true }
      );
      
      console.log("Login successful:", res.data);
      // You can store token or redirect the user here
      const role = res.data.user.role;

      // Navigate based on role
      if (role === 'admin') {
        navigate('/admin');
      } else if (role === 'verifier') {
        navigate('/verifier');
      } else {
        navigate('/user');
      }

      } catch (error: any) {
        console.error("Login error:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Login failed");
      }
    };

    const handleSignUp = async (data: SignUpData) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          data,
          { withCredentials: true }
        );
        console.log("Signup successful:", res.data);
        alert("Signup successful! You can now log in.");
        setCurrentPage("login");
      } catch (error: any) {
        console.error("Signup error:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Signup failed");
      }
    };

    const handleForgotPassword = async (data: ForgotPasswordData) => {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/forgot-password",
          data,
          { withCredentials: true }
        );
        console.log("Password reset requested:", res.data);
        alert("Password reset link sent to your email.");
        setCurrentPage("login");
      } catch (error: any) {
        console.error("Forgot password error:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Failed to send reset link");
      }
    };


    return (
      <div className="auth-app">
        {currentPage === "login" && (
          <LoginPage
            onLogin={handleLogin}
            onSwitchToSignUp={() => setCurrentPage("signup")}
            onSwitchToForgotPassword={() => setCurrentPage("forgot")}
          />
        )}
        {currentPage === "signup" && (
          <SignUpPage
            onSignUp={handleSignUp}
            onSwitchToLogin={() => setCurrentPage("login")}
          />
        )}
        {currentPage === "forgot" && (
          <ForgotPasswordPage
            onResetPassword={handleForgotPassword}
            onSwitchToLogin={() => setCurrentPage("login")}
          />
        )}
      </div>
    );
  };

  export default AuthComponent;
