// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnEl = document.querySelector(".change-color");
console.log(btnEl);
const colorName = document.querySelector(".color");
const bodyEl = document.body;
console.log(bodyEl);

btnEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();

});