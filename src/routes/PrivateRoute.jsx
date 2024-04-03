import Analytics from '../pages/Dashboard/Analytics';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

const PrivateRoute = [
    {
        path: '/',
        element: <ProtectedRoute />,
        children: [
            {
                path: '',
                element: <Analytics />,
            },
        ],
    },
];

export default PrivateRoute;
