import React, {useRef} from 'react'
import {useParams} from "react-router-dom";
import {projects} from "../constants/projects.js";
import { HashLink as Link } from 'react-router-hash-link';
import CustomMarkdown from "../components/CustomMarkdown.jsx";
import {ArrowLeftCircleSolid, ArrowRightCircleSolid, Github} from "iconoir-react";



const Project = () => {
    const modalRef = useRef(null);
    const { projectId } = useParams();
    const project = projects.find((p) => p.id === Number(projectId));
    let currentImage = null;

    if (!project) {
        return <div>Project not found</div>;
    }


    const openModal = (image) => () => {
        if (!modalRef.current) return;
        currentImage = image;
        updateImage(image);
        modalRef.current.style.display = "block";
    }

    const updateImage = (image) => {
        if (!modalRef.current) return;
        let modalImg = modalRef.current.querySelector(".modal-image");
        let modalTitle = modalRef.current.querySelector(".modal-title");
        modalTitle.textContent = image.title;
        modalImg.src = getImageSrc(image);
    }

    const closeModal = () => {
        if (!modalRef.current) return;
        modalRef.current.style.display = "none";
        currentImage = null;
    }

    const nextImage = () => {
        if (!modalRef.current) return;
        let currentIndex = findImageIndex(currentImage);
        if (currentIndex === -1) return;
        let nextIndex = (currentIndex + 1) % allImages.length;
        currentImage = allImages[nextIndex];
        updateImage(currentImage);
    }

    const prevImage = () => {
        if (!modalRef.current) return;
        let currentIndex = findImageIndex(currentImage);
        if (currentIndex === -1) return;
        let prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        currentImage = allImages[prevIndex];
        updateImage(currentImage);
    }

    const handleKeyDown = (e) => {
        if (currentImage === null) return;
        switch (e.key) {
            case "ArrowLeft":
                prevImage();
                break;
            case "ArrowRight":
                nextImage();
                break;
            case "Escape":
                closeModal();
                break;
        }
    }

    const imagesStart = project.gallery.content_begin;
    const imagesEnd = project.gallery.content_end;
    const allImages = [...imagesStart, ...imagesEnd];

    const findImageIndex = (image) => {
        return allImages.findIndex((i) => i.src === image.src);
    }

    const getImageSrc = (image) => {
        return project.assets_dir + project.gallery.dir + image.src;
    }

    window.addEventListener("keydown", handleKeyDown);

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
                                key={index}
                                src={getImageSrc(image)}
                                alt={"image-" + index}
                                className="mb-4"
                                title={image.title}
                                onClick={openModal(image)}
                            />
                        </div>
                    ))}
                </div>

                {/* Gallery Modal */}
                <div ref={modalRef} tabIndex={0} className="modal" onKeyDown={handleKeyDown}>
                    <div className="modal-overlay relative flex flex-col justify-center items-center">
                        <div className="modal-background w-full h-full fixed" onClick={closeModal}></div>
                        <div className="modal-title-wrapper">
                            <h3 className="modal-title"></h3>
                            <span className="modal-close" onClick={closeModal}>&times;</span>
                        </div>
                        <img className="modal-image" />
                        <button className="modal-next rounded-full w-20 h-20 right-1 top-1/2 absolute bg-tertiary" onClick={nextImage}><ArrowRightCircleSolid className="w-full h-full hover:text-secondary transition" /></button>
                        <button className="modal-previous rounded-full w-20 h-20 left-1 top-1/2 absolute bg-tertiary" onClick={prevImage}><ArrowLeftCircleSolid className="w-full h-full hover:text-secondary transition"/></button>
                    </div>
                </div>

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
                                onClick={openModal(image)}
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