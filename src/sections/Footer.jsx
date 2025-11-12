import React from 'react'
import {Github, Linkedin} from "iconoir-react/regular";
import {Mail} from "iconoir-react";
import {socials} from "../constants/index.js";

const Footer = () => {
    return (
        <footer className="w-full h-fit flex-col justify-center items-center bg-black-100 p-5">
            <div className="flex w-full justify-center items-center px-5">
                <p>Made with 💙 by Julien Renaud</p>
                <div className="flex pl-5">
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                        <Github />
                    </a>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                        <Linkedin />
                    </a>
                    <a href={socials.mail} target="_blank" rel="noopener noreferrer" className="mx-2">
                        <Mail />
                    </a>
                </div>
            </div>
            <p className="text-sm italic flex-1 text-center pt-5">© 2025 Julien Renaud - Code source disponible sous licence MIT</p>
        </footer>
    )
}
export default Footer
