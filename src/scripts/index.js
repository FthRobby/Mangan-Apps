import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/components/button.css';

import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    disable: false,
    offset: 100,
    delay: 0,
    once: false,
    duration: 1000
});

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
