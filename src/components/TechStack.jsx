import React, {useState} from 'react'
import TechStackPhysics from "./TechStackPhysics.jsx";

const TechStack = () => {
    const [isPlaying, setPlaying] = useState(false)

    return (
        <div className="w-full h-full relative">
            <button type="button" className="absolute bottom-0 right-0 z-40 button py-2.5 px-5 me-2 mb-2 text-sm font-medium text-secondary focus:outline-none bg-tertiary hover:opacity-70 cursor-pointer rounded-lg border min-w-[100px]" onClick={() => setPlaying(prev => !prev)}>
                {isPlaying ? "Reset" : "Play"}
            </button>
            <TechStackPhysics isPlaying={isPlaying} hasGravity={false} />
        </div>
    )
}
export default TechStack
