    import * as React from "react";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
    import { cn } from "@/lib/utils";

    type SearchInputProps = {
        value?: string;
        defaultValue?: string;
        onChange?: (value: string) => void;
        onSubmit?: (value: string) => void;

        placeholder?: string;
        className?: string;
        inputClassName?: string;
        buttonClassName?: string;
    };

    export const SearchInput = ({
        value,
        defaultValue,
        onChange,
        onSubmit,
        placeholder = "Tìm phim, rạp",
        className,
        inputClassName,
        buttonClassName,
    }: SearchInputProps) => {
        const [innerValue, setInnerValue] = React.useState(defaultValue ?? "");
        const isControlled = value !== undefined;
        const v = isControlled ? value : innerValue;

        const setValue = (val: string) => {
            if (!isControlled) setInnerValue(val);
            onChange?.(val);
        };

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit?.(v.trim());
        };

        return (
            <form onSubmit={handleSubmit} className={cn("w-full", className)}>
                {/* wrapper điều khiển hover + focus */}
                <div className="group relative transition-all duration-300 hover:scale-[1.01]">
                    <div
                        className={cn(
                            "relative flex items-center rounded-full bg-white shadow-sm",
                            "ring-1 ring-transparent transition-all duration-300",
                            "group-hover:shadow-md group-hover:ring-slate-200",
                            "focus-within:ring-2 focus-within:ring-slate-300 focus-within:shadow-lg"
                        )}
                    >
                        <Input
                            value={v}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder={placeholder}
                            className={cn(
                                "h-10 w-full rounded-full bg-transparent",
                                "pl-4 pr-11 text-[15px] text-slate-800 placeholder:text-slate-400",
                                "border-0 shadow-none",
                                "focus-visible:ring-0 focus-visible:ring-offset-0",
                                inputClassName
                            )}
                        />

                        <Button
                            type="submit"
                            variant="ghost"
                            size="icon"
                            aria-label="Tìm kiếm"
                            className={cn(
                                "absolute right-2 top-1/2 -translate-y-1/2",
                                "h-8 w-8 rounded-full",
                                "text-slate-500 bg-transparent",
                                "transition-all duration-300",
                                "group-hover:text-slate-700 group-hover:bg-slate-100/70 group-hover:scale-105",
                                "active:scale-95",
                                buttonClassName
                            )}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5 transition-transform duration-300 group-hover:rotate-[-8deg] group-focus-within:scale-110"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
            </form>
        );
    };

