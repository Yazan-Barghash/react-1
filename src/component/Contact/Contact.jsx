import React, { Component } from 'react'
import './style.css'
import Footer from '../Footer/Footer';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div className=''>
                <div className="contact">
                    <form className='form-contact'>
                        <h1>contact me now</h1>
                        <div className="form-top">
                            <input type="text" placeholder='your name' />
                            <input type="text" placeholder='your email'/>
                        </div>
                        <div className="form-bottom">
                            <input type="text" placeholder='your subject' />
                        </div>
                        <div className="form-submit">
                            <textarea placeholder='your message'></textarea>
                            <input type="submit"  value="send message"/>
                        </div>
                    </form>
                    </div>
                    <Footer/>
            </div>
        );
    }
}
 
export default Contact;