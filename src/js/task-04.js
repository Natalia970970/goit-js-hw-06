// Створи змінну counterValue, в якій буде зберігатися поточне значення 
// лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


let counterValue = 0;
const decButton = document.querySelector('button[data-action="decrement"]');
const incButton = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("span#value");
decButton.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});
incButton.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});

