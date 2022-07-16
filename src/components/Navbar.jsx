import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/">
                    <img src="images/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/hydroponic">Hydroponic Farm</Link>
                <Link to="/services">Services</Link>
                <Link to="/costs">Costs</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
