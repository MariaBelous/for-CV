"use strict";

(function(){
  const hamburgerMenu = document.querySelector("#hamburger-menu")
  const hamburgerMenuBtn = hamburgerMenu.querySelector('.menu-btn')

  hamburgerMenuBtn.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('clicked');
    console.log('cliked')
  })
})();
