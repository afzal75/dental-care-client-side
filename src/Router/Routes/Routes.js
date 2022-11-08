import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/service'),
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;