import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link as RouterLink } from "react-router-dom";

const PROJECT_ROUTES = {
    ndi2024:      1,
    studAdvisor:  2,
    trains:       3,
    cirad:        4,
    veryBadSplit: 5,
    gps:          6,
    myAvatar:     7,
    ndi2025:      8,
};
import { ArrowLeftCircleSolid, ArrowRightCircleSolid } from "iconoir-react";

function ProofImage({ src, alt, onClick }) {
    const [failed, setFailed] = useState(false);
    if (failed) {
        return (
            <div className="flex flex-col items-center justify-center h-40 rounded-lg border border-dashed border-white/20 bg-white/5 text-white/30 text-xs p-2 gap-1 select-none">
                <span className="text-xl">📷</span>
                <span className="font-mono break-all text-center leading-tight">{alt}</span>
            </div>
        );
    }
    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            onError={() => setFailed(true)}
            onClick={onClick}
        />
    );
}

const COMPETENCE_COLORS = {
    realiser:    { accent: "border-red-500",    badge: "bg-red-500/20 text-red-300",    dot: "bg-red-400" },
    optimiser:   { accent: "border-orange-500",  badge: "bg-orange-500/20 text-orange-300", dot: "bg-orange-400" },
    administrer: { accent: "border-yellow-500",  badge: "bg-yellow-500/20 text-yellow-300",  dot: "bg-yellow-400" },
    gerer:       { accent: "border-emerald-500",    badge: "bg-emerald-500/20 text-emerald-300",    dot: "bg-emerald-400" },
    conduire:    { accent: "border-blue-500",    badge: "bg-blue-500/20 text-blue-300",    dot: "bg-blue-400" },
    collaborer:  { accent: "border-gray-500", badge: "bg-gray-500/20 text-gray-300", dot: "bg-gray-400" },
};

