import { useEffect } from "react";

export type TrailerModalProps = {
    open: boolean;
    onClose: () => void;
    youtubeId: string;
    className?: string; // optional nếu muốn custom
};

export default function TrailerModal({
    open,
    onClose,
    youtubeId,
}: TrailerModalProps) {
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999]">
            {/* overlay */}
            <button
                aria-label="Close trailer"
                className="absolute inset-0 bg-black/70"
                onClick={onClose}
            />

            {/* modal */}
            <div className="relative mx-auto flex min-h-full w-full items-center justify-center p-4">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                    {/* close */}
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 z-10 rounded-full bg-white/10 px-3 py-2 text-white hover:bg-white/20"
                    >
                        ✕
                    </button>

                    {/* 16:9 */}
                    <div className="relative w-full pt-[56.25%]">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                            title="Trailer"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
