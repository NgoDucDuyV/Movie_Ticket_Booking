import { cn } from "@/lib/utils"; // nếu bạn dùng shadcn utils
import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
    className?: string;
    withGrain?: boolean;
    url_img?: string;
} & React.HTMLAttributes<HTMLDivElement>;
export default function Container({
    children,
    className,
    url_img,
    ...props
}: ContainerProps) {
    return (
        <div
            className={cn(
                "relative flex w-full flex-col overflow-x-clip",
                className
            )}
            {...props}
        >
            {url_img && (
                <div className="absolute inset-0 z-0 pointer-events-none select-none">
                    <img
                        src={`${url_img}`}
                        alt=""
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            )}

            <div className="relative z-10 flex max-w-app w-full mx-auto flex-col pt-20">
                {children}
            </div>
        </div>
    );
}

