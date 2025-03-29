import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import { Auth0Provider } from '@auth0/auth0-react';
import Wallet from './Wallet';
import ReceiveETH from './ReceiveETH';
import ReceiveXion from './ReceiveXion';
import Send from './Send';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const domainAuth0 = import.meta.env.VITE_AUTH0_DOMAIN;
const clientIdAuth0 = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audienceAuth0 = import.meta.env.VITE_AUTH0_AUDIENCE;

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.width = '450px';
    document.body.style.height = '400px';
    document.documentElement.style.width = '450px';
    document.documentElement.style.height = '400px';

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
            <Routes>
                <Route path="/" element={<Wallet />} />
                <Route path="/receive-eth" element={<ReceiveETH />} />
                <Route path="/receive-xion" element={<ReceiveXion />} />
                <Route path="/send" element={<Send />} />
            </Routes>
        </Router>
    </Auth0Provider>
);