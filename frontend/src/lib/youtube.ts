export const getYoutubeId = (url: string): string => {
    try {
        const u = new URL(url);

        // youtu.be/<id>
        if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);

        // youtube.com/watch?v=<id>
        const v = u.searchParams.get("v");
        if (v) return v;

        // youtube.com/embed/<id>
        const match = u.pathname.match(/\/embed\/([^/]+)/);
        return match?.[1] ?? "";
    } catch {
        return "";
    }
};
