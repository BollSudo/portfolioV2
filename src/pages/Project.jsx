import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {projects} from "../constants/projects.js";
import { HashLink as Link } from 'react-router-hash-link';
import CustomMarkdown from "../components/CustomMarkdown.jsx";
import {ArrowLeftCircleSolid, ArrowRightCircleSolid, Github} from "iconoir-react";



const Project = () => {
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === Number(projectId));
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!currentImage) return;

            switch (e.key) {
                case "ArrowLeft":
                    prevImage();
                    break;
                case "ArrowRight":
                    nextImage();
                    break;
                case "Escape":
                    setCurrentImage(null);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [currentImage]);

    if (!project) {
        return <div>Project not found</div>;
    }

    const imagesStart = project.gallery.content_begin;
    const imagesEnd = project.gallery.content_end;
    const allImages = [...imagesStart, ...imagesEnd];

    const getImageSrc = (image) => {
        return project.assets_dir + project.gallery.dir + image.src;
    }

    const nextImage = () => {
        if (!currentImage) return;
        const currentIndex = allImages.findIndex((i) => i.src === currentImage.src);
        const nextIndex = (currentIndex + 1) % allImages.length;
        setCurrentImage(allImages[nextIndex]);
    };

    const prevImage = () => {
        if (!currentImage) return;
        const currentIndex = allImages.findIndex((i) => i.src === currentImage.src);
        const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        setCurrentImage(allImages[prevIndex]);
    };

    return (
        <div className="px-5 py-10 max-w-6xl mx-auto my-20">
            <Link
                smooth
                to="/#projects"
                className="inline-block bg-secondary text-white px-4 py-2 rounded-tr-full rounded-full hover:opacity-80 transition"
            >
                Revenir aux projets
            </Link>

            <div className="mt-10">
                <div className="flex gap-3 items-center">
                    <h1 className="text-4xl font-bold">{project.name}</h1>
                    {project.repo ? (
                        <a href={project.repo} target="_blank" title="Lien du repository" className="text-secondary" rel="noopener noreferrer">
                            <Github width="2.3em" height="2.3em" color="currentColor" className="hover:text-secondary/70 transition"></Github>
                        </a>
                    ) : null}
                </div>

                {/* Gallery */}
                <div className="gallery">
                    {imagesStart.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img
                                src={getImageSrc(image)}
                                alt={"image-" + index}
                                className="mb-4 cursor-pointer"
                                onClick={() => setCurrentImage(image)}
                            />
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {currentImage && (
                    <div className="modal" style={{ display: 'block' }}>
                        <div className="modal-overlay relative flex flex-col justify-center items-center">
                            <div className="modal-background w-full h-full fixed" onClick={() => setCurrentImage(null)}></div>
                            <div className="modal-title-wrapper">
                                <h3 className="modal-title">{currentImage.title}</h3>
                                <span className="modal-close" onClick={() => setCurrentImage(null)}>&times;</span>
                            </div>
                            <img className="modal-image" src={getImageSrc(currentImage)} alt={currentImage.title} />

                            <button className="modal-next rounded-full w-20 h-20 right-1 top-1/2 absolute bg-tertiary" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                                <ArrowRightCircleSolid className="w-full h-full hover:text-secondary transition" />
                            </button>

                            <button className="modal-previous rounded-full w-20 h-20 left-1 top-1/2 absolute bg-tertiary" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                                <ArrowLeftCircleSolid className="w-full h-full hover:text-secondary transition"/>
                            </button>
                        </div>
                    </div>
                )}

                {/* Contexte */}
                <section className="content-project mb-8">
                    <h2 className="text-2xl font-semibold mb-2">Contexte</h2>
                    <div className="text-justify text-gray-700 mb-3">
                        <CustomMarkdown markdownContent={project.context} />
                    </div>
                </section>

                {/* Compétences acquises */}
                {project.competences.length > 0 ? (
                    <h2 className="text-2xl font-semibold mb-2">Compétences acquises</h2>
                ):null}
                {project.competences.map((competence, index) => (
                    <section key={index} className="content-project mb-8">
                        <div className="flex gap-3">
                            <h3 className="text-xl font-semibold mb-2">{competence.title}</h3>
                            {competence.link ? (
                                <a href={competence.link} target="_blank" rel="noopener noreferrer"><Github color="currentColor" className="hover:text-secondary/70 transition" /></a>
                            ) : null}
                        </div>
                        <div className="text-justify text-gray-700 mb-3">
                            <CustomMarkdown markdownContent={competence.description}/>
                        </div>
                    </section>
                ))}

                {/* Gallery */}
                <div className="gallery">
                    {imagesEnd.map((image, index) => (
                        <div key={index} className="gallery-item">
                            <img
                                key={index}
                                src={getImageSrc(image)}
                                alt={"image-" + index}
                                className="mb-4"
                                title={image.title}
                                onClick={() => setCurrentImage(image)}
                            />
                        </div>
                    ))}
                </div>

                {/* Traces */}
                {project.links.length > 0 ? (
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            Liens
                        </h2>
                        <ul className="list-disc list-inside text-blue-600">
                            {project.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                {/* Contributeurs */}
                {project.contributors.length > 0 ? (
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Contributeurs</h2>
                        <ul className="flex flex-wrap gap-4">
                            {project.contributors.map((contributor, index) => (
                                <li key={index} className="bg-secondary px-3 py-1 rounded-lg">
                                    {contributor}
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </div>
        </div>
    );
}

export default Project