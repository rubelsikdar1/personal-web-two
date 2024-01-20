import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Project from "../Components/Project/Project";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"project",
                element:<Project/>
            }
        ]
    },
    {
        path:"*",
        element:<ErrorPage/>
    }
])
export default routes;