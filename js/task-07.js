// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("input#font-size-control");
const textSpanSize = document.querySelector("span#text");
input.value = 16;
input.addEventListener('input', (event) => {
    textSpanSize.style.fontSize = input.value + "px";
})