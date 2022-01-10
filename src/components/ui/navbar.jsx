import React from 'react';
import { Link, NavLink, useNavigate, Navigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: por hacer
        navigate('/login', {
            replace: true
        });
    }

    if (!localStorage.getItem('username')){
        return <Navigate to="login"/>
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse ms-3">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 
                            "nav-item nav-link " + ( isActive ? 'active' : '' ) 
                        } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 
                            "nav-item nav-link " + ( isActive ? 'active' : '' ) 
                        }
                        to="/dc"
                        
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 
                            "nav-item nav-link " + ( isActive ? 'active' : '' ) 
                        }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-end me-3">
                <ul className="navbar-nav ms-auto">

                    <span className="nav-item nav-link text-info">
                        {
                            localStorage.getItem('username') || ''
                        }
                    </span>

                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}