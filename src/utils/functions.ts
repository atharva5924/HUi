// utils/functions.ts
import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const handleLogout = async (navigate: NavigateFunction) => {
  try {
    await axios.get("http://localhost:3000/api/auth/logout", {
      withCredentials: true,
    });
    navigate("/"); // Redirect to login page
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
