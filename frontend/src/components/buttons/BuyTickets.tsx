import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import icTicket from "@/assets/images/ic-ticket.svg";
import { Ticket } from 'lucide-react';
type BuyTicketsProps = {
    className?: string,
    textValue: string,
}
const BuyTickets = ({
    className,
    textValue
}: BuyTicketsProps) => {
    return (
        <>
            <Button className={cn(
                "text-[16px]",
                "relative group",
                "break-after-all overflow-hidden",
                "flex justify-center items-center",
                "rounded-sm",
                "border-none",
                "bg-amber-400",
                "text-white",
                className)} >
                <span className="
                z-5
                overflow-hidden
                    after:content-['']
                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-full
                    after:w-0
                    after:bg-gradient-to-r 
                    after:from-brand
                    after:to-form
                    after:transition-all
                    after:aese-in
                    after:duration-500
                    group-hover:after:w-full">
                </span>
                <span className={
                    cn(
                    "z-10",
                    "w-full mx-auto",
                    "flex flex-row items-center",
                    "text-[10px] text-black"
                    
                    )
                }>
                    <img src={icTicket} alt="" className='text-white' />
                    {textValue}
                    <Ticket />
                </span>
            </Button>
        </>
    )
}

export default BuyTickets
