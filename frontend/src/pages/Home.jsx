import "../styles/home.scss";
import styled from "styled-components";
import arrow from "../assets/arrowdown.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function Home() {
  const { user, setUser } = useUser();
  return (
    <div className="home flex flex-col justify-center items-center gap-10">
      <h2 className="text-center mt-28 text-2xl font-medium">
        Find friends to ride with !
      </h2>
      {!user && (
        <motion.div
          className="create_account flex flex-col items-center bg-white/10 shadow-xl w-full p-5 rounded-s-full"
          animate={{ x: ["100%", "0%"] }}
          transition={{ duration: 0.5, ease: [0.7, 0.2, 0.2, 0.7] }}
        >
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
              className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
            >
              START
            </button>
          </Link>
        </motion.div>
      )}
      <motion.div
        className="create_account flex flex-col items-center bg-white/10 w-full p-5 shadow-xl rounded-e-full"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 0.5, ease: [0.7, 0.2, 0.2, 0.7], delay: 0.2 }}
      >
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
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
          >
            START
          </button>
        </Link>
      </motion.div>
      <motion.div
        className="create_account flex flex-col items-center bg-white/10 w-full p-5 shadow-xl rounded-s-full "
        animate={{ x: ["100%", "0%"] }}
        transition={{ duration: 0.5, ease: [0.7, 0.2, 0.2, 0.7], delay: 0.4 }}
      >
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
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
          >
            START
          </button>
        </Link>
      </motion.div>
      {user && (
        <motion.div
          className="create_account flex flex-col items-center bg-white/10 w-full p-5 shadow-xl rounded-e-full"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 0.5, ease: [0.7, 0.2, 0.2, 0.7], delay: 0.6 }}
        >
          <p>Find friends here !</p>{" "}
          <motion.img
            src={arrow}
            alt="arrow"
            className="w-10"
            animate={{ y: ["0%", "20%", "0%"] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatType: "yoyo" }}
          />
          <Link to="/">
            <button
              type="button"
              className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
            >
              START
            </button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default Home;
