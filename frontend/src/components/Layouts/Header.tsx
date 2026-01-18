import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { Search } from "@/components/Search";
const navItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Lịch chiếu", to: "/lich-chieu" },
    { label: "Tin tức", to: "/tin-tuc" },
    { label: "Khuyến mãi", to: "/khuyen-mai" },
    { label: "Giá vé", to: "/gia-ve" },
    { label: "Liên hoan phim", to: "/lien-hoan-phim" },
];

const Header = () => {
    return (
        <header className="w-full bg-[#10141B] text-white">
            <div className="mx-auto flex box-border py-4 min-h-[80px] h-auto max-w-[1440px] items-center justify-between px-4 md:px-8 overflow-hidden">
                {/* Left: Logo */}
                <div className="flex sm:flex-nowrap flex-wrap flex-row items-center gap-2 lg:gap-15">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/image.png"
                            alt="DNV"
                            className="h-10 min-h-10 w-auto select-none"
                            draggable={false}
                        />
                    </Link>
                    <div className="grid-cols-2 gap-5 md:hidden sm:text-[16px] text-[14px] block">
                        <h1 className="text-[0.9em]">TRUNG TÂM CHIẾU PHIM QUỐC GIA</h1>
                        <h2 className="text-[0.8em]">National Cinema Center</h2>
                    </div>
                    {/* Center: Nav (desktop) */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <NavLink
                                        to={item.to}
                                        className={({ isActive }) =>
                                            [
                                                "relative text-[10px] lg:text-[16px] font-semibold transition-all duration-200 ",
                                                "hover:text-[#FF383C]",
                                                isActive ? "text-[#FF383C]" : "text-white/70",
                                            ].join(" ")
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Tìm kiếm Search */}
                <Search/>
                {/* menu mobile */}
                <div className="block md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                
                {/* Right: Actions */}
                <div className="md:flex hidden items-center gap-3 ">
                    <Button variant="register" asChild>
                        <Link to="/register">Đăng ký</Link>
                    </Button>

                    <Button variant="login" asChild>
                        <Link to="/login">Đăng nhập</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
