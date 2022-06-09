import axios from 'axios';
import React, { Component } from 'react'
import './style.css';
class Profile extends Component {
    state = { 
        profile : []
    } 
    
    componentDidMount(){
        axios.get("js/data.json").then(res => this.setState({profile : res.data.profile[0]}))
    }
    render() { 
        let {profile} = this.state;
        // console.log(profile);
        let{name , birthday , adress, phone,email ,bootstrap ,photoshop , css} = profile;
        return (
            <div className="profile">
                <div className="container">
                    <div className="profileSection">
                        <div className="profileInfo">
                            <h1 className='mr20'>My Profile</h1>
                            <p className='mr8'>name : {name}</p>
                            <p className='mr8'>birthday : {birthday}</p>
                            <p className='mr8'>adress :{adress}</p>
                            <p className='mr8'>phone : {phone}</p>
                            <p className='mr8'>email : {email}</p>
                        </div>
                        <div className="profileDegree">
                            <h1 className='mr20'>Some Skills</h1>
                            <p className='mr20'>Lorem ipsum dolor, sit amet Lorem ipsum dolor, Lorem ipsum dolor, consectetur adipisicing elit.</p>
                            <h3>bootstrap : {bootstrap}</h3>
                            <h3>Css : {css}</h3>
                            <h3> photoshop : {photoshop}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Profile;