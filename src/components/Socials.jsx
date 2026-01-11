import React from 'react'
import {Github, Linkedin} from "iconoir-react/regular";
import {Mail} from "iconoir-react";
import {socials} from "@/constants/index.js";

const Socials = () => {
    return (
        <div className="flex z-99">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                <Github />
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                <Linkedin />
            </a>
            <a href={socials.mail} target="_blank" rel="noopener noreferrer" className="mx-2">
                <Mail />
            </a>
            <a href={socials.cv} target="_blank" rel="noopener noreferrer" className="mx-2">
                <img className="w-[2em] h-[2em] opacity-70" src="/assets/ico-cv.png" alt="CV" title="CV"/>
            </a>
        </div>
    )
}
export default Socials
