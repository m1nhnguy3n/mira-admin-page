import Analytics from '../pages/Dashboard/Analytics';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import Pricing from '../pages/Pricing/Pricing';

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
                path: 'pricing',
                element: <Pricing />,
            },
        ],
    },
];

export default PrivateRoute;
