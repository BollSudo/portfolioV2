import React, {useContext} from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import {AppContext} from "../context/AppContext.jsx";

const CosmosCamera = ({children}) => {
    const groupRef = React.useRef()
    const { isMobile } = useContext(AppContext)

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

        if (!isMobile) {
            easing.dampE(
                groupRef.current.rotation,
                [-state.pointer.y / 3, -state.pointer.x / 5, 0],
                0.25,
                delta
            )
        }
    })

    return (
        <group ref={groupRef}>{children}</group>
    )
}
export default CosmosCamera
