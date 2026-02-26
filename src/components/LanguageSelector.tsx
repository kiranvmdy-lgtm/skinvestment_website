import { useCallback, useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";

interface Language {
    code: string;
    label: string;
    nativeLabel: string;
}

const languages: Language[] = [
    { code: "en", label: "English", nativeLabel: "English" },
    { code: "kn", label: "Kannada", nativeLabel: "ಕನ್ನಡ" },
    { code: "hi", label: "Hindi", nativeLabel: "हिन्दी" },
];

declare global {
    interface Window {
        google: any;
        googleTranslateElementInit: () => void;
    }
}

// Module-level flag to ensure Google Translate is only loaded once,
// even if multiple LanguageSelector instances are mounted.
let googleTranslateLoaded = false;

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Load Google Translate script once (module-level singleton)
    useEffect(() => {
        if (googleTranslateLoaded) return;
        googleTranslateLoaded = true;

        // Hidden container for Google Translate widget
        const container = document.createElement("div");
        container.id = "google_translate_element";
        container.style.display = "none";
        document.body.appendChild(container);

        window.googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    includedLanguages: "en,kn,hi",
                    autoDisplay: false,
                },
                "google_translate_element"
            );
        };

        const script = document.createElement("script");
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Close dropdown on outside click/touch
    useEffect(() => {
        const handleOutside = (e: MouseEvent | TouchEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleOutside);
        document.addEventListener("touchstart", handleOutside);
        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("touchstart", handleOutside);
        };
    }, []);

    // Sync current language from Google Translate cookie on mount
    useEffect(() => {
        const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
        if (match && match[1]) {
            setCurrentLang(match[1]);
        }
    }, []);

    const switchLanguage = useCallback((langCode: string) => {
        setCurrentLang(langCode);
        setIsOpen(false);

        // Trigger Google Translate
        const selectEl = document.querySelector(
            ".goog-te-combo"
        ) as HTMLSelectElement | null;

        if (selectEl) {
            selectEl.value = langCode;
            selectEl.dispatchEvent(new Event("change"));
        } else {
            // If the Google Translate widget hasn't fully loaded yet,
            // retry after a short delay
            const retryInterval = setInterval(() => {
                const retryEl = document.querySelector(
                    ".goog-te-combo"
                ) as HTMLSelectElement | null;
                if (retryEl) {
                    retryEl.value = langCode;
                    retryEl.dispatchEvent(new Event("change"));
                    clearInterval(retryInterval);
                }
            }, 200);
            // Stop retrying after 3 seconds
            setTimeout(() => clearInterval(retryInterval), 3000);
        }
    }, []);

    const currentLanguage =
        languages.find((l) => l.code === currentLang) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                onTouchEnd={(e) => {
                    e.preventDefault();
                    setIsOpen((prev) => !prev);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-muted"
                aria-label="Select language"
                id="language-selector-toggle"
            >
                <Globe className="w-4 h-4" />
                <span>{currentLanguage.nativeLabel}</span>
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-[100] animate-fade-in">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => switchLanguage(lang.code)}
                            onTouchEnd={(e) => {
                                e.preventDefault();
                                switchLanguage(lang.code);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors text-left ${currentLang === lang.code
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-foreground hover:bg-muted"
                                }`}
                            id={`lang-option-${lang.code}`}
                        >
                            <span className="text-base">{lang.nativeLabel}</span>
                            {currentLang === lang.code && (
                                <svg
                                    className="w-4 h-4 ml-auto text-primary"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
