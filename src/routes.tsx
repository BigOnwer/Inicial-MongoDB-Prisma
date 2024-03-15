import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dasboard";
import { NotFound } from "./pages/404";
import { Signup } from "./pages/auth/sing-up";

export const router = createBrowserRouter([
    {path: '/', element: <Dashboard/>, errorElement: <NotFound/>},
    
    {
        path: "/",
        children: [
            {path: "/sign-up", element: <Signup/>}
        ]
    }
])