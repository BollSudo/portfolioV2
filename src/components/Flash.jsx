import { useEffect } from "react";

export default function FlashMessage({
     message,
     type = "success", // success | error | info | warning
     duration = 5000,
     onClose,
 }) {
    useEffect(() => {
        if (!duration) return;
        const timer = setTimeout(() => {
            onClose?.();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!message) return null;

    const base =
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl border backdrop-blur-md shadow-2xl transition-all animate-in slide-in-from-bottom-4 fade-in duration-300";

    const variants = {
        success:
            "bg-green-950/80 border-green-500/50 text-green-100 shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]",
        error:
            "bg-red-950/80 border-red-500/50 text-red-100 shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]",
        info:
            "bg-blue-950/80 border-blue-500/50 text-blue-100 shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)]",
        warning:
            "bg-yellow-950/80 border-yellow-500/50 text-yellow-100 shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)]",
    };

    const icons = {
        success: "✔",
        error: "✖",
        info: "ⓘ",
        warning: "⚠",
    };

    return (
        <div className={`${base} ${variants[type]}`}>
            <span className="text-lg opacity-80 animate-pulse">{icons[type]}</span>
            <span className="text-sm font-medium tracking-wide text-shadow-sm">
        {message}
      </span>
            <button
                onClick={onClose}
                className="ml-2 text-xl leading-none opacity-50 hover:opacity-100 transition-opacity duration-300"
                aria-label="Close"
            >
                &times;
            </button>
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-10"></div>
        </div>
    );
}