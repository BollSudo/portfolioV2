import React from 'react'
import {Link} from "react-router-dom";
import {technologies} from "../constants/index.js";

const ProjectCardContent = ({project}) => {
    return (
        <div className="flex flex-col h-full w-full px-3">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-shadow-tertiary text-shadow-lg text-3xl font-bold mt-10">{project.name}</h1>
                <p>{project.date.getFullYear()}</p>
                {project.logo ? (
                    <img className="h-[50px] w-auto" src={project.assets_dir + project.logo} alt={project.name} />
                ) : <div className="h-[50px]"></div>}
            </div>
            <div className="project-summary flex-1 max-h-1/4 overflow-hidden">
                <p className="text-justify line-clamp-6">
                    {project.summary}
                </p>
            </div>
            <div className="project-thumbnail flex-1 flex items-center justify-center p-3 max-h-1/2">
                {project.thumbnail.type === "image" ? (
                    <img className="rounded-2xl object-cover max-h-full" src={project.assets_dir + project.thumbnail.source} alt={project.name} />
                ) : project.thumbnail.type === "video" ? (
                    <video className="rounded-2xl object-cover max-h-full" src={project.assets_dir +  project.thumbnail.source} controls />
                ) : null}
            </div>
            <div className="flex justify-between">
                <div className="flex items-center justify-center flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <img key={index} className="h-5" src={"assets/logos/" + technologies.find((t) => t.name === tech).icon} alt={tech.name} />
                    ))}
                </div>
                    <Link to={"/project/" + project.id} className="btn-custom h-fit p-1">
                        Voir plus
                    </Link>
            </div>
        </div>
    )
}
export default ProjectCardContent
