
import React, { use } from "react";
import logo from "../assets/Logo.jpg";
import { Link, NavLink } from "react-router";
import logouser from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import { IoMdSettings } from "react-icons/io";
import { GoPersonFill } from "react-icons/go";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navber = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user)
  const handleLogOut = () => {
    console.log("User trying to logout");
    logOut()
      .then(() => {
        toast.success('You Logged out successfully');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const link = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/all-product">All Product</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/addmodel">Add Model</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar lg:px-10 shadow-sm bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="h-16 w-16" src={logo} alt="" />
            <a className="btn hidden lg:inline-flex btn-ghost text-xl">Food Lover</a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end flex gap-3">
          
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn btn-ghost w-16 btn-circle avatar">
              <div className=" rounded-full">
                <img referrerPolicy="no-referrer" src={user ? user.photoURL : logouser} alt="User" />
              </div>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/my-models" className=" font-bold">
                  <GoPersonFill />MY Models
                  {user && <span className="badge">New</span>}
                </Link>
              </li>
              <li><Link to="/my-downloads" className="font-bold"><FaCloudDownloadAlt />My Downloads</Link></li>
              <li><Link to="/settings" className="font-bold"><IoMdSettings />Settings</Link></li>
              <li>
                <button onClick={handleLogOut} className="bg-yellow-400 w-full flex justify-center hover:bg-yellow-800 text-black font-semibold  py-1 mt-2 rounded-md">
                  Logout
                </button>
              </li>
            </ul>
          </div>

        
          {!user && (
            <>
              <Link to="/auth/login" className="btn btn-neutral">
                Login
              </Link>
              <Link to="/auth/register" className="btn btn-neutral hover:bg-amber-300">
                Register
              </Link>
            </>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Navber;
