import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./pages/app/admin";
import { NotFound } from "./pages/404";
import { Signup } from "./pages/auth/sing-up";
import { Livros } from "./pages/app/livros";
import { BookDetails } from "./pages/app/BookDetails";

export const router = createBrowserRouter([
    {path: '/', element: <Livros/>, errorElement: <NotFound/>},
    
    {
        path: "/",
        children: [
            {path: "/get-book", element: <Signup/>},
            {path: '/admin', element: <Admin/>},
            {path: `/book/:id`, element: <BookDetails/>}
        ]
    }
])