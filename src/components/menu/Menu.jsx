import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
  let swe = (menuOpen && 'active');
  return (
    <div className={`menu ${swe}`}>
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#hero"> Home </a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#portfolio"> Portfolio </a>
          </li>
          {/* <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact"> Contact </a>
          </li> */}
      </ul>
    </div>
  )
}
