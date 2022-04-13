import React from 'react'
import "./Header.scss"
import {Email} from "@mui/icons-material"

export default function Header({menuOpen, setMenuOpen}) {
    let soe = (menuOpen && 'active');
    return (
        <div className={`header ${soe}`}>
            <div className="wrapper">
                <div className="left">
                    <a href="#hero" className="logo">
                        ZRK
                    </a>
                    <div className="itemContainer">
                        <Email className="icon"/>
                        <span>Zarakraza1@outlook.com</span>
                    </div>
                </div>
                <div className="right">
                   <div className="hamburger" onClick= {()=> setMenuOpen(!menuOpen)}>
                       <span className="line1">  </span>
                       <span className="line2">  </span>
                       <span className="line3">  </span>
                   </div>
                </div>
            </div>
        </div>
    )
}
