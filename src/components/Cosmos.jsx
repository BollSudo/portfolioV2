import React, {Suspense, useRef} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import * as THREE from "three";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import CanvasLoader from "./CanvasLoader.jsx";
import {Leva} from "leva";
import CosmosCamera from "./CosmosCamera.jsx";


let RotatingSphere = () => {
    // const controls = useControls("RotatingSphere", {
    //     positionX: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.1
    //     },
    //     positionY: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.1
    //     },
    //     positionZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //         step: 0.1
    //     },
    //     scale: {
    //         value: 3,
    //         min: 0,
    //         max: 10,
    //         step: 0.1
    //     }
    // })

    const meshRef = useRef();
    const materialRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001;
        }
    });
    return (
        <points ref={meshRef} position={[0, -0.3, 0]} scale={1}>
            <sphereGeometry args={[1, 64, 64]}/>
            <pointsMaterial ref={materialRef} color="#468585" size={0.005} />
        </points>
    )
}

const Stars = () => {
    const meshRef = useRef();
    const materialRef = useRef();
    const PARTICLE_COUNT = 5000;
    const posArray = new Float32Array(PARTICLE_COUNT * 3); // array of xyz for all particles

    for (let i = 0; i < posArray.length; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    const positionAttribute = new THREE.BufferAttribute(posArray, 3);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            // const hue = (t * 10) % 360
            // materialRef.current.color.setHSL(hue / 360, 1, 0.6)
            materialRef.current.size = 0.05 + Math.sin(t * 4) * 0.01
            meshRef.current.rotation.y = t * 0.01;
        }
    });
    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" {...positionAttribute} />
            </bufferGeometry>
                <pointsMaterial ref={materialRef} size={0.05} color="#ffcf49" sizeAttenuation={true} />
            {/*<EffectComposer>*/}
            {/*    <Bloom*/}
            {/*        intensity={1.5}*/}
            {/*        luminanceThreshold={0}*/}
            {/*        luminanceSmoothing={0.9}*/}
            {/*        height={300}*/}
            {/*    />*/}
            {/*</EffectComposer>*/}
        </points>
    )
}


const Cosmos = () => {
    return (
        <div className="w-full h-full">
            <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[0, 0, 5]} intensity={0.5} />

                    {/*<OrbitControls />*/}

                    <CosmosCamera>
                        <RotatingSphere />
                        <Stars />
                    </CosmosCamera>
                    {/*<Perf position="bottom-left" />*/}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Cosmos;
