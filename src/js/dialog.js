"use strict";

//Скобки - Показать диалог функция как аргумент, скобки вконце запускают функцию
// (function () {......})

// Создать диалог

(function (){
    function CreateDialog(link, main) {
        const content = link.getAttribute('data-content') //возвращает data атрибут (Data-атрибуты для служебной информации межджу HTML and DOM для скриптов)
        
        link.addEventListener('click', () => { //Добавить событие клик + new function (стрелочная function expression)
            main.classList.toggle('active'); //Метод remove / add class each click
            main.innerHTML = content //устанавливает или получает разметку и содержимое элемента

            console.log('active')
        })
    }

    const dialogMain = document.querySelector('.dialog') // блок диалога
    const dialog = document.querySelector('.dialog-link') // ссылка

    /*
    dialog.forEach((dialogLink) => {
        CreateDialog(dialogLink, dialogMain)        
    });  

    */
    
})



(function() {    

    const dialogBtn = document.querySelector('.dialog-btn')

    const dialog = document.querySelector('.dialog')
    const dialogOverlap = dialog.querySelector('.dialog__overlap')
    const dialogWrapper = dialogOverlap.querySelector('.dialog__wrapper')

    const dialogControl = dialog.querySelector('.dialog__control')
    const dialogClose = dialogControl.querySelector('.dialog__close')

    const onDialogShow = (event) => {
        event.preventDefault()

        dialogOverlap.classList.add('active');

        fetch('http://127.0.0.1:8080/pages/contacts.html').then((response) => {
            return response.text();
        }).then((html) => { //получить ресурс по адресу URL then - промис -  запустить функцию когда будет разрешено. 
            // data.text().then((content) => { // возвращает необработанный текст then определяет функция для получения и определяет что мы хотим сделать с полученными данными
            //     console.log(content)
            // })
            console.log(html)
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html')

            const target = doc.querySelector('.dialog-target')

            const dialogContent = dialog.querySelector('.dialog__content')

            dialogContent.appendChild(target)
        })

        // const form = document.querySelector('.dialog-target');
        // const url = 'http://127.0.0.1:8080/pages/contacts.html';

        // function createNode (element) {
        //     const nodeList = url.querySelector('.dialog-target')
        //     return document.createElement(element);
        // }

        // function append (parent, el) {
        //     return parent.appendChild(el);
        // }

        // const parser = new DOMParser();
        // doc = parser.parseFromString(StringContainingHTMLSourse, 'text/html')

    }

    const onDialogHide = () => {
        dialog.classList.remove('active');
        body.classList.remove('body_dialog');

        console.log('active')
        console.log('body_dialog')
    }

    dialogBtn.addEventListener('click', onDialogShow)
    dialogClose.addEventListener('click', onDialogHide)
    
})

/*
(function (){
    const body = document.querySelector('body')

    const dialogBtn = body.querySelector('.dialog-btn')
    const dialog = body.querySelector('.dialog')

    const dialogControl = dialog.querySelector('.dialog__control')
    const dialogClose = dialogControl.querySelector('.dialog__close')

    const onDialogShow = (event) => {
        event.preventDefault()

        dialog.classList.add('active');
        body.classList.add('body_dialog');

        fetch('http://127.0.0.1:8080/pages/contacts.html').then((data) => {
            data.text().then((content) => {
                console.log(content)
            })
        })

        // before loading we nedd to clearing the data of dilog 

        // Метод HTMLFormElement.reset() восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.

        //document.getElementById('myform').reset();

        // load page content .fetch

        // get page content and parse to dom (node) new DOMParser

        // past to block .replaceChild

        console.log('active')
    }

    const onDialogHide = () => {
        dialog.classList.remove('active');
        body.classList.remove('body_dialog');

        console.log('active')
        console.log('body_dialog')
    }


    dialogBtn.addEventListener('click', onDialogShow)
    dialogClose.addEventListener('click', onDialogHide)
})();

/*
*/



/*
(function (){
    function CreateDialog(link, main) {
        const content = link.getAttribute('data-content')

        link.addEventListener('click', () => {
            main.classList.toggle('active');
            main.innerHTML = content

            console.log('active')
        })
    }

    const dialogMain = document.querySelector('.dialog-main') // находит первый подходящий элемент
    const dialogs = document.querySelectorAll('.dialog-link') //находит все подходящие

    dialogs.forEach((dilogLink) => { // forEach - выполняет функцию для каждого элемента
        CreateDialog(dilogLink, dialogMain)
    })
})();


(function (){
    const body = document.querySelector('body')

    const dialogBtn = body.querySelector('.dialog-btn')
    const dialog = body.querySelector('.dialog')

    const dialogControl = dialog.querySelector('.dialog__control')
    const dialogClose = dialogControl.querySelector('.dialog__close')

    const onDialogShow = (event) => {
        event.preventDefault()

        dialog.classList.add('active');
        body.classList.add('body_dialog');

        fetch('http://127.0.0.1:8080/pages/contacts.html').then((data) => {
            data.text().then((content) => {
                console.log(content)
            })
        })

        // before loading we nedd to clearing the data of dilog

        // load page content .fetch

        // get page content and parse to dom (node) new DOMParser

        // past to block .replaceChild

        console.log('active')
    }

    const onDialogHide = () => {
        dialog.classList.remove('active');
        body.classList.remove('body_dialog');

        console.log('active')
        console.log('body_dialog')
    }


    dialogBtn.addEventListener('click', onDialogShow)
    dialogClose.addEventListener('click', onDialogHide)
})();

/*


(function(){

    const dialogControl = document.querySelector('.dialog__control')
    const dialogClose = dialogControl.querySelector('.dialog__close') 
    const dialog = document.querySelector('.dialog .active')
        

    dialogClose.addEventListener('click', () => {
        dialog.classList.toggle('.active');
        console.log('.dialog')        
        
    })  
})();






/* попытка ссделать модальное окно

(function(){
    const dialog = $modal('.dialog');
    const dialogBoxBtn = document.querySelector('.dialog-box-btn')
    const dialogBtn = dialogBoxBtn.querySelector('.dialog-btn')

    dialogBtn.addEventListener('click', () => {
        dialog.show();
    })    
})();
    

//блюр и нон скролл
/*
Чтобы запретить прокрутку страницы, достаточно установить document.body.style.overflow = "hidden".
Это выглядит немного странно, но это можно обойти, если сравнить clientWidth до и после остановки, и если clientWidth увеличится (значит полоса прокрутки исчезла), то добавить padding в document.body вместо полосы прокрутки, чтобы оставить ширину содержимого прежней.
*/





/*
Вопросы

1. Скрол убирается и меняется страница
2. Для каждого элемента свой файл со скриптом или связанные вместе
*/

/*

*/