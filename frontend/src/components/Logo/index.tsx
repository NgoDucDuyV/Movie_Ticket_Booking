import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type LogoProps = {
    className?: string;        // wrapper <Link>
    imageClassName?: string;   // <img>
    to?: string;               // route (default "/")
};

const Logo = ({
    className,
    imageClassName,
    to = "/",
}: LogoProps) => {
    return (
        <Link
            to={to}
            className={cn("flex items-center gap-3", className)}
        >
            <img
                src="/image.png"
                alt="DNV"
                draggable={false}
                className={cn(
                    "h-10 w-auto min-w-[60px] select-none",
                    imageClassName
                )}
            />
        </Link>
    );
};

Logo.displayName = "Logo";

export default Logo;
