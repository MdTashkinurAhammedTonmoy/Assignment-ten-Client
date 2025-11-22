import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
    ]
  },
  {
    path: "/auth",
    element: <div>authentication layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
]);

export default router;
