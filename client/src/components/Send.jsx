import React, { useEffect, useRef } from "react";
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';

const Send = () => {
    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/wallet">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="carteira">
            </div>
            <br/><br/>
        </div>
    );
};

export default Send;
