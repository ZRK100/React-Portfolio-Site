import React, {Suspense} from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import Sphere from "../Three.js/AnimatedSphere"
import "./Hero.scss"
import {init} from 'ityped'
import {useEffect, useRef} from "react"

export default function Hero(){
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: ["Javascript", "React", "Python", "Three.js",  "NFTs", "CRUD APPS"]
        }
            )
    }, [])
    return (
    <section className="hero" id="hero">
    <div className="first-div">
        <div className="wrapper">
        <h1>Skilled in </h1>
        <h2> <span ref={textRef}> </span></h2>
        </div>
     
    </div>
    <Canvas className="canvas">
    <OrbitControls  enableZoom={false} />
    <ambientLight intensity={0.5}/>
    <directionalLight
     position={[-2, 5, 2]}
     intensity={1} />
   <Suspense fallback={null}>
   <Sphere />
   </Suspense>
 </Canvas> 
</section>
    )
}