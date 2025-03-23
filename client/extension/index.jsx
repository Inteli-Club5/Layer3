import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import Wallet from './Wallet';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const domainAuth0 = import.meta.env.VITE_AUTH0_DOMAIN;
const clientIdAuth0 = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audienceAuth0 = import.meta.env.VITE_AUTH0_AUDIENCE;

document.addEventListener('DOMContentLoaded', () => {
    // Force dimensions for Chrome extension popup
    document.body.style.width = '450px';
    document.body.style.height = '400px';
    document.documentElement.style.width = '450px';
    document.documentElement.style.height = '400px';
    
    // Make sure the root container constrains overflow properly
    const root = document.getElementById('root');
    if (root) {
      root.style.width = '450px';
      root.style.height = '400px';
      root.style.overflowY = 'auto';
      root.style.overflowX = 'hidden';
    }
  });

root.render(
    <Auth0Provider
        domain={domainAuth0}
        clientId={clientIdAuth0}
        audience={audienceAuth0}
        authorizationParams={{
            redirect_uri: window.location.origin,
            scope: "openid profile email"
        }}
    >
        <Router>
            <Wallet />
        </Router>
    </Auth0Provider>
);