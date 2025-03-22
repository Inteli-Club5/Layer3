import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Auth0Provider
        domain="dev-2jrx2l6q8vketrf2.us.auth0.com"
        clientId="j9BsiRfiNJCOOzDSEpjmB7921rAggwH2"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <Router>
            <App />
        </Router>
    </Auth0Provider>
);