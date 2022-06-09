// import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import NavBar from './component/NavBar/NavBar'
import Contact from './component/Contact/Contact'
import Page from './component/Page/Page';
import './style.css';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {

    state ={


    }


   

    
    render() { 
        return(
            <div>
                <BrowserRouter>
                    < NavBar />
                    <Routes>
                        <Route path='/' element={< Page />}></Route>
                        <Route path='/Contact' element={< Contact />}></Route>
                    </Routes>
                </BrowserRouter>
                
            </div>
        )
    }
}

export default App;