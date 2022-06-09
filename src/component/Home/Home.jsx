import React, { Component } from 'react'
import './style.css'


class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className='home'>
                {/* <div className="container"> */}
                        <div className="dis-flex-center">
                            <div className="home-information">
                                <h2 className="home-title">watch story</h2>
                                <h4 className="home-info">watch director</h4>
                                <p className="home-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime qui excepturi doloremque </p>
                                <button className="home-btn">let's begin</button>
                            </div>
                        </div>
                {/* </div> */}

            </div>
        );
    }
}

export default Home;