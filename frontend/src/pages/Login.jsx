import { Link, Navigate } from "react-router-dom";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { success, failed } from "../services/toast";
import { useUser } from "../contexts/UserContext";

function Login() {
  const { user, setUser } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        user,
        { withCredentials: true }
      );
      if (response.status === 200) {
        success("You are logged in!");
        window.localStorage.setItem(
          "surfer",
          JSON.stringify(response.data.user)
        );
        setUser(response.data.user);
      }
    } catch (error) {
      failed("Login failed");
    }
  };

  if (user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div className="form-content">
          <label>Email</label>
          <input
            type="text"
            {...register("email", { required: true, maxLength: 200 })}
          />
        </div>
        <div className="form-content">
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <input type="submit" />
        </div>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
