import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './imgs/layer3.png';
import phrase from './imgs/phrase.png';
import button from './imgs/button.png';

const Home = () => {
    const { isLoading, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/wallet');
        }
    }, [isAuthenticated, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="home">
            <center>
                <br />
                <br />
                <br />
                <br />
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <br />
                <br />
                <div className="frase">
                    <img src={phrase} alt="phrase" />
                </div>
                <br />
                <br />
                <div className="button">
                    <Link to="/login">
                        <img src={button} alt="button" />
                    </Link>
                </div>
            </center>
        </div>
    );
};

export default Home;