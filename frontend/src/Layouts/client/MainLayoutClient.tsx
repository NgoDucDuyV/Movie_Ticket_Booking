import Header from "@/components/Layouts/client/Header";
import Footer from "@/components/Layouts/client/Footer";
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <div className="bg-black">
                <Header />
                <main className="flex-1 w-full mx-auto">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
