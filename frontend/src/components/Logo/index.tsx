import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;
    imgClassName?: string;
    textClassName?: string;
    to?: string; // cho phép đổi link nếu cần
};

const Logo = ({
    className,
    imgClassName,
    textClassName,
    to = "/",
}: LogoProps) => {
    return (
        <Link
            to={to}
            className={cn(
                "flex flex-row items-center gap-0 select-none",
                className
            )}
        >
            {/* <svg
                fill="currentColor"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                />
            </svg> */}

            <img
                src={`/LogoMovie.png`}
                alt="CinemaMax Logo"
                className={cn("w-10", imgClassName)}
            />

            <h1
                className={cn(
                    "text-2xl font-extrabold tracking-tighter text-white",
                    "md:block hidden",
                    textClassName
                )}
            >
                Cinema
                <span className="text-primary">Max</span>
            </h1>
        </Link>
    );
};

export default Logo;
