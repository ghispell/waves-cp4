import "../styles/home.scss";
import styled from "styled-components";
import arrow from "../assets/arrowdown.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex flex-col justify-center items-center gap-10">
      <h2 className="text-center mt-4 text-2xl font-medium">
        Find friends to ride with !
      </h2>
      <div className="create_account flex flex-col items-center bg-white/10 w-full p-5 rounded-s-full">
        <p>Create your account here</p>

        <motion.img
          src={arrow}
          alt="arrow"
          className="w-10"
          animate={{ y: ["0%", "20%", "0%"] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "yoyo" }}
        />
        <Link to="/register">
          <button
            type="button"
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3"
          >
            START
          </button>
        </Link>
      </div>
      <div className="create_account flex flex-col items-center bg-white/10 w-full p-5 rounded-e-full">
        <p>Create new session</p>
        <motion.img
          src={arrow}
          alt="arrow"
          className="w-10"
          animate={{ y: ["0%", "20%", "0%"] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "yoyo" }}
        />{" "}
        <Link to="/session">
          <button
            type="button"
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3"
          >
            START
          </button>
        </Link>
      </div>
      <div className="create_account flex flex-col items-center bg-white/10 w-full p-5 rounded-s-full">
        <p>Find all the sessions available</p>{" "}
        <motion.img
          src={arrow}
          alt="arrow"
          className="w-10"
          animate={{ y: ["0%", "20%", "0%"] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "yoyo" }}
        />
        <Link to="/sessions">
          <button
            type="button"
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3"
          >
            START
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
