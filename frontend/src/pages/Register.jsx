import "../styles/register.scss";
import { useForm } from "react-hook-form";
import axios from "axios";
import { success, failed } from "../services/toast";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Register() {
  const [registered, setRegistered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        user
      );
      if (response.status === 201) {
        success("User created successfully");
        setRegistered(!registered);
      }
    } catch (error) {
      failed("User creation failed");
    }
  };

  if (registered) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div className="form-content">
          <label>Firstname</label>
          <input
            type="text"
            {...register("firstname", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-content">
          <label>Lastname</label>
          <input
            type="text"
            {...register("lastname", { required: true, maxLength: 100 })}
          />
        </div>
        <div className="form-content">
          <label>Email</label>
          <input
            type="text"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div className="form-content">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="form-content">
          <label>Surf level</label>
          <select {...register("level", { required: true })}>
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

export default Register;
