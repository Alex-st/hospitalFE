import logo from './logo.svg';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Form from "./forms/Form";
import Home1 from "./home/Home1";
import Home2 from "./home/Home2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/form",
        element: <Form/>,
    },
    {
        path: "/home1",
        element: <Home1/>,
    },
    {
        path: "/home2",
        element: <Home2/>,
    },
    {
        path: "*",
        element: <h2>Error</h2>,
    }
]);

const RouterMenu = () => {

  return <RouterProvider router={router}/>
}

export default RouterMenu;
