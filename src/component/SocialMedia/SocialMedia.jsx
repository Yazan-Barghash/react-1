import axios from 'axios';
import React, { Component } from 'react'
import './style.css'
class SocialMedia extends Component {
    state = { 
        social : []
     } 

    componentDidMount(){
        axios.get("js/data.json").then(res => this.setState({social : res.data.social}))
    }

    render() {
        let {social} = this.state;
        let socialItem = social.map((item) =>{
            return(
                <div className='socialItem' key={item.id}>
                    <div className="social-icon">
                        <i className={item.icon}></i>
                    </div>
                    <div className="social-desc">
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                </div>
            )
        })
        return (
            <div className='social'> 
                {socialItem}
            </div>
        );
    }
}
 
export default SocialMedia;