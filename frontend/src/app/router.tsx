import MainLayoutClient from "@/Layouts/client/MainLayoutClient"
import MainLayoutAdmin from "@/Layouts/admin/MainLayoutAdmin"
import ClientHome from "@/pages/client/home/ClientHome"
import { createBrowserRouter, Navigate } from "react-router-dom"
import ClientNotFound from "@/pages/client/ClientNotFound"
import ClientNotFoundSearch from "@/pages/client/ClientNotFoundSearch"
import ClientShowTimes from "@/pages/client/ShowTimes/ClientShowTimes"
export const router = createBrowserRouter([
    {
        element: <MainLayoutClient />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "home",
                element: <ClientHome />
            },
            {
                path: "showtimes",
                element: <ClientShowTimes />
            },
            {
                path: "*",
                element: <ClientNotFound/>
            },
            {
                path: "/notfoundsearch",
                element: <ClientNotFoundSearch/>
            }
        ]
    },
    {
        path: "/admin",
        element: <MainLayoutAdmin />,
        children: [
            {
                path: "*",
                element: <ClientNotFound/>
            }
        ]
    },
    
])