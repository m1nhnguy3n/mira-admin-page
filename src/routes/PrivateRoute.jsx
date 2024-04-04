import Analytics from '../pages/Dashboard/Analytics';
import Order from '../pages/Order/Order';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const PrivateRoute = [
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: 'analytic',
                element: <Analytics />,
            },
            {
                path: "order",
                element: <Order />,
            }
        ],
    },
];

export default PrivateRoute;
