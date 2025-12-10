
// import React, { use } from "react";
// import { Link, NavLink } from "react-router";
// import Logo from "../assets/Logo.jpg"
// import { AuthContext } from "../provider/AuthProvider";

// const Navber = () => {
//   const {user} = use(AuthContext);
//      const link = (
//     <>
//       <li className="font-bold">
//         <NavLink to="/">Home</NavLink>
//       </li>
//       <li className="font-bold">
//         <NavLink to="/prodect">All Product</NavLink>
//       </li>
//       <li className="font-bold">
//         <NavLink to="/profile">My Profile</NavLink>
//       </li>
//     </>
//   );
//   return (
//     <div>
//       <div className="navbar bg-base-200 shadow-sm px-28">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {" "}
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />{" "}
//               </svg>
//             </div>
//             <ul
//               tabIndex="-1"
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
//             >
//               {link}
//             </ul>
//           </div>
//           <img src={Logo} className="h-16 w-16 rounded-full" alt="" />
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//           <div>{user && user.email}</div>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             {link}
//           </ul>
//         </div>
//         <div className="navbar-end">
//           <Link to="/auth/login"><button className="btn">Login</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navber;




import React, { use } from "react";
import logo from "../assets/Logo.jpg";
import { Link, NavLink } from "react-router";
import logouser from "../assets/user.png";
// import { AuthContext } from "../Provider/AuthProvider";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';

const Navber = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("User trying to logout");
    logOut()
      .then(() => {
        toast.success('You Loggedout successfull')
      })
      .catch((error) => {
        console.log(error)
      });
  };

  const link = (
    <>
      <li className="font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/prodect">All Product</NavLink>
      </li>
      <li className="font-bold">
        <NavLink to="/profile">My Profile</NavLink>
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
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
        {/* <div>{user && user.email}</div> */}
        <div className="navbar-end flex gap-3">
          <Link to="/profile"><img className="w-12 h-12 rounded-full" src={`${user ? user.photoURL:logouser}`} alt="" /></Link>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-neutral hover:bg-red-300 hover:text-white"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
              to="/auth/login"
              className="btn btn-neutral"
            >
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
