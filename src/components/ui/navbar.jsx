import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // TODO: por hacer
        navigate('/HeroesApp/', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand ms-3" 
                to="/"
            >
                Associations
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

            <div className="navbar-collapse w-100 order-3 dual-collapse2 d-flex justify-content-start">
                <ul className="navbar-nav">

                    <button 
                        className="nav-item nav-link btn ms-3" 
                        onClick={ handleLogout }
                        style={{'textAlign': 'left'}}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}