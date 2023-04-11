import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import './styles.css'
import Main from './main';

function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/main" element={<Main/>}/>
                </Routes>
            </Router>
        </div>
    );
}
export default App;