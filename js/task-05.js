// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.querySelector("#name-input");
const addedNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() == "") {
    addedNameEl.textContent = "Anonymous";
  } else {
    addedNameEl.textContent = event.currentTarget.value.trim();
  }
}