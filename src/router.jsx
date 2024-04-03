import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/Errors/NotFound';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Outlet />,
            errorElement: <NotFound />,
            children: [...PublicRoute, ...PrivateRoute],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
