import React from 'react';
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';

const History = () => {
    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="menu">
                <Link className="linkinzin" to="/wallet">
                    <p>Home</p>
                </Link>
                <Link className="linkin" to="/history">
                    <p className="ativado">History</p>
                </Link>
                <Link className="linkinzin" to="/education">
                    <p>Education</p>
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p>Transaction History</p>
                <hr />
                <div className="ladinho">
                    <p className="pequeno">0x45fb83493a5c96be...</p>
                    <p className="pequeno">0.3 XION</p>
                    <p className="pequeno">20/2025</p>
                </div>
                <div className="ladinho">
                    <p className="pequeno">0x45fb83493a5c96be...</p>
                    <p className="pequeno">0.3 XION</p>
                    <p className="pequeno">20/2025</p>
                </div>
                <div className="ladinho">
                    <p className="pequeno">0x45fb83493a5c96be...</p>
                    <p className="pequeno">0.3 XION</p>
                    <p className="pequeno">20/2025</p>
                </div>
                <div className="ladinho">
                    <p className="pequeno">0x45fb83493a5c96be...</p>
                    <p className="pequeno">0.3 XION</p>
                    <p className="pequeno">20/2025</p>
                </div>
                <div className="ladinho">
                    <p className="pequeno">0x45fb83493a5c96be...</p>
                    <p className="pequeno">0.3 XION</p>
                    <p className="pequeno">20/2025</p>
                </div>
                <div className="ladinho">
                </div>
                <br />
                <br />
                <br />
                <center>
                    <button>Show More</button>
                </center>
            </div>
            <br/>
            <br/>
        </div>
    )
};

export default History;