import { Link, NavLink } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import userDefaultPic from "../assets/user.png";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light');

  const handleToggle = (e) => {
    if(e.target.checked) {
      setTheme("dark");
    } else{
      setTheme("light");
    }
}
  useEffect(() =>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector('html').setAttribute("data-theme", localTheme);
  }, [theme, setTheme])
  const { logout, user } = useAuth();

  const nabLinks = (
    <>
      <li className="md:mr-3">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="md:mr-3">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="md:mr-3">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="md:mr-3">
        <NavLink to="/art-section-page">My Art&Craft</NavLink>
      </li>
      <li className="md:mr-3">
        <NavLink to="/add-craft">Add Craft</NavLink>
      </li>
      {/* <li className="md:mr-3">
        <NavLink to="/update-craft">Update Craft</NavLink>
      </li> */}
      <li className="md:mr-3">
        <NavLink to="/myart-craft">All Art & craft</NavLink>
      </li>
      <li className="md:mr-3">
        <NavLink to="/update-profile">Update Profile</NavLink>
      </li>
    </>
  );

  return (
    <div id="art-section-full" className="navbar bg-[#E8DFCA] sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <a className="cursor-pointer">
        {/* Textile<span className="text-[#1A4D2E]">Arts</span> */}
        <img className="w-12" src='https://i.ibb.co/s3fsknd/logo.jpg' />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#1A4D2E] font-bold">
          {nabLinks}
        </ul>
      </div>

      <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} className="theme-controller" value="synthwave" />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
      <div className="navbar-end">
              <p className="text-[#1A4D2E] tooltip z-99 tooltip-bottom" data-tip={user?.displayName}>user profile</p>
        {user ? (
          <div className="dropdown dropdown-end">
          
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full " >
                <img
                  src={user?.photoURL || "https://i.ibb.co/m8CkQrr/sohel.jpg"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost tooltip" data-tip={user.displayName}>
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li>
                <button onClick={logout} className="btn btn-sm  btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ">
                        <img src={userDefaultPic} />Login
                    </div>
                </label>
            <p className="hover:bg-[#1A4D2E] px-2 rounded-xl">Login</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
