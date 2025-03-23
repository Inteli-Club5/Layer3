import React, { useState } from 'react';
import logo from '../src/components/imgs/layer3.png';
import { Link, useNavigate } from 'react-router-dom';
import xion from '../src/components/imgs/xion_token.png';
import eth from '../src/components/imgs/eth_token.png';
import first from '../src/components/imgs/first.png';
import second from '../src/components/imgs/second.png';
import button_one from '../src/components/imgs/BorrowBook.png';
import button_two from '../src/components/imgs/Sent.png';
import button_three from '../src/components/imgs/Testnet.png';
import learn from '../src/components/imgs/learn.png';

const Wallet = () => {
    return (
        <div className="wallet">
            <br/>
            <div className="logozinha">
                <Link to="/">
                    <img alt="logo" src={logo} />
                </Link>
            </div>            
            <br />
            <div className="carteira">
                <p className="primeiro">Personal Account</p>
                <br />
                <p className="segundo">$ 0.00</p>
                <br />
                <div className="botoes">
                    <button>
                        <img src={button_one} alt="Receive" />
                        Receive
                    </button>
                    <button className="lado">
                        <img src={button_two} alt="Send" />
                        Send
                    </button>
                    <button>
                        <img src={button_three} alt="Interact" />
                        Interact
                    </button>
                </div>
                <br />
                <hr />
                <div className="carteira2">
                    <div className="first">
                        <img className="token" alt="xion" src={xion} />
                        <p>XION</p>
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">Current price</p>
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">0.0000 XION</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">Personal Account</p>
                <br />
                <p className="segundo">$ 0.00</p>
                <br />
                <div className="botoes">
                    <button>
                        <img src={button_one} alt="Receive" />
                        Receive
                    </button>
                    <button>
                        <img src={button_two} alt="Send" />
                        Send
                    </button>
                    <button>
                        <img src={button_three} alt="Interact" />
                        Interact
                    </button>
                </div>
                <br />
                <hr />
                <div className="carteira22">
                    <div className="first">
                        <img className="tokenzin" alt="first" src={first} />
                        <img className="token" alt="eth" src={eth} />
                        <p>ETH</p>
                        <img className="token2" alt="second" src={second} />
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">Current price</p>
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">0.0000 ETH</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="carteira">
                <p>History Preview</p>
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
                <div />
                <br />
                <br />
                <br />
                <center>
                    <Link className="linkin" to="/history">
                        <button>History</button>
                    </Link>
                </center>
            </div>
            <br/>
            <div>
                <Link className="linkin" to="/education">
                    <img className="tam" alt="learn" src={learn} />
                </Link>
            </div>
            <br/>
        </div>
    );
};

export default Wallet;
