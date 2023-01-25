import React from 'react'
import {NavLink} from "react-router-dom"
import "./index.scss"
import { CgPhone } from 'react-icons/cg';
const Header = () => {
  return (
    <div className='header'>
        <div className='h1tag'><h1>COURSES</h1></div>
        <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About Us</NavLink></li>
                <li><NavLink to={"/courses"}>Courses</NavLink></li>
                <li><NavLink to={"/elements"}>Elements</NavLink></li>
                <li><NavLink to={"/news"}>News</NavLink></li>
                <li><NavLink to={"/contsact"}>Contact</NavLink></li>
            </ul>
        </nav>
        <div className='headericon'><p className='iconPhone'><CgPhone/></p><p>+43 4566 7788 2457</p></div>
    </div>
  )
}

export default Header