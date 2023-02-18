// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text,
//     оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSize = document.querySelector("input#font-size-control");
const textContent = document.querySelector("span#text");

inputFontSize.addEventListener('input', e => {
    textContent.style.fontSize = `${e.target.value}px`
})