import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import Bookings from "../pages/Bookings/Bookings";
import Contacts from "../pages/Contacts/Contacts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DefaultBooking from "../pages/DefaultBooking/DefaultBooking";
import PrivateRoutes from "../components/Private/PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([ //  creating routes and integrating elements
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: () => fetch('/rooms.json') // used a loader to fetch data from public folder
            },
            {
                path: '/bookings',
                element: <DefaultBooking></DefaultBooking>
            },
            {
                path: '/bookings/:id',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
                loader: () => fetch('/rooms.json')
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default routes;