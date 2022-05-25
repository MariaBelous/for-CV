"use strict";

//oppen dialog

(function (){
    function openDialog() {
        const dialogBtn = document.querySelector('.dialog-btn')
        const dialog = document.querySelector('.dialog')
        const dialogWrapper = dialog.querySelector('.dialog__wrapper')

        dialogBtn.addEventListener('click', () => {
            dialogWrapper.classList.toggle('active');

            console.log('active')
        })
        
    }
})

// before loading we nedd to clearing the data of dilog 

// Метод HTMLFormElement.reset() восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.

//document.getElementById('myform').reset();

// load page content .fetch

// get page content and parse to dom (node) new DOMParser

// past to block .replaceChild

//const dialogWrapper = document.querySelector('.dialog__wrapper')