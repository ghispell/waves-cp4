import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
import { failed, success } from "../services/toast";

function Session() {
  const [session, setSession] = useState(null);
  const [surfers, setSurfers] = useState(null);
  const { user, setUser } = useUser();
  const { id } = useParams();
  useEffect(() => {
    Promise.all([
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/sessions/${id}`),
      axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/sessions/${id}`),
    ])
      .then(([res1, res2]) => {
        setSession(res1.data);
        setSurfers(res2.data);
      })
      .catch((error) => {
        failed(error);
      });
  }, []);
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sessionsparticipation/${user.id}`,
        { sessionId: id }
      );
      if (response.status === 201) {
        success("You are now part of the session!");
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        failed("You are already part of the session!");
      } else {
        failed(error);
      }
    }
  };


  return (
    <div>
      {session && surfers ? (
        <div className="flex flex-col items-center mt-28 gap-8">
          <div className="flex flex-col items-center gap-8 text-white bg-first w-80 rounded-[70px] py-6 shadow-xl">
            <p className="text-lg font-bold">{session.title}</p>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-lg font-bold">{session.date.split("T")[0]}</p>
              <p className="text-lg font-bold">
                at {session.time.split(":")[0]}:{session.time.split(":")[1]}
              </p>
            </div>
            <p className="text-lg font-bold">{session.location}</p>
            <p className="text-lg font-bold">{session.surf_level}</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {surfers.map((surfer, index) => (
              <div key={index}>
                <p className="text-s font-normal">{surfer.firstname}</p>
                <p className="text-s font-bold">{surfer.lastname}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="text-white bg-first font-medium rounded-full text-sm px-5 py-2.5 text-center mt-3 shadow-lg"
          >
            Join session
          </button>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Session;
