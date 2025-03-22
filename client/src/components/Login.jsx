import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect, isAuthenticated, user, logout, error } = useAuth0();

    const handleLogin = async () => {
        try {
            await loginWithRedirect();
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="login">
            <br />
            <br />
            <br />
            <center>
                <div className="login-form">
                    <h2>Bem vindo!</h2>
                    {!isAuthenticated ? (
                        <>
                            <p className="cor">Faça o login com sua conta</p>
                            <button
                                className="login-button"
                                onClick={handleLogin}
                            >
                                Entrar com Auth0
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="cor">Bem-vindo, {user.name}!</p>
                            <button
                                className="login-button"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Sair
                            </button>
                        </>
                    )}
                </div>
            </center>
        </div>
    );
};

export default Login;
