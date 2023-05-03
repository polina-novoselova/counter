
let button = document.querySelector('.btn_plus-one');
let reset = document.querySelector('.btn_reset');
let counterText = document.querySelector('.counter');
let counter = 0;

button.addEventListener('click', function () {
    counter = counter + 1;
    console.log('counter');

    counterText.innerText = counter;
});

reset.addEventListener('click', function () {
    counter = 0;
    console.log('counter');

    counterText.innerText = counter;
});

