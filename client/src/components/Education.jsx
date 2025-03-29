import React from 'react';
import logo from './imgs/logopreto.png';
import img1 from './imgs/card.png'; 
import img2 from './imgs/card2.png';
import img3 from './imgs/card3.png'; 
import img4 from './imgs/card4.png'; 
import img5 from './imgs/carteira.png';
import img6 from './imgs/hackathons.png'; 
import img7 from './imgs/ranking.png'; 
import { Link } from 'react-router-dom';

const Education = () => {
    return (
        <div className="education">
            <br />
            <div className="logozinha">
                <Link to="/wallet">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="menu">
                <Link className="linkinzin2" to="/wallet">
                    <p>Home</p>
                </Link>
                <Link className="linkinzin2" to="/history">
                    <p>History</p>
                </Link>
                <Link className="linkin2" to="/education">
                    <p className="ativado">Education</p>
                </Link>
            </div>
            <br />
            <div className="gallery">
                <div className="row">
                    <img className="square" src={img1} alt="Imagem 1" />
                    <a href="https://lp.nearx.com.br/imeersao-dev25k-bh">
                        <img className="rectangle" src={img2} alt="Imagem 2" />
                    </a>
                </div>
                <div className="row">
                    <a href="https://nearx.com.br/">
                        <img className="rectangle" src={img3} alt="Imagem 3" />
                    </a>
                    <img className="square" src={img4} alt="Imagem 4" />
                </div>
                <div className="row">
                    <Link to="/wallet">
                        <img className="square2" src={img5} alt="Imagem 5" />
                    </Link>
                    <a href="https://x.com/nearxschool">
                        <img className="square2" src={img6} alt="Imagem 6" />
                    </a>
                    <img className="square2" src={img7} alt="Imagem 7" />
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Education;