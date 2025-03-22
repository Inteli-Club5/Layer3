import React, { useState } from 'react'; 
import logo from './imgs/layer3.png';
import { Link, useNavigate } from 'react-router-dom';

const Wallet = () => {
    return (
        <div className="wallet">
            <div className="logozinha">
                <Link to="/">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <center>
                <div className="menu">
                    <p>Home</p>
                    <p>History</p>
                    <p>Education</p>
                </div>
            </center>
        </div>
    );
};

export default Wallet;
