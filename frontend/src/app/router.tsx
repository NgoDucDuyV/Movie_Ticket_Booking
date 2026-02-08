import MainLayoutClient from "@/Layouts/client/MainLayoutClient"
import MainLayoutAdmin from "@/Layouts/admin/MainLayoutAdmin"
import ClientHome from "@/pages/client/ClientHome"
import { createBrowserRouter, Navigate } from "react-router-dom"
import ClientNotFound from "@/pages/client/ClientNotFound"
import ClientNotFoundSearch from "@/pages/client/ClientNotFoundSearch"
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