import { useEffect, useState } from "react";
import "../styles/Sessions.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function SessionsList() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/sessions`)
      .then((res) => {
        setSessions(res.data);
      });
  }, []);

  return (
    <div className="sessions-container flex flex-col items-center mt-6">
      <h2 className="font-bold text-lg">Sessions</h2>
      <div className="">
        {sessions.map((session, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`session-card flex flex-col items-center shadow-xl bg-white/10 w-screen p-5 ${
                isEven ? "rounded-s-full" : "rounded-e-full"
              } my-10`}
              animate={isEven ? { x: ["100%", "0%"] } : { x: ["-100%", "0%"] }}
              transition={{
                duration: 0.5,
                ease: [0.7, 0.2, 0.2, 0.7],
                delay: 0.6,
              }}
            >
              <p>{session.title}</p>
              <NavLink to={`/sessions/${session.id}`}>
                <button
                  type="button"
                  className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
                >
                  <p>Let's surf!</p>
                </button>
              </NavLink>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SessionsList;
