import React, { useState } from 'react';
import logo from './imgs/layer3.png';
import { Link, useNavigate } from 'react-router-dom';
import xion from './imgs/xion_token.png';
import eth from './imgs/eth_token.png';
import first from './imgs/first.png';
import second from './imgs/second.png';
import button_one from './imgs/BorrowBook.png';
import button_two from './imgs/Sent.png';
import button_three from './imgs/Testnet.png';
import learn from './imgs/learn.png';

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
            <div className="menu">
                <Link class="linkin" to="/wallet">
                    <p class="ativado">Home</p>
                </Link>
                <Link class="linkinzin" to="/history">
                    <p>History</p>
                </Link>
                <Link class="linkinzin" to="/education">
                    <p>Education</p>
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p class="primeiro">Personal Account</p>
                <br />
                <p class="segundo">$ 0.00</p>
                <br />
                <div class="botoes">
                    <button>
                        <img src={button_one} alt="Receive" />
                        Receive
                    </button>
                    <button class="lado">
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
                <div class="carteira2">
                    <div class="first">
                        <img class="token" alt="xion" src={xion} />
                        <p>XION</p>
                    </div>
                    <div class="second">
                        <p class="gigante">$ 0.00</p>
                        <p class="informacao">Current price</p>
                    </div>
                    <div class="second">
                        <p class="gigante">$ 0.00</p>
                        <p class="informacao">0.0000 XION</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="carteira">
                <p class="primeiro">Personal Account</p>
                <br />
                <p class="segundo">$ 0.00</p>
                <br />
                <div class="botoes">
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
                <div class="carteira22">
                    <div class="first">
                        <img class="tokenzin" alt="first" src={first} />
                        <img class="token" alt="eth" src={eth} />
                        <p>ETH</p>
                        <img class="token2" alt="second" src={second} />
                    </div>
                    <div class="second">
                        <p class="gigante">$ 0.00</p>
                        <p class="informacao">Current price</p>
                    </div>
                    <div class="second">
                        <p class="gigante">$ 0.00</p>
                        <p class="informacao">0.0000 ETH</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="carteira">
                <p>History Preview</p>
                <hr />
                <div class="ladinho">
                    <p class="pequeno">0x45fb83493a5c96be...</p>
                    <p class="pequeno">0.3 XION</p>
                    <p class="pequeno">20/2025</p>
                </div>
                <div class="ladinho">
                    <p class="pequeno">0x45fb83493a5c96be...</p>
                    <p class="pequeno">0.3 XION</p>
                    <p class="pequeno">20/2025</p>
                </div>
                <div class="ladinho">
                    <p class="pequeno">0x45fb83493a5c96be...</p>
                    <p class="pequeno">0.3 XION</p>
                    <p class="pequeno">20/2025</p>
                </div>
                <div />
                <br />
                <br />
                <br />
                <center>
                    <Link class="linkin" to="/history">
                        <button>History</button>
                    </Link>
                </center>
            </div>
            <br/>
            <div>
                <Link class="linkin" to="/education">
                    <img class="tam" alt="learn" src={learn} />
                </Link>
            </div>
            <br/>
        </div>
    );
};

export default Wallet;
