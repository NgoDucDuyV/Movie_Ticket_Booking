import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components/Search/search-input";
import { SearchDialog } from "@/components/Search/search-dialog";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { LanguageSwitcher } from "@/components/Language"
import BuyTickets from '@/components/buttons/BuyTickets';
import NavHeader from "@/components/Layouts/NavHeader"
// biên dịch ngôn ngữ
import { useTranslation } from "react-i18next"
type HeaderProps = {
    className?: string;
};
const Header = ({ className }: HeaderProps) => {
const { t } = useTranslation()
    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full",
                    "bg-[#10141B]/55 backdrop-blur-md",
                    "border-b border-white/10",
                    "supports-[backdrop-filter]:bg-[#10141B]/25",
                    "px-4",
                    className
                )
                }
            >
                <div
                    className={cn(
                        "mx-auto max-w-app flex items-center justify-between",
                        "max-w-app",
                        "flex flex-col grid-cols-1 gap-1"
                    )}
                >
                    {/* header top */}
                    <div className={cn(
                        "mx-auto max-w-app flex flex-row items-center justify-between",
                        "min-h-[60px] max-w-app w-full",
                        "grid-cols-1 gap-1",
                        " md:border-b md:border-white/25"
                    )}>
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
                        </div>
                        {/* buy Tick */}
                        <div className="flex flex-row items-center gap-3 md:flex hidden">
                            <BuyTickets className="max-w-30 peer/btn1 hover:text-white" textValue="BUY TICKETS" />
                            <BuyTickets className="max-w-30 peer/btn1 hover:text-white" textValue="BUY TICKETS" />
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
                                    <Link to="/register">{t("common.signup")}</Link>
                                </Button>
                                <Button variant="login" asChild>
                                    <Link to="/login">{t("common.signin")}</Link>
                                </Button>
                            </div>
                            <LanguageSwitcher className={`hidden md:block h-[36px]`} />
                        </div>
                    </div>
                    {/* header bottom */}
                    <NavHeader className="min-h-[50px] text-[16px] w-full md:flex hidden"/>
                </div>
            </header>
        </>
    );
};

export default Header;
