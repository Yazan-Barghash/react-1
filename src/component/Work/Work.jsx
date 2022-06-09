import axios from 'axios';
import React, { Component } from 'react'
import './style.css'
class work extends Component {
    state = { 
        works : []
    }

    componentDidMount(){
        axios.get("js/data.json").then(res => (this.setState({ works : res.data.works})))
        

    }


    render() { 
        let {works} = this.state;
        let listItems = works.map((workItem)=>{
            return(
                <div key={workItem.id} className='workItem'>
                    <i className= {workItem.icon_name}></i>
                    <h4 className='itemTitle'> {workItem.title} </h4>
                    <p>{workItem.body}</p>
                </div>
            )
        })
        return (
            <div id='work' className='work'>
                <div className="container">
                    <div className="worktTitle">
                        <h2>work section</h2>
                    </div>
                    <div className="worksContainer">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default work;