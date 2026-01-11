import React, {useRef} from 'react'
import Tilt from "./Tilt.jsx";

const TiltCard = () => {
    const cardRef = useRef(null);
    const isFlipped = useRef(false);

    const handleClick = () => {
        if (cardRef.current) {
            isFlipped.current = !isFlipped.current;
            cardRef.current.style.transform = isFlipped.current
                ? "rotateY(180deg)"
                : "rotateY(0deg)";
        }
    };

    return (
        <Tilt
            options={{ max: 25, speed: 800, glare: true, "max-glare": 0.5 }}
            className="card-tilt w-[500px] h-[320px] relative bg-primary"
        >
            <div ref={cardRef} onClick={handleClick} className="card-flip w-full h-full group">
                <div className="card-flip-front absolute inset-0 w-full h-full rounded-xl [backface-visibility:hidden] overflow-hidden shadow-2xl border border-white/10">
                    <div className="absolute inset-0 bg-primary"></div>
                    <div className="stars-overlay"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                        <h2 className="text-2xl font-bold font-mono tracking-wider text-secondary font-bold drop-shadow-[0_0_10px_#8b8000]">
                            Julien RENAUD
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 font-mono">Développeur Junior Fullstack</p>
                        <div className="mt-4 w-12 h-1 bg-secondary rounded-full shadow-[0_0_15px_#8b8000]"></div>
                    </div>
                </div>

                <div className="card-flip-back absolute inset-0 w-full h-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden shadow-2xl border border-white/10">
                    <div className="absolute inset-0 bg-primary"></div>
                    <div className="stars-overlay"></div>
                    <div className="w-full h-full p-5 rounded-xl backdrop-blur-md border border-slate-700 shadow-2xl font-mono text-xs sm:text-sm leading-6 overflow-hidden relative">
                        <div className="whitespace-nowrap">
                            <span className="text-tertiary font-bold">public class</span>{" "}
                            <span className="text-secondary font-bold">Developer</span>{" "}
                            <span className="text-white">{`{`}</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">DevType</span>{" "}
                            <span className="text-white">type</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-secondary font-bold">DevType</span>
                            <span className="text-white">.FULL_STACK</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">String</span>{" "}
                            <span className="text-white">surname</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-green-400">"Julien"</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">String</span>{" "}
                            <span className="text-white">lastname</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-green-400">"Renaud"</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">int</span>{" "}
                            <span className="text-white">age</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-orange-400">{new Date().getFullYear().valueOf() - 2002}</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">int</span>{" "}
                            <span className="text-white">favNumber</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-orange-400">7</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-tertiary font-bold">private</span>{" "}
                            <span className="text-secondary font-bold">Color</span>{" "}
                            <span className="text-white">favColor</span>{" "}
                            <span className="text-white">=</span>{" "}
                            <span className="text-secondary font-bold">Color</span>
                            <span className="text-white">.BLUE</span>
                            <span className="text-white">;</span>
                        </div>

                        <div className="pl-4 mt-2 whitespace-nowrap">
                            <span className="text-tertiary font-bold">public</span>{" "}
                            <span className="text-secondary font-bold">void</span>{" "}
                            <span className="text-blue-300">code</span>
                            <span className="text-white">() {`{`}</span>
                        </div>

                        <div className="pl-8 whitespace-nowrap">
                            <span className="text-tertiary font-bold">this</span>
                            <span className="text-white">.</span>
                            <span className="text-blue-300">code</span>
                            <span className="text-white">();</span>
                            <span className="text-gray-500 italic ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">// stack overflow !</span>
                        </div>

                        <div className="pl-4 whitespace-nowrap">
                            <span className="text-white">{`}`}</span>
                        </div>

                        <div className="whitespace-nowrap">
                            <span className="text-white">{`}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    );

}
export default TiltCard
