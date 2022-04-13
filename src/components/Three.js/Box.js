import React from 'react';
import {useLoader} from "@react-three/fiber"
import {TextureLoader} from "three/src/loaders/TextureLoader"
import texture from "/Users/a1219-013/Desktop/portfolio-app/src/images/alien.jpg"

export default function Box(){
    const colorMap = useLoader(TextureLoader, texture)
    return (
    <mesh rotation={[90, 0, 20]}> 
        <boxBufferGeometry  attach="geometry" args={[2,2,2]} />
        {/* <meshStandardMaterial map={colorMap} /> */}
        <meshNormalMaterial attach="material" />
    </mesh>
    )
}