import React from "react";
import AuthComponent from "./AuthComponent";
import "./auth.css";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex flex-col align-middle text-center py-12">
        <h2 className="text-3xl font-bold py-3.5">
          ....WELCOME TO LOAN PORTAL BY CREDITSEA....
        </h2>
        <AuthComponent />
      </div>
      <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-lg font-semibold">CreditSea</h2>
          <p className="text-sm text-gray-400 mb-2">
            Simplifying loans, empowering people.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Atharva NIle. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Login;
