import React from 'react'
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap'

export default function Home() {
    return (

        <>
            <div className="collapse dud" id="navbarToggleExternalContent" >
                <div className="bg-dark p-4">
                    <h2><Link to='/' className="text-white ms-3 ">Home</Link></h2>
                    {/* <h2><Link to='/blog' className="text-white ms-3 h4">Blog</Link></h2> */}
                    <h2><Link to='/projects' className="text-white ms-3 ">Projects</Link></h2>
                    <h2><Link to='/contact' className="text-white ms-3 ">Contact</Link></h2>
                    <h2>
                       <Link to='/blog'> <NavDropdown title="Blog" id="collasible-nav-dropdown">
                           <Link to='/Onboarding'> <NavDropdown.Item href="#action/3.1">Onboarding</NavDropdown.Item> </Link>
                           <Link to='/frontend'> <NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item> </Link>
                           <Link to='/backend'> <NavDropdown.Item href="#action/3.1">Backend</NavDropdown.Item> </Link>
                           <Link to='/react'> <NavDropdown.Item href="#action/3.1">React</NavDropdown.Item> </Link>
                
                        </NavDropdown> </Link>
                    </h2>
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
