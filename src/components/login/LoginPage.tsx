import React, { useState } from "react";
import { UserCredentials } from "./types";

interface LoginPageProps {
  onLogin: (credentials: UserCredentials) => void;
  onSwitchToSignUp: () => void;
  onSwitchToForgotPassword: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLogin,
  onSwitchToSignUp,
  onSwitchToForgotPassword,
}) => {
  const [credentials, setCredentials] = useState<UserCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="auth-container ">
      <h2 className="font-bold text-lg">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>
      <div className="auth-links">
        <button onClick={onSwitchToSignUp} className="link-button">
          Don't have an account? Sign Up
        </button>
        <button onClick={onSwitchToForgotPassword} className="link-button">
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
