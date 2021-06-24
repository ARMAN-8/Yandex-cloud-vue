/*| Get Started |*/

'use strict';

// grab everything we need

const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
