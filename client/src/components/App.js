import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Wallet from './Wallet';

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/wallet" element={<Wallet/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;