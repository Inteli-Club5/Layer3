import React, { useEffect, useRef } from "react";
import logo from '../src/components/imgs/layer3.png';
import { Link } from 'react-router-dom';
import xion from '../src/components/imgs/xion_token.png';
import eth from '../src/components/imgs/eth_token.png';
import button_two from '../src/components/imgs/Sent.png';

const Send = () => {
    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">From</p>
                <div class="left">
                    <p className="pequena2">xion1sjv8p79cwm08m8nm8e6yntuvjxj53hd7e4l6y3</p>
                    <img className="token" alt="xion" src={xion} />
                </div>
                <br />
                <p className="primeiro">To</p>
                <div class="left">
                    <input className="pequena4"></input>
                    <img className="token" alt="eth" src={eth} />
                </div>
                <br />
                <p className="primeiro">Value</p>
                <div class="left">
                    <input type="number" className="pequena4"></input>
                    <img className="token" alt="eth" src={xion} />
                    <p className="pequena2">ETH 0.00</p>
                </div>
                <br />
                <center>
                    <hr />
                    <br/>
                    <button>
                        <img src={button_two} alt="Share" />
                        Send
                    </button>
                </center>
                <div></div>
            </div>
            <br /><br />
        </div>
    );
};

export default Send;
