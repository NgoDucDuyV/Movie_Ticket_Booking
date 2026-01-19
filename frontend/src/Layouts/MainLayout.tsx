import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import { Outlet } from "react-router-dom"
const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black mx-auto">
            <Header />
            <main className="w-full max-w-app mx-auto">
                <div className="h-[3000px]">
                    <img src={`/Herobanner.png`} alt="" className="w-full" />
                </div>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
