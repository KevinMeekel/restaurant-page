import { initializeHome } from './home-content';
import { populateHome } from './home-content';
import { populateMenu } from './menu-content';
import { populateAbout } from './about-content';

import './style.css';

initializeHome();
// populateMenu();
// populateAbout();

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        console.log('Button clicked:', button);
        if (button.id === 'home') {
            populateHome();
        } else if (button.id === 'menu') {
            populateMenu();
        } else if (button.id === 'about') {
            populateAbout();        }
    });
});

console.log('site is running');