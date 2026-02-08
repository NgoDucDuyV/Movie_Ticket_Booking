import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
const navItemsRight = [
    { label: "Trang chủ", to: "/" },
    { label: "Lịch chiếu", to: "/lich-chieu" },
    { label: "Tin tức", to: "/tin-tuc" },
    { label: "Khuyến mãi", to: "/khuyen-mai" },
    { label: "Giá vé", to: "/gia-ve" },
    { label: "Liên hoan phim", to: "/lien-hoan-phim" },
];

const navItemsRLeft = [
    { label: "Trang chủ", to: "/" },
    { label: "Lịch chiếu", to: "/lich-chieu" },
];

type NavHeaderProps = {
    className?: string,
}

const NavHeader = ({ className }: NavHeaderProps) => {
    return (
        <>
            {/* Nav (desktop) */}
            <nav className={cn(
                "flex flex-row items-center justify-between",
                className
            )}>
                <ul className="flex items-center gap-4">
                    {navItemsRLeft.map((item) => (
                        <li key={item.to} className="flex">
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    cn(
                                        "relative font-semibold transition-all duration-200",
                                        "text-[10px] lg:text-[16px]",
                                        "m-auto",
                                        "text-shadow-lg",
                                        "hover:text-[#FF383C] hover:text-shadow-glow",
                                        isActive
                                            ? "text-[#FF383C] text-shadow-glow"
                                            : "text-white"
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>


                <ul className="flex items-center gap-4">
                    {navItemsRight.map((item) => (
                        <li key={item.to} className="flex">
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    cn(
                                        "relative font-semibold transition-all duration-200",
                                        "text-[10px] lg:text-[16px]",
                                        "m-auto",
                                        "text-shadow-lg",
                                        "hover:text-[#FF383C] hover:text-shadow-glow",
                                        isActive
                                            ? "text-[#FF383C] text-shadow-glow"
                                            : "text-white"
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavHeader
