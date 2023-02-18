// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementButton = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const incrementButton = document.querySelector('#counter button[data-action="increment"]');

let counterValue = 0;

decrementButton.addEventListener('click', () => {
    valueEl.textContent = counterValue -= 1;
});

incrementButton.addEventListener('click', () => {
    valueEl.textContent = counterValue += 1;
});