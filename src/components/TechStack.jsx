import React, {useState} from 'react'
import TechStackPhysics from "./TechStackPhysics.jsx";
import {socials} from "@/constants/index.js";

const TechStack = () => {
    const [hasGravity, setGravity] = useState(false)

    return (
        <div className="w-full h-full flex flex-col relative overflow-hidden">
            <div className="flex-col gap-3">
                <p className="font-bold text-xl text-justify py-2 text-hack text-secondary">&gt; Stack</p>
                <p className="text-gray-500 text-xs italic text-right w-full pr-1">Réalisés avec les données issues de <a className="underline" href={socials.wakatime}>WakaTime</a></p>
            </div>
            <button type="button" className="absolute bottom-0 right-0 z-40 button py-2.5 px-5 me-2 mb-2 text-sm font-medium text-secondary focus:outline-none bg-tertiary hover:opacity-70 cursor-pointer rounded-lg border min-w-[100px]" onClick={() => setGravity(prev => !prev)}>
                {hasGravity ? "Gravity: On" : "Gravity: Off"}
            </button>
            <div className="flex-grow">
                <TechStackPhysics isPlaying={true} hasGravity={hasGravity} />
            </div>
        </div>
    )
}
export default TechStack
