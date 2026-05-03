import { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import CompetenceCard from "../components/CompetenceCard.jsx";

import realiser from "../constants/portfolio/realiser.json";
import optimiser from "../constants/portfolio/optimiser.json";
import collaborer from "../constants/portfolio/collaborer.json";

const NIVEAU3 = [realiser, optimiser, collaborer];


const VERB_LABELS = {
    realiser:    "Réaliser",
    optimiser:   "Optimiser",
    collaborer:  "Collaborer",
    administrer: "Administrer",
    gerer:       "Gérer",
    conduire:    "Conduire",
};

const ACCENT_BORDER = {
    realiser:    "border-l-red-500",
    optimiser:   "border-l-orange-500",
    collaborer:  "border-l-gray-500",
    administrer: "border-l-yellow-500",
    gerer:       "border-l-emerald-500",
    conduire:    "border-l-blue-500",
};

const ACCENT_DOT = {
    realiser:    "bg-red-400",
    optimiser:   "bg-yellow-400",
    collaborer:  "bg-gray-400",
    administrer: "bg-orange-400",
    gerer:       "bg-emerald-400",
    conduire:    "bg-blue-400",
};

export default function Portfolio() {
    const competences = NIVEAU3;

    const [sidebarBottom, setSidebarBottom] = useState(0);
    useEffect(() => {
        const update = () => {
            const footer = document.querySelector("footer");
            if (!footer) return;
            setSidebarBottom(Math.max(0, window.innerHeight - footer.getBoundingClientRect().top));
        };
        update();
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update, { passive: true });
        return () => {
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">

            {/* ── Mobile : barre fixe sous la navbar ── */}
            <div className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur border-b border-white/10 px-4 py-2">
                <div className="flex gap-1 overflow-x-auto pb-0.5" style={{ scrollbarWidth: "none" }}>
                    {competences.map((c) => (
                        <a
                            key={c.id}
                            href={`#${c.id}`}
                            className={`shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/10 transition border-l-2 ${ACCENT_BORDER[c.id] ?? "border-l-gray-500"}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ACCENT_DOT[c.id] ?? "bg-gray-400"}`} />
                            {VERB_LABELS[c.id] ?? c.titre}
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex">

                {/* ── Desktop : sidebar fixed, s'arrête avant le footer ── */}
                <aside
                    className="hidden lg:flex fixed top-20 left-0 w-56 flex-col gap-3 px-4 pt-6 overflow-y-auto border-r border-white/10 bg-black z-30"
                    style={{ bottom: sidebarBottom }}
                >
                    <p className="text-xs uppercase tracking-widest text-white/25 px-1">Navigation</p>
                    {competences.map((c) => (
                        <a
                            key={c.id}
                            href={`#${c.id}`}
                            className={`group flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 transition border-l-2 ${ACCENT_BORDER[c.id] ?? "border-l-gray-500"}`}
                        >
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${ACCENT_DOT[c.id] ?? "bg-gray-400"}`} />
                            <span className="text-sm text-white/60 group-hover:text-white transition">
                                {VERB_LABELS[c.id] ?? c.titre}
                            </span>
                        </a>
                    ))}
                </aside>

                {/* ── Contenu principal ── */}
                {/* pt-20 mobile : compense la barre fixe portfolio (~80px) sous la navbar */}
                <div className="flex-1 lg:ml-56 pt-20 lg:pt-0">
                    <div className="max-w-5xl mx-auto px-4 py-24">
                        <Link
                            smooth to="/#carrier"
                            className="inline-block mb-10 bg-white/10 text-white/70 px-4 py-2 rounded-full hover:bg-white/20 hover:text-white transition text-sm"
                        >
                            Retour
                        </Link>

                        <header className="mb-12">
                            <p className="text-sm uppercase tracking-widest text-white/40 mb-2">BUT Informatique</p>
                            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
                                Portfolio d&apos;Apprentissage
                            </h1>
                            <p className="text-white/50 max-w-2xl text-base">
                                Documentation des compétences de niveau 3 acquises au cours du cursus de BUT Informatique, à travers des preuves concrètes issues de projets académiques, professionnels et personnels.
                            </p>
                        </header>

                        <div className="flex flex-col gap-2">
                            {competences.map((competence) => (
                                <section key={competence.id} id={competence.id}>
                                    <CompetenceCard competence={competence} />
                                </section>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
