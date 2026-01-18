import Header from "@/components/Layouts/Header";
import Footer from "@/components/Layouts/Footer";
import { Outlet  } from "react-router-dom"
const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#F5F5F5] mx-auto">
            <Header/>
                <main className="flex-1 mx-auto">
                    <Outlet/>
                </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
