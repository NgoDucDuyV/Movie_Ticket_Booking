import i18n from "@/i18n"

export function LangSwitcher() {
    const setLang = (lang: "vi" | "en") => {
        i18n.changeLanguage(lang)
        localStorage.setItem("lang", lang)
    }

    return (
        <div className="flex gap-2">
            <button onClick={() => setLang("vi")} className="px-3 py-1 rounded bg-red-600 text-white">
                VI
            </button>
            <button onClick={() => setLang("en")} className="px-3 py-1 rounded bg-neutral-700 text-white">
                EN
            </button>
        </div>
    )
}