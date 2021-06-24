'use strict';

// grab everything we need

const btn = document.querySelector('button.mobile-menu-button-top');
const menu = document.querySelector('.mobile-menu-top');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

/*side nav*/
// side-nav
// grab everything we need
const btnSidenav = document.querySelector('#mobile-menu-button'),
    sidebar = document.querySelector('#sidebar'),
    sidebarCloseBtn = document.querySelector('#mobile-menu-close'),
    sideNav = document.querySelector('.side-nav');

// add our event listener for the click
if (btnSidenav) {
    btnSidenav.addEventListener('click', () => {
        sidebar.classList.toggle('-translate-x-full');
    });
}
if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', () => {
        sideNav.classList.toggle('-translate-x-full');
    });
}
