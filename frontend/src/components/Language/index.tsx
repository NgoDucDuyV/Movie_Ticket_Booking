    import * as React from "react";
    import { cn } from "@/lib/utils";

    import vnFlag from "@/assets/images/footer-vietnam.svg";
    import usFlag from "@/assets/images/footer-america.webp";

    type Lang = "VN" | "ENG";

    type LanguageSwitcherProps = {
        value?: Lang;
        onChange?: (lang: Lang) => void;
        className?: string;
        buttonClassName?: string;
        menuClassName?: string;
    };
    

    export const LanguageSwitcher = ({
        value = "VN",
        onChange,
        className,
        buttonClassName,
        menuClassName,
    }: LanguageSwitcherProps) => {
        const [open, setOpen] = React.useState(false);

        const items: { key: Lang; label: Lang; img: string }[] = [
            { key: "VN", label: "VN", img: vnFlag },
            { key: "ENG", label: "ENG", img: usFlag },
        ];

        const current = items.find((i) => i.key === value) ?? items[0];

        return (
            <div className={cn("relative", className)}>
                {/* Button */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    className={cn(
                        "inline-flex items-center gap-2",
                        "rounded-full px-3 py-2",
                        "text-white/80 hover:text-white",
                        "bg-white/5 hover:bg-white/10",
                        "ring-1 ring-white/10 hover:ring-white/15",
                        "transition-all",
                        buttonClassName
                    )}
                    aria-haspopup="menu"
                    aria-expanded={open}
                >
                    <img
                        src={current.img}
                        alt={current.label}
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                    />
                    <span className="text-sm font-medium">{current.label}</span>
                    {/* icon check rou */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>

                {/* Menu */}
                <div
                    className={cn(
                        "absolute right-0 mt-2 w-28",
                        "rounded-xl bg-[#0f1620]/95 backdrop-blur-md",
                        "ring-1 ring-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
                        "overflow-hidden",
                        "origin-top-right transition-all duration-150",
                        open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
                        menuClassName
                    )}
                    role="menu"
                >
                    {items.map((it) => (
                        <button
                            key={it.key}
                            type="button"
                            onClick={() => {
                                onChange?.(it.key);
                                setOpen(false);
                            }}
                            className={cn(
                                "w-full px-3 py-2",
                                "flex items-center gap-2",
                                "text-left text-sm",
                                it.key === value ? "bg-white/10 text-white" : "text-white/80",
                                "hover:bg-white/10 hover:text-white transition"
                            )}
                            role="menuitem"
                        >
                            <img
                                src={it.img}
                                alt={it.label}
                                width={20}
                                height={20}
                                className="h-5 w-5 rounded-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                            <span className="font-medium">{it.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        );
    }
