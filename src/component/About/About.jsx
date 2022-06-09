import React, { Component } from 'react'
import './style.css'
class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className='about'>
                <div className="opacity-black">
                    <div className="container">
                    <div className="about-section">
                            <div className="about-desc">
                            <h1>this is change</h1>
                            <h2>creative programmer</h2>
                            <p className='about-desc-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vel neque expedita, ab ratione eligendi omnis sapiente quo exercitationem nemo quidem minima eius deleniti doloremque nisi blanditiis est magnam ex.
                            </p>
                            <p className='about-desc-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas vel neque expedita, ab ratione eligendi omnis sapiente quo exercitationem nemo quidem minima eius deleniti doloremque nisi blanditiis est magnam ex.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;