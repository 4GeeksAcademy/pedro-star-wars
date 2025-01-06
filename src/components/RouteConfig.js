import LandingPage from "../pages/LandingPage";
import DetailsPage from "../pages/DetailsPage";

const routeConfig = [
  {
    name: "Landing",
    path: "/",
    component: <LandingPage />,
  },
  {
    name: "Details",
    path: "/details/:group/:object",
    component: <DetailsPage />,
  },
];

export default routeConfig;
