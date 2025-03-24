import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Wallet from './Wallet';
import Education from './Education';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/wallet" element={<Wallet/>}/>
                        <Route path="/education" element={<Education/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;