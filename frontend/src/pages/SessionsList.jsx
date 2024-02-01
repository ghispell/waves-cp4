import { useEffect, useState } from "react";
import "../styles/Sessions.scss";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
        {sessions.map((session) => {
          console.log(session);
          return (
            <NavLink to={`/sessions/${session.id}`}>
              <div className="session-card flex flex-col items-center bg-white/10 w-60 p-5 rounded-full my-10">
                <p>{session.title}</p>
                <button type="button">
                  <p>Let's surf!</p>
                </button>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default SessionsList;
