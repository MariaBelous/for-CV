"use strict";

/*
(function() {
  const hamburgerMenuOpen = document.querySelector('.clicked');
  const body = document.querySelector('.body');

  hamburgerMenuOpen.addEventListener('mouseenter', () => {
    body.classList.toggle('none-scroll');
    console.log('none-scroll')
  })
}) ();

*/

(function(){
  const hamburgerMenu = document.querySelector("#hamburger-menu") 
  const hamburgerMenuBtn = hamburgerMenu.querySelector('.menu-btn') 
  const body = document.querySelector('body')

  hamburgerMenuBtn.addEventListener('click', () => {  
    body.classList.toggle('none-scroll');  
    console.log('none-scroll')
  })
})();


/*
Вопросы

1. Функция в скобке, чтобы не присваивать имя функции?
2. 2-я const из-за DOM элементов? 2-я дочерняя 1-й?
3. () - в самом конце?
4. Почему Toggle? Add - добавляет класс с заменой?
*/