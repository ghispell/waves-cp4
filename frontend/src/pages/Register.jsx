import "../styles/register.scss";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <div className="form-content">
          <label>Firstname</label>
          <input
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-content">
          <label>Lastname</label>
          <input
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
        </div>
        <div className="form-content">
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>
        <div className="form-content">
          <label>Password</label>
          <input type="password" placeholder="Password" {...register} />
        </div>
        <div className="form-content">
          <label>Surf level</label>
          <select {...register("Level", { required: true })}>
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
