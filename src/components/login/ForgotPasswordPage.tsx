import React, { useState } from "react";
import { ForgotPasswordData } from "./types";

interface ForgotPasswordPageProps {
  onResetPassword: (data: ForgotPasswordData) => void;
  onSwitchToLogin: () => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onResetPassword,
  onSwitchToLogin,
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResetPassword({ email });    
  };

  return (
    <div className="auth-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">
          Reset Password
        </button>
      </form>
      <div className="auth-links">
        <button onClick={onSwitchToLogin} className="link-button">
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
