import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { SearchInput } from "@/components/Search/search-input";
import { SearchDialog } from "@/components/Search/search-dialog";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { LanguageSwitcher } from "@/components/Language"
import BuyTickets from './../buttons/BuyTickets';

const navItems = [
    { label: "Trang chủ", to: "/" },
    { label: "Lịch chiếu", to: "/lich-chieu" },
    { label: "Tin tức", to: "/tin-tuc" },
    { label: "Khuyến mãi", to: "/khuyen-mai" },
    { label: "Giá vé", to: "/gia-ve" },
    { label: "Liên hoan phim", to: "/lien-hoan-phim" },
];

type HeaderProps = {
    className?: string;
};

const Header = ({ className }: HeaderProps) => {

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full",
                    "bg-[#10141B]/55 backdrop-blur-md",
                    "border-b border-white/10",
                    "supports-[backdrop-filter]:bg-[#10141B]/45",
                    className
                )
                }
            >
                <div
                    className={cn(
                        "mx-auto max-w-app flex items-center justify-between",
                        "min-h-[80px] max-w-app",
                        "px-4 py-4 md:px-8",
                        "grid-cols-1 gap-1"
                    )}
                >
                    {/* Left: Logo + Nav */}
                    <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap lg:gap-15">
                        <Logo
                            to="/"
                        />
                        {/* Title (mobile) */}
                        <div className="block text-white md:hidden sl:text-[16px] sm:text-[11px] text-[10px]">
                            <h1 className="text-[0.9em]">
                                TRUNG TÂM CHIẾU PHIM QUỐC GIA
                            </h1>
                            <h2 className="text-[0.8em]">
                                National Cinema Center
                            </h2>
                        </div>

                        {/* Nav (desktop) */}
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6">
                                {navItems.map((item) => (
                                    <li key={item.to}>
                                        <NavLink
                                            to={item.to}
                                            className={({ isActive }) =>
                                                cn(
                                                    "relative font-semibold transition-colors duration-200",
                                                    "text-[10px] lg:text-[16px]",
                                                    "hover:text-[#FF383C]",
                                                    isActive ? "text-[#FF383C]" : "text-white/70"
                                                )
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* buy Tick */}
                    <div className="flex flex-row items-center gap-3">
                        <BuyTickets className="max-w-30 peer/btn1" textValue="BUY TICKETS" />
                        <BuyTickets className="max-w-30 peer-hover/btn1:animate-swing-drop-in peer-hover/btn1:block hidden" textValue="BUY POPCORN" />
                    </div>
                    {/* Right */}
                    <div className="flex items-center gap-3">
                        {/* Search */}
                        <div className="flex">
                            <SearchInput className="hidden max-w-[240px] lg:block" />
                            <SearchDialog className="block lg:hidden" contentClassName="w-full" />
                        </div>

                        {/* Mobile menu */}
                        <button className="block md:hidden" aria-label="Menu">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-10 text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>

                        {/* Auth */}
                        <div className="hidden items-center gap-3 md:flex animate-bounce-fade-in">
                            <Button variant="register" asChild>
                                <Link to="/register">Đăng ký</Link>
                            </Button>
                            <Button variant="login" onClick={() => {setclick(true)}} asChild>
                                <Link to="/login">Đăng nhập</Link>
                            </Button>
                        </div>
                        <LanguageSwitcher className={`hidden md:block h-[36px]`} />
                    </div>
                </div>
            </header>
            <BuyTickets className="max-w-30" textValue="BUY TICKETS" />

        </>
    );
};

export default Header;
