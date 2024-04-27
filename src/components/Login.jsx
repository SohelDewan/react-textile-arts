import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { RiEyeCloseFill } from "react-icons/ri";
import { RxEyeOpen } from "react-icons/rx";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser } = useAuth();
  const { signInUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the log in page", location);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        // navigate after login
        if (result.user) {
          navigate(location?.state ? location.state : "/");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const toggleToast = () => {
    if (signInUser) {
      toast.success("Login succeeded!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      toast.error("Login failed!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };

  return (
    <div className="animate__animated animate__pulse mt-4">
      <form
        onSubmit={handleLogin}
        className="md:w-3/4 lg:w-1/4 mx-auto p-3 rounded-2xl"
      >
        <h2 className="text-3xl text-center mt-6 font-bold">Please Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered text-[#1A4D2E]"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            name="password"
            className="input input-bordered text-[#1A4D2E]"
            required
            id="id_password"
            autoComplete="current-password"
          />
        </div>
        <div className="-mt-8 ml-72">
          <button
            onClick={togglePasswordVisibility}
            className="  text-gray-500"
          >
            {showPassword ? <RiEyeCloseFill /> : <RxEyeOpen />}
          </button>
        </div>

        <div className="form-control mt-6">
          <button
            onChange={toggleToast}
            className="btn bg-[#1A4D2E] text-white border-0"
          >
            Login
          </button>
          <ToastContainer />
        </div>
      </form>

      <p className="text-center mt-4">
        Do not have an account!{" "}
        <Link className="text-[#1A4D2E] font-bold" to="/register">
          {" "}
          Register
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
