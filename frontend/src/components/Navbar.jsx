import "../styles/navbar.scss";
import burger from "../assets/menuburger.png";
import profile from "../assets/profile.png";
import wave from "../assets/wave.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
import { success, failed } from "../services/toast";

function Navbar({ onMenuClick }) {
  const { user, setUser } = useUser();
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/logout`,
        { withCredentials: true, credentials: "include" }
      );
      if (response.status === 200) {
        success("You are logged out!");
        window.localStorage.removeItem("surfer");
        setUser(false);
        <Navigate to="/" replace />;
      }
    } catch (error) {
      failed(error.message);
    }
  };
  return (
    <div className="navbar">
      <button type="button" onClick={onMenuClick}>
        <img src={burger} alt="burgermenu" className="burgerMenu" />
      </button>
      <h1 className="text-center">
        <Link to="/">WAVES</Link>
      </h1>
      <div className="flex justify-center items-center">
        {user ? (
          <h2>
            <button type="button" onClick={handleLogout}>
              <p>Logout</p>
            </button>
          </h2>
        ) : (
          <h2>
            <Link to="/login">Login</Link>
          </h2>
        )}
        <Link to="/profile">
          <img src={profile} alt="profile" className="profile" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
