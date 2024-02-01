import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Session() {
  const [session, setSession] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/sessions/${id}`)
      .then((res) => setSession(res.data));
  }, []);
  return (
    <div>
      <h1>{session.title}</h1>
    </div>
  );
}

export default Session;
