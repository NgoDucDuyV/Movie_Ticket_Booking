import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Search = () => {
    return (
        <form className="w-full max-w-[250px]">
            <div className="relative">
                <Input
                    type="text"
                    placeholder="Tìm phim, rạp"
                    className="
                        h-10 w-full rounded-full
                        bg-white
                        pl-4 pr-11
                        text-[15px] text-slate-800 placeholder:text-slate-400
                        border-0 shadow-sm
                        focus-visible:ring-0 focus-visible:ring-offset-0
                    "
                />

                {/* icon search nằm trong input, sát mép phải */}
                <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="
                        absolute right-3 top-1/2 -translate-y-1/2
                        h-8 w-8 rounded-full
                        text-slate-500
                        hover:bg-transparent hover:text-slate-700
                    "
                    aria-label="Tìm kiếm"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </Button>
            </div>
        </form>
    );
};
