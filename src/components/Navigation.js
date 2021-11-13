import React from 'react'
import {
    Link,
} from "react-router-dom";
export default function Home() {
    return (

        <>
            < div className="collapse dud" id="navbarToggleExternalContent" >
                <div className="bg-dark p-4">
                    <h2><Link to='/' className="text-white h4">Home</Link></h2>
                    <h2><Link to='/contact' className="text-white h4">Contact</Link></h2>
                    <h2><Link to='/blog' className="text-white h4">Blog</Link></h2>
                    <h2><Link to='/projects' className="text-white h4">Projects</Link></h2>
                </div>
            </div >
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}
