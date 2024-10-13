import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Donation from "../pages/Donation";
import Home from "../pages/Home";
import Stat from "../pages/Stat";
import DonationDetails from '../components/DonationDetails'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element:<DonationDetails />,
        loader: () => fetch(`../donation.json`),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader:()=>fetch(`../donation.json`),
      },
      {
        path: "/statistics",
        element: <Stat />,
        loader:()=>fetch(`../donation.json`),
      },
    ],
  },
]);
