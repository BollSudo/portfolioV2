import React, {Suspense, useEffect, useMemo, useRef} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import * as THREE from "three";
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import CanvasLoader from "./CanvasLoader.jsx";
import {Leva} from "leva";
import CosmosCamera from "./CosmosCamera.jsx";




const Stars = () => {
    const meshRef = useRef();
    const materialRef = useRef();
    const posArray = useMemo(() => {
        const PARTICLE_COUNT = 5000;
        const arr = new Float32Array(PARTICLE_COUNT * 3);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = (Math.random() - 0.5) * 100;
        }
        return arr;
    }, []);

    const positionAttribute = useMemo(() => new THREE.BufferAttribute(posArray, 3), [posArray]);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            // const hue = (t * 10) % 360
            // materialRef.current.color.setHSL(hue / 360, 1, 0.6)
            materialRef.current.size = 0.05 + Math.sin(t * 4) * 0.01
            meshRef.current.rotation.y = t * 0.01;
        }
    });

    useEffect(() => {
        return () => {
            // Clean up the geometry when the component unmounts
            if (meshRef.current) {
                meshRef.current.geometry.dispose();
            }
        };
    }, []);
    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" {...positionAttribute} />
            </bufferGeometry>
                <pointsMaterial ref={materialRef} size={0.05} color="#ffcf49" sizeAttenuation={true} />
        </points>
    )
}

const RotatingSphere = React.memo(() => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001;
        }
    });

    useEffect(() => {
        return () => {
            // Clean up the geometry and material when the component unmounts
            if (meshRef.current) {
                meshRef.current.geometry.dispose();
                meshRef.current.material.dispose();
            }
        };
    }, []);

    return (
        <points ref={meshRef} position={[0, -0.3, 0]} scale={1}>
            <sphereGeometry args={[1, 64, 64]}/>
            <pointsMaterial color="#468585" size={0.005} />
        </points>
    )
});


const Cosmos = () => {
    return (
        <div className="w-full h-full">
            <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 150]} />
                    {/*<ambientLight intensity={0.5} />*/}
                    {/*<directionalLight position={[0, 0, 5]} intensity={0.5} />*/}
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