function PreuveCard({ preuve, acList, colors }) {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const imgContainerRef = useRef(null);
    const zoomRef = useRef(1);
    const offsetRef = useRef({ x: 0, y: 0 });
    const dragStartRef = useRef(null);

    const images = preuve.images ?? [];

    const applyZoom = (z) => { zoomRef.current = z; setZoom(z); };
    const applyOffset = (o) => { offsetRef.current = o; setOffset(o); };

    const resetZoom = () => {
        applyZoom(1);
        applyOffset({ x: 0, y: 0 });
    };

    const openImage = (img) => {
        resetZoom();
        setCurrentImage(img);
    };

    const closeImage = () => {
        resetZoom();
        setCurrentImage(null);
    };

    const nextImage = () => {
        if (!currentImage) return;
        const idx = images.findIndex((i) => i.src === currentImage.src);
        resetZoom();
        setCurrentImage(images[(idx + 1) % images.length]);
    };

    const prevImage = () => {
        if (!currentImage) return;
        const idx = images.findIndex((i) => i.src === currentImage.src);
        resetZoom();
        setCurrentImage(images[(idx - 1 + images.length) % images.length]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!currentImage) return;
            if (e.key === "ArrowRight") nextImage();
            else if (e.key === "ArrowLeft") prevImage();
            else if (e.key === "Escape") closeImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentImage]);

    // Wheel zoom (non-passive) + touch events on the image container
    useEffect(() => {
        const el = imgContainerRef.current;
        if (!el || !currentImage) return;

        const onWheel = (e) => {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.2 : 0.2;
            const newZoom = Math.max(1, Math.min(4, zoomRef.current + delta));
            if (newZoom <= 1) applyOffset({ x: 0, y: 0 });
            applyZoom(newZoom);
        };

        const onTouchStart = (e) => {
            if (e.touches.length === 1 && zoomRef.current > 1) {
                const touch = e.touches[0];
                dragStartRef.current = {
                    x: touch.clientX - offsetRef.current.x,
                    y: touch.clientY - offsetRef.current.y,
                };
            }
        };

        const onTouchMove = (e) => {
            if (e.touches.length === 1 && dragStartRef.current && zoomRef.current > 1) {
                e.preventDefault();
                const touch = e.touches[0];
                applyOffset({
                    x: touch.clientX - dragStartRef.current.x,
                    y: touch.clientY - dragStartRef.current.y,
                });
            }
        };

        const onTouchEnd = () => { dragStartRef.current = null; };

        el.addEventListener("wheel", onWheel, { passive: false });
        el.addEventListener("touchstart", onTouchStart, { passive: true });
        el.addEventListener("touchmove", onTouchMove, { passive: false });
        el.addEventListener("touchend", onTouchEnd);
        return () => {
            el.removeEventListener("wheel", onWheel);
            el.removeEventListener("touchstart", onTouchStart);
            el.removeEventListener("touchmove", onTouchMove);
            el.removeEventListener("touchend", onTouchEnd);
        };
    }, [currentImage]);

    // Document-level mouse drag
    useEffect(() => {
        if (!isDragging) return;
        const onMove = (e) => {
            if (!dragStartRef.current) return;
            applyOffset({
                x: e.clientX - dragStartRef.current.x,
                y: e.clientY - dragStartRef.current.y,
            });
        };
        const onUp = () => { setIsDragging(false); dragStartRef.current = null; };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
        };
    }, [isDragging]);

    const handleMouseDown = (e) => {
        if (zoomRef.current <= 1) return;
        e.preventDefault();
        dragStartRef.current = {
            x: e.clientX - offsetRef.current.x,
            y: e.clientY - offsetRef.current.y,
        };
        setIsDragging(true);
    };

    const zoomIn  = () => applyZoom(Math.min(4, zoomRef.current + 0.5));
    const zoomOut = () => {
        const n = Math.max(1, zoomRef.current - 0.5);
        if (n <= 1) applyOffset({ x: 0, y: 0 });
        applyZoom(n);
    };

    return (
        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-start justify-between gap-3 px-5 py-4 text-left hover:bg-white/5 transition"
            >
                <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white/90">{preuve.titre}</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {(preuve.ac_lies ?? []).map((acId) => (
                            <span key={acId} className={`text-xs px-2 py-0.5 rounded-full font-mono ${colors.badge}`}>
                                {acId}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="mt-1 text-white/40 text-xl select-none">{open ? "▲" : "▼"}</span>
            </button>

            {open && (
                <div className="px-5 pb-5 flex flex-col gap-4 border-t border-white/10 pt-4">
                    <div>
                        <h5 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Contexte</h5>
                        <p className="text-sm text-white/70 leading-relaxed text-justify">{preuve.contexte}</p>
                    </div>
                    <div>
                        <h5 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Argumentation</h5>
                        <p className="text-sm text-white/80 leading-relaxed text-justify">{preuve.argumentation}</p>
                    </div>
                    {preuve.ac_lies?.length > 0 && (
                        <div>
                            <h5 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">AC validés</h5>
                            <div className="flex flex-col gap-1">
                                {preuve.ac_lies.map((acId) => {
                                    const ac = acList.find((a) => a.id === acId);
                                    return ac ? (
                                        <span key={acId} className={`text-xs px-3 py-1 rounded-lg ${colors.badge}`}>
                                            <span className="font-mono font-bold mr-1">{acId}</span>
                                            {ac.titre}
                                        </span>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    )}
                    {images.length > 0 && (
                        <div>
                            <h5 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Captures</h5>
                            <div className="grid grid-cols-2 gap-2">
                                {images.map((img, i) => (
                                    <ProofImage key={i} src={img.src} alt={img.alt} onClick={() => openImage(img)} />
                                ))}
                            </div>
                        </div>
                    )}
                    {preuve.projet_ref && PROJECT_ROUTES[preuve.projet_ref] && (
                        <RouterLink
                            to={`/projects/${PROJECT_ROUTES[preuve.projet_ref]}`}
                            className={`self-start text-xs px-3 py-1 rounded-full ${colors.badge} hover:opacity-80 transition`}
                        >
                            Voir le projet →
                        </RouterLink>
                    )}
                </div>
            )}

            {currentImage && createPortal(
                <div className="modal" style={{ display: "block" }}>
                    <div className="modal-overlay relative flex flex-col justify-center items-center gap-2">
                        <div className="modal-background w-full h-full fixed" onClick={closeImage} />
                        <div className="modal-title-wrapper">
                            <h3 className="modal-title">{currentImage.alt}</h3>
                            <span className="modal-close" onClick={closeImage}>&times;</span>
                        </div>
                        <div
                            ref={imgContainerRef}
                            className="modal-zoom-container"
                            onMouseDown={handleMouseDown}
                            style={{ cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
                        >
                            <img
                                className="modal-image"
                                src={currentImage.src}
                                alt={currentImage.alt}
                                draggable={false}
                                style={{
                                    transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
                                    transition: isDragging ? "none" : "transform 0.15s ease",
                                    userSelect: "none",
                                    pointerEvents: "none",
                                }}
                            />
                        </div>
                        <div className="modal-zoom-controls">
                            <button className="modal-zoom-btn" onClick={(e) => { e.stopPropagation(); zoomOut(); }} disabled={zoom <= 1}>−</button>
                            <span className="modal-zoom-level">{Math.round(zoom * 100)}%</span>
                            <button className="modal-zoom-btn" onClick={(e) => { e.stopPropagation(); zoomIn(); }} disabled={zoom >= 4}>+</button>
                            <span className="modal-zoom-separator" />
                            <button className="modal-zoom-btn modal-zoom-reset" onClick={(e) => { e.stopPropagation(); resetZoom(); }} disabled={zoom === 1}>↺</button>
                        </div>
                        {images.length > 1 && (
                            <>
                                <button
                                    className="modal-next rounded-full w-20 h-20 right-1 bottom-10 md:top-1/2 fixed md:absolute bg-tertiary"
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                >
                                    <ArrowRightCircleSolid className="w-full h-full hover:text-secondary transition" />
                                </button>
                                <button
                                    className="modal-previous rounded-full w-20 h-20 left-1 bottom-10 md:top-1/2 fixed md:absolute bg-tertiary"
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                >
                                    <ArrowLeftCircleSolid className="w-full h-full hover:text-secondary transition" />
                                </button>
                            </>
                        )}
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}

export default function CompetenceCard({ competence }) {
    const [activeTab, setActiveTab] = useState("preuves");
    const [collapsed, setCollapsed] = useState(true);
    const colors = COMPETENCE_COLORS[competence.id] ?? COMPETENCE_COLORS.realiser;

    const tabs = [
        { id: "preuves", label: `Preuves (${competence.preuves.length})` },
        { id: "ac", label: "Apprentissages critiques" },
        { id: "ce", label: "Composantes essentielles" },
    ];

    return (
        <article className={`rounded-2xl border-l-4 ${colors.accent} bg-white/5 backdrop-blur overflow-hidden`}>
            <button
                onClick={() => setCollapsed((v) => !v)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left hover:bg-white/5 transition"
            >
                <header className="flex flex-col gap-2 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                            Niveau {competence.niveau?.numero}
                        </span>
                        <span className="text-xs text-white/40">{competence.niveau?.objectif}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{competence.titre}</h2>
                    {competence.description && (
                        <p className="text-sm text-white/60 leading-relaxed">{competence.description}</p>
                    )}
                </header>
                <span className="mt-1 shrink-0 text-white/40 text-xl select-none transition-transform duration-200" style={{ transform: collapsed ? "rotate(0deg)" : "rotate(180deg)" }}>
                    ▼
                </span>
            </button>

            {!collapsed && (
                <div className="px-6 pb-6 flex flex-col gap-5 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-1 border-b border-white/10 pb-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`text-sm px-3 py-1.5 rounded-t-lg transition ${
                                    activeTab === tab.id
                                        ? `${colors.badge} font-semibold`
                                        : "text-white/40 hover:text-white/70"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {activeTab === "preuves" && (
                        <div className="flex flex-col gap-3">
                            {competence.preuves.map((preuve, i) => (
                                <PreuveCard key={i} preuve={preuve} acList={competence.ac} colors={colors} />
                            ))}
                        </div>
                    )}

                    {activeTab === "ac" && (
                        <ul className="flex flex-col gap-3">
                            {competence.ac.map((ac, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className={`shrink-0 mt-0.5 text-xs font-mono font-bold px-2 py-0.5 rounded ${colors.badge}`}>
                                        {ac.id}
                                    </span>
                                    <span className="text-sm text-white/80">{ac.titre}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {activeTab === "ce" && (
                        <ul className="flex flex-col gap-2">
                            {competence.ce.map((ce, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                    <span className={`shrink-0 mt-1.5 w-2 h-2 rounded-full ${colors.dot}`} />
                                    {ce}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </article>
    );
}
