import Analytics from '../pages/Dashboard/Analytics';
import Profile from '../pages/ProfilePage/Profile';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const PrivateRoute = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Analytics />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
];

export default PrivateRoute;
