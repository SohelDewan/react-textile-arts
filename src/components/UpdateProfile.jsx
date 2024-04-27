import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
export default function UpdateProfile() {
  const { createUser, updateUserProfile } = useAuth(); // useContext(AuthContext)
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

    //create user and update profile
    createUser(email, password).then(() => {
      updateUserProfile(name, photo).then(() => {
        navigate(location?.state ? location.state : "/");
      });
    });
  };
  return (
    <div>
    <div className="animate__animated animate__pulse">
      <form
        onSubmit={handleRegister}
        className=" md:w-3/4 lg:w-1/4 mx-auto "
      >
        <h2 className="text-3xl my-4 text-center font-bold">
          Update Profile
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="input input-bordered text-[#1A4D2E]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Photo URL</span>
          </label>
          <input
            type="text"
            required
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered text-[#1A4D2E]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered text-[#1A4D2E]"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered text-[#1A4D2E]"
          //   value={password}
          // onChange={handlePasswordChange}

          />

        </div>

        <div className="form-control mt-6">
          <button className="btn bg-[#1A4D2E] text-white border-0">
            UpdateProfile
          </button>
        </div>
      </form>

    </div>
  </div>
  );
}
