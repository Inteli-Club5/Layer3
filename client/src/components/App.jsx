import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Wallet from './Wallet';
import History from './History';
import Education from './Education';
import ReceiveETH from './ReceiveETH';
import ReceiveXion from './ReceiveXion';

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
                        <Route path="/history" element={<History/>}/>
                        <Route path="/receive-eth" element={<ReceiveETH/>}/>
                        <Route path="/receive-xion" element={<ReceiveXion/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;