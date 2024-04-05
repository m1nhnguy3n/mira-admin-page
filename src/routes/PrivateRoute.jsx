import Analytics from "../pages/Dashboard/Analytics";
import Order from "../pages/Order/Order";
import Pricing from "../pages/Pricing/Pricing";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const PrivateRoute = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "analytic",
        element: <Analytics />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      }
    ],
  },
];

export default PrivateRoute;
