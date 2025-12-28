import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import AllFood from "../HomePage/AllFood";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";
import ModelCard from "../outside/ModelCard";
import AddModelForm from "../outside/AddModelForm ";
import ModelDetails from "../outside/ModelDetails";
import UpdateModel from "../outside/UpdateModel";
import MyModels from "../outside/MyModels";
import MyDownloads from "../outside/MyDownloads";

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
        {
          path:"/all-product",
          element:(
            <PrivateRoute>
              <AllFood></AllFood>
            </PrivateRoute>
          ),
          loader:() => fetch('http://localhost:3000/foods')
        },
        {
          path:"/addmodel",
          element: (
            <PrivateRoute>
              <AddModelForm></AddModelForm>
            </PrivateRoute>
          ),
        },
        {
          path:"/my-models",
          element:(
            <PrivateRoute>
              <MyModels></MyModels>
            </PrivateRoute>
          )
        },
       {
          path:"/my-downloads",
          element:(
            <PrivateRoute>
              <MyDownloads></MyDownloads>
            </PrivateRoute>
          )
        },
        {
          path:"/model-details/:id",
          element:(
            <PrivateRoute>
              <ModelDetails></ModelDetails>
            </PrivateRoute>
          ),
        },
        {
          path:"/update-model/:id",
          element:(
            <PrivateRoute>
              <UpdateModel></UpdateModel>
            </PrivateRoute>
          ),
          loader:({params}) => fetch(`http://localhost:3000/foods/${params.id}`)
        }
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
