import './app.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import compose from './compose.js';
import loadMenu from './load-menu.js';

const menu = loadMenu();
const composition = compose({ configs: [{ menu }] });
const { config, modules } = composition;
window.app = composition;
window.document.title = config.app.name;

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<React.StrictMode><modules.components.App /></React.StrictMode>);
