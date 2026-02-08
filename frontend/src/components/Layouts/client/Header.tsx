import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components/Search/search-input";
import { SearchDialog } from "@/components/Search/search-dialog";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { LanguageSwitcher } from "@/components/Language"
import BuyTickets from '@/components/buttons/BuyTickets';
import NavHeader from "@/components/Layouts/client/NavHeader"
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
                    "fixed top-0 z-50 w-full",
                    "bg-[#10141B]/55 backdrop-blur-md",
                    "border-b border-white/10",
                    "supports-[backdrop-filter]:bg-[#10141B]/25",
                    "px-4",
                    className
                )}
            >
                <div
                    className={cn(
                        "mx-auto max-w-app",
                        "flex flex-col",
                        "gap-1"
                    )}
                >
                    {/* header top */}
                    <div
                        className={cn(
                            "w-full max-w-app mx-auto",
                            "flex items-center justify-between",
                            "min-h-[60px]",
                            "gap-2 sm:gap-3",
                            "md:border-b md:border-white/25"
                        )}
                    >
                        {/* Left: Logo + Title */}
                        <div className="flex items-center gap-2 min-w-0">
                            <Logo to="/" />

                            {/* Title (mobile) */}
                            <div className="block text-white md:hidden min-w-0">
                                <h1 className="text-[12px] sm:text-[14px] leading-tight truncate">
                                    TRUNG TÂM CHIẾU PHIM Cinema Max
                                </h1>
                                <h2 className="text-[11px] sm:text-[13px] leading-tight text-white/80 truncate">
                                    National Cinema Max
                                </h2>
                            </div>
                        </div>

                        {/* Buy ticket (md+) */}
                        <div className="hidden md:flex items-center gap-3 shrink-0">
                            <BuyTickets className="max-w-30 peer/btn1 hover:text-white" textValue="BUY TICKETS" />
                            <BuyTickets className="max-w-30 peer/btn1 hover:text-white" textValue="BUY TICKETS" />
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                            {/* Search */}
                            <div className="flex items-center">
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

                            {/* Auth (md+) */}
                            <div className="hidden md:flex items-center gap-3 animate-bounce-fade-in">
                                <Button variant="register" asChild>
                                    <Link to="/register">{t("common.signup")}</Link>
                                </Button>
                                <Button variant="login" asChild>
                                    <Link to="/login">{t("common.signin")}</Link>
                                </Button>
                            </div>

                            <LanguageSwitcher className="hidden md:block h-[36px]" />
                        </div>
                    </div>

                    {/* header bottom */}
                    <NavHeader className="min-h-[50px] text-[16px] w-full hidden md:flex" />
                </div>
            </header>

        </>
    );
};

export default Header;
