import React from 'react'

export default function Home() {
    return (
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        // <div className="container-fluid"> 
        <>
            < div className="collapse" id="navbarToggleExternalContent" >
                <div className="bg-dark p-4">
                    <h3 className="text-white h4">About</h3>
                    <h3 className="text-white h4">Blog</h3>
                    <h3 className="text-white h4">Portfolio</h3>
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
        // </div>
        // </nav>



    )
}
