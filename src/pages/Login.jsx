// import React from "react";
// import { Link } from "react-router";

// const Login = () => {
//   return (
//     <div className="flex justify-center min-h-screen items-center">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//         <h2 className="font-semibold text-2xl text-center">Login Your Account</h2>
//         <div className="card-body">
//           <fieldset className="fieldset">
//             <label className="label">Email</label>
//             <input type="email" className="input" placeholder="Email" />
//             <label className="label">Password</label>
//             <input type="password" className="input" placeholder="Password" />
//             <div>
//               <a className="link link-hover">Forgot password?</a>
//             </div>
//             <button className="btn btn-neutral mt-4">Login</button>
//             <p className="font-semibold text-center">Don't Have An Account ? <Link className="text-red-500" to="/auth/register">Register</Link></p>
//           </fieldset>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../firebase/firebase.config";

const Login = () => {
  const { signIn, setUser, user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("You Logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = document.querySelector('input[name="email"]').value;
    console.log(email)
    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    const auth = getAuth(app);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        {user ? (
          <h2 className="font-semibold text-2xl text-center">My Profile</h2>
        ) : (
          <h2 className="font-semibold text-2xl text-center">
            Login Your Account
          </h2>
        )}

        {user ? (
          <div className="text-center space-y-3">
            <img
              className="h-20 w-20 rounded-full mx-auto"
              src={user?.photoURL}
              alt=""
            />
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <p>{user?.email}</p>
            <button onClick={handleLogOut} className="btn bg-amber-200">
              Sign Out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <div>
                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="link link-hover text-blue-500"
                >
                  Forgot password?
                </button>
              </div>

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>

              <p className="font-semibold pt-5 text-center">
                Don't have an account?{" "}
                <Link className="text-red-500" to="/auth/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

