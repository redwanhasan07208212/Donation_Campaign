import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Donation from "../pages/Donation";
import Stat from "../pages/Stat";


export const router = createBrowserRouter ([
    {
      path:'/',
      element:<MainLayouts />,
      children:[
        {
            path:'/',
            element:<Home/>,
        },
        {
          path:'/donation',
          element:<Donation/>
        },
        {
          path:'/statistics',
          element:<Stat/>
        }
      ]
    }
  ])
