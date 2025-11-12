import React, {Suspense, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {aboutMe} from "../constants/index.js";
import Avatar from "../components/Avatar.jsx";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import TechStack from "../components/TechStack.jsx";
import TitleSection from "../components/TitleSection.jsx";

const Me = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section id="about" className="c-space my-20">
            <div className="w-full text-white-600">
                <TitleSection title="Me" subTitle="A propos de moi" />
                <div className="me-container flex flex-row">
                    <div className="me-canvas">
                        <Canvas>
                            <ambientLight intensity={1} />
                            <spotLight position={[20, 50, 10]} angle={0.12} penumbra={10} />
                            <directionalLight position={[-20, 50, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Avatar position={[0, -3, 0]} scale={3} animationName={animationName}  setAnimationName={setAnimationName} />
                            </Suspense>
                        </Canvas>
                    </div>
                    <div className="me-content flex-1 flex-col justify-center items-center">
                        <div className="flex-1">
                            <p className="text-white-800 text-justify py-2 text-hack">&gt; whoami</p>
                            {aboutMe.description.map((paragraph, index) => (
                                <p key={index} className="text-white-800 text-justify pb-2">{paragraph}</p>
                            ))}
                        </div>
                        <p className="text-white-800 text-justify py-2 text-hack">&gt; Stack</p>
                        <div className="h-[20vh]">
                            <TechStack />
                        </div>

                    {/*    base on wakatime stats do a graph size proprtional thingy like lol*/}

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Me
