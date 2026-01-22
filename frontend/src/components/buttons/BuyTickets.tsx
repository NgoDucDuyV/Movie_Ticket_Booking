import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Ticket } from "lucide-react";

type BuyTicketsProps = {
    textValue: string;
    className?: string;
};

const BuyTickets = ({ textValue, className }: BuyTicketsProps) => {
    return (
        <Button
            className={cn(
                // layout
                "relative group max-h-[60px] min-w-[130px] h-[40px] overflow-hidden",
                "inline-flex items-center justify-center",
                // size / shape
                "rounded-sm",
                // text
                "text-black",
                // margin ,padding
                "px-10 py-2",
                // after
                "after:content-['']",
                "after:absolute after:inset-0",
                "after:w-0 after:h-full after:left-0 after:top-0",
                "after:bg-gradient-to-r after:from-brand after:to-form",
                "after:transition-[width] after:duration-500 after:ease-in-out",
                "hover:after:w-full",
                "after:z-0",

                // before
                "before:",
                "before:content-['']",
                "before:absolute before:inset-y-0",
                "before:w-full before:h-full before:right-0",
                "before:bg-highlight",
                "before:transition-[width] before:duration-500 before:ease-in-out",
                "hover:before:w-0",
                "before:z-0",
                className
            )}
        >
            {/* content */}
            <span className="relative z-10 flex mx-auto px-2 items-center gap-1 text-[16px]">
                <Ticket className="h-5 w-10 -rotate-70" />
                <span className="
                    text-[0.8em]
                    font-black
                    tracking-[0.08em]
                    leading-[1.25]
                    ">
                    {textValue}
                </span>
            </span>
        </Button>
    );
};

BuyTickets.displayName = "BuyTickets";
export default BuyTickets;
