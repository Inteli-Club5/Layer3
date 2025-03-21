import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button'

const Login = () => {
    return (
        <div className="login">
            <br/>
            <br/>
            <br/>
            <center>
                <div className="login-form">
                    <h2>Bem vindo!</h2>
                    <p class="cor">Faça o login ou entre com seu email</p>
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="password" placeholder="Senha" className="input-field" />
                    <Link className="no-style-link" to="/wallet">
                    <button className="login-button">Entrar</button>
                    </Link>
                    <br/>
                    <p class="cor">ou</p>
                    <GoogleButton/>
                </div>
            </center>
        </div>
    );
};

export default Login;
