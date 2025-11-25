import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import AllFood from "../HomePage/AllFood";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            path:"/",
            loader:() => fetch('/Fastpagedata.json'),
            Component:Home,
            hydrateFallbackElement:<Loading></Loading>
        },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      },
    ]
  },
  {
    path: "/allfood",
    element: (
      <PrivateRoute>
        <AllFood></AllFood>
      </PrivateRoute>
    ),
  },
]);

export default router;
