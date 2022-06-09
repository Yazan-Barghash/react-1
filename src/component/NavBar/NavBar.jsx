import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navbar'> 
                    <div className='container'>
                        <div className="dis-flex">
                            <div className='logo'>
                                <h2 className='logo-text'>my site</h2>
                            </div>

                            <ul className='ul-list'>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/#work">work</NavLink>
                                <NavLink to="/#portofolio">portofolio</NavLink>
                                <NavLink to="/#profile">profile</NavLink>
                                <NavLink to="/#about">about</NavLink>
                                <NavLink to="/#social-media">social-media</NavLink>
                                <NavLink to="Contact">Contact</NavLink>
                            </ul>
                        </div>  
                    </div>
                
            </div>
        );
    }
}
 
export default NavBar;