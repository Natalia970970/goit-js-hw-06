// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const lable = document.querySelector("span.color");
const body = document.querySelector("body");
button.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  lable.textContent = color;
});

