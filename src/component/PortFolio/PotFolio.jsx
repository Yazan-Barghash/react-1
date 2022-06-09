import axios from 'axios';
import React, { Component } from 'react'
import './style.css'
class PortFolio extends Component {
    state = { 
        portofolio : []
    }
    
    componentDidMount(){
        axios.get("js/data.json").then(res => this.setState({portofolio : res.data.portofolio}))
        
    }
    render() { 
        console.log(this.state.portofolio);
        let {portofolio} = this.state;
        let portofolioImage = portofolio.map((portfolioItem) => {
            return(
                <div className='image-portofolio-gallery' key={portfolioItem.id}>
                    <img src={portfolioItem.image} alt="" />
                    <div className='opacity-item'>
                        <button className='img-btn'>read more</button>
                    </div>
                </div>
            )
        })

        return (
            <div>
                <div className='portofolio-title'>
                    <h2>my portofolio</h2>
                </div>
                <div className='portofolio-gallery'>
                    {portofolioImage}
                    
                </div>
            </div>
        );
    }
}
 
export default PortFolio;