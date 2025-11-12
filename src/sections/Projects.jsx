import React, {useRef, useState} from 'react'
import TitleSection from "../components/TitleSection.jsx";
import {projects} from "../constants/projects.js";
import ProjectCardContent from "../components/ProjectCardContent.jsx";

const Projects = () => {
    const cardRefs = useRef([]);
    const [sortType, setSortType] = useState("newest");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleMouseMove = (e) => {
        if (!cardRefs.current) return;
        cardRefs.current.forEach((carte) => {
            const blob = carte.querySelector(".card-blob");
            const fakeblob = carte.querySelector(".card-fakeblob");
            const rec = fakeblob.getBoundingClientRect();

            blob.animate(
                [{
                    transform: `translate(${e.clientX - rec.left - (rec.width / 2)}px,${e.clientY - rec.top - (rec.height / 2)}px)`,
                }],
                {
                    duration: 300,
                    fill: "forwards",
                }
            );
        });
    }

    const handleMouseEnter = () => {
        if (!cardRefs.current) return;
        cardRefs.current.forEach((carte) => {
            const blob = carte.querySelector(".card-blob");
            blob.style.opacity = 1;
        });
    }

    const handleMouseLeave = () => {
        if (!cardRefs.current) return;
        cardRefs.current.forEach((carte) => {
            const blob = carte.querySelector(".card-blob");
            blob.style.opacity = 0;
        });
    }

    const filteredProjects = projects
        .filter((p) => {
            const search = searchQuery.toLowerCase();
            return (
                p.name.toLowerCase().includes(search) ||
                p.technologies.some((tech) => tech.toLowerCase().includes(search)) ||
                p.tags.some((tag) => tag.toLowerCase().includes(search)) ||
                p.date.toLowerCase().includes(search)
            );
        })
        .sort((a, b) =>
            sortType === "newest"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date)
        );


    const visibleCount = 3
    const maxIndex = Math.max(0, filteredProjects.length / visibleCount - 1);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };


    return (
        <section id="projects" className="w-full h-full md:mt-40 mt-20">
            <TitleSection title="Projets" subTitle={`Total projets : ${projects.length}`} />

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-6 mb-4 w-[90%] mx-auto h-[3em]">
                <input
                    type="text"
                    placeholder="Rechercher un projet"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-full sm:w-1/2 px-4 py-2 rounded-lg border border-secondary shadow-sm focus-ring-custom"
                />
                <div className="flex gap-2 h-full">
                    <button
                        className={`px-3 py-1 rounded-md text-sm transition h-full btn-custom ${
                            sortType === "newest" ? "bg-secondary/30" : ""
                        }`}
                        onClick={() => setSortType("newest")}
                    >
                        Newest
                    </button>
                    <button
                        className={`px-3 py-1 rounded-md text-sm transition btn-custom ${
                            sortType === "oldest" ? "bg-secondary/30" : ""
                        }`}
                        onClick={() => setSortType("oldest")}
                    >
                        Oldest
                    </button>
                </div>
            </div>

            <div className="relative w-[90%] mx-auto">
                <button
                    onClick={handlePrev}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 disabled:opacity-30 ${currentIndex === 0 ? "hidden" : ""}`}
                    disabled={currentIndex === 0}
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 disabled:opacity-30 ${currentIndex === maxIndex ? "hidden" : ""}`}
                    disabled={currentIndex === maxIndex}
                >
                    →
                </button>
                <div
                    onMouseEnter={handleMouseEnter} onTouchStart={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} onTouchEnd={handleMouseLeave}
                    onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}
                    className="section-container h-[80vh] w-[95%] mx-auto mt-5 sm:mt-2.5 flex overflow-hidden">
                    {filteredProjects.map((project) => (
                        <div key={project.id} ref={(el) => (cardRefs.current[project.id] = el)}
                             className="card-project card-glow w-[33%] h-full mx-[0.15%] flex-shrink-0 min-w-[300px] rounded-2xl transition-transform duration-500 ease-in-out"
                             style={{
                                 transform: `translateX(calc(-${visibleCount * currentIndex * 100}% - ${visibleCount * currentIndex * 6 * 0.15}%))`,
                             }}>
                            <div className="card-inner w-full h-full flex flex-col items-center p-3">
                                <ProjectCardContent project={project} />
                            </div>
                            <div className="card-blob"></div>
                            <div className="card-fakeblob"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects
