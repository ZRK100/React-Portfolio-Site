import React, {Suspense} from "react"
import Box from "./components/Three.js/Box"
import {OrbitControls} from "@react-three/drei"
import Hero from "./components/Hero/Hero"
import Header from "./components/Header/Header"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu"

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="App">
          <Header  
          menuOpen = {menuOpen}
          setMenuOpen = {setMenuOpen}
          />
          <Menu
          menuOpen = {menuOpen}
          setMenuOpen = {setMenuOpen}
          />
        <div className="sections">
            <Hero/>
            <Portfolio/>
        </div>

    </div>
  );
}

export default App;







  /* <Canvas className="canvas">
           <OrbitControls  enableZoom={false} />
           <ambientLight intensity={0.5}/>
           <directionalLight
            position={[-2, 5, 2]}
            intensity={1} />
          <Suspense fallback={null}>
          <Box />
          <Box />
          </Suspense>
  </Canvas> */