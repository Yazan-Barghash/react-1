// import axios from 'axios';
import React, { Component } from 'react';
import About from './../About/About'

import Profile from './../Profile/Profile'
import Work from './../Work/Work'
import SocialMedia from './../SocialMedia/SocialMedia'
import Footer from './../Footer/Footer'

import PortFolio from './../PortFolio/PotFolio';
import Home from './../Home/Home';

class Page extends Component {

    state ={


    }




    
    render() { 
        return(
            <div>
                
                < Home />
                < Work />
                < PortFolio />
                < Profile />
                < About />
                < SocialMedia />
                < Footer />
                
            </div>
        )
    }
}

export default Page;