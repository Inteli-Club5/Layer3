import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import logo from './imgs/layer3.png';
import phrase from './imgs/phrase.png';
import button from './imgs/button.png';

const Home = () => {
    return (
            <div class="home">
                <center>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div class="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <br/>
                    <br/>
                    <div class="frase">
                        <img src={phrase} alt="phrase"/>
                    </div>
                    <br/>
                    <br/>
                    <div class="button">
                        <Link to="/login">
                            <img src={button} alt="button"/>
                        </Link>
                    </div>
                </center>
            </div>
    );
};

export default Home;