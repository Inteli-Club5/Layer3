import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { isLoading, loginWithRedirect, isAuthenticated, user, logout, error } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
                    <h2>Welcome!</h2>
                    {!isAuthenticated ? (
                        <>
                            <p className="cor">Login with your account!</p>
                            <button
                                className="login-button"
                                onClick={handleLogin}
                            >
                                Login
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
