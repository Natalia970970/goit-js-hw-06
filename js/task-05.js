// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector("input#name-input");
const spanName = document.querySelector("span#name-output");
input.addEventListener('input', (event) => {
    let name = event.currentTarget.value;
    if (name.trim() === '') {
        name = 'Anonymous';
    }
    spanName.textContent = name;
})