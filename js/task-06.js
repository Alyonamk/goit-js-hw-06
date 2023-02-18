// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById("validation-input");

console.log(inputEl);
const inputLength = Number(inputEl.dataset.length);
inputEl.addEventListener("blur", onValidInput);

function onValidInput(event) {
  inputEl.classList.remove("invalid", "valid");
  if (event.currentTarget.value.trim().length === inputLength) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
  console.log(inputEl);
}
