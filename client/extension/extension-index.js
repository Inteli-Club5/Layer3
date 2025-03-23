import React from 'react';
import { createRoot } from 'react-dom/client';
import Wallet from '../src/components/Wallet';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<Wallet />);
