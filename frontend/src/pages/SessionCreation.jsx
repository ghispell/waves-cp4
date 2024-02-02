import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import { success, failed } from "../services/toast";
import { Navigate } from "react-router-dom";

function SessionCreation() {
  const { user, setUser } = useUser();
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (session) => {
    try {
      const response1 = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/sessions/${user.id}`,
        session
      );

      if (response1.status === 201) {
        const response2 = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/sessionsparticipation/${
            user.id
          }`,
          { sessionId: response1.data.insertId }
        );

        if (response2.status === 201) {
          success("The session has been created successfully");
          setRedirect(true);
        }
      }
    } catch (error) {
      failed(error);
    }
  };

  if (redirect) {
    return <Navigate to="/sessions" />;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div className="form-content">
          <label>Title</label>
          <input type="text" {...register("title", { required: true })} />
        </div>
        <div className="form-content">
          <label>Date</label>
          <input type="date" {...register("date", { required: true })} />
        </div>
        <div className="form-content">
          <label>Time</label>
          <input type="time" {...register("time", { required: true })} />
        </div>
        <div className="form-content">
          <label>Location</label>
          <input
            type="text"
            {...register("location", { required: true, max: 250 })}
          />
        </div>
        <div className="form-content">
          <label>Surf level</label>
          <select {...register("surf_level", { required: true })}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SessionCreation;
