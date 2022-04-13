import React from "react"
import {Sphere, MeshDistortMaterial} from "@react-three/drei"

export default function AnimatedSphere (){
    return (
        < Sphere visible args={[1, 50, 100]} scale={1.4}>
           < MeshDistortMaterial 
           color="cyan" 
            attach="material" 
            distort = {0.8}
            speed={5}
           />
        </Sphere>
      
    )
}