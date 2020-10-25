import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (Props)=>{
    return(              
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <h1 className="navbar-brand">POS SYSTEM</h1>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav group-nav">
                                <li className="nav-item nav-link">{Props.name}</li>
                                    <li className="nav-item"><a href="#" className="nav-link">My Account</a></li>
                                    <li className="nav-item"><Link to="login"><a href="#" className="nav-link">logout</a></Link></li>
                                </ul> 
                            </div>
                                       
                        </nav>
                    </div>
    )
}


export default Navbar