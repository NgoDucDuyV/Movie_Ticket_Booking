import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { SearchInput } from "@/components/Search/search-input";

type SearchDialogProps = {
    // Nội dung nút mở dialog
    trigger?: React.ReactNode;

    // Hook submit
    onSubmitValue?: (value: string) => void;

    // Tùy biến text
    placeholder?: string;

    // ✅ Override CSS từng phần
    className?: string;          // wrapper
    triggerClassName?: string;   // class cho Button mặc định (nếu dùng trigger mặc định)
    contentClassName?: string;   // class cho DialogContent
    formClassName?: string;      // class cho form
    inputClassName?: string;     // className truyền vào SearchInput (phần input)
    buttonClassName?: string;    // className truyền vào SearchInput (nút icon)
};

export function SearchDialog({
    trigger,
    placeholder = "Tìm phim, rạp",
    className,
    triggerClassName,
    contentClassName,
    inputClassName,
    buttonClassName,
}: SearchDialogProps) {
    return (
        <Dialog>
            <div className={cn(className)}>
                <DialogClose className="hidden"/>
                <DialogTrigger asChild>
                    {trigger ?? (
                        <Button variant="fill" className={cn(triggerClassName)}>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-10 w-10 transition-transform duration-300 group-hover:rotate-[-8deg] group-focus-within:scale-110"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                        </Button>
                    )}
                </DialogTrigger>

                <DialogContent className={cn("border-none shadow-none w-full", contentClassName)}>
                        <SearchInput
                            className={cn("w-full", inputClassName)}
                            buttonClassName={cn(buttonClassName)}
                            placeholder={placeholder}
                        />
                </DialogContent>
            </div>
        </Dialog>
    );
}
