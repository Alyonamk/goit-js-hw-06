// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElement = document.querySelector('#ingredients');
const itemElement = ingredients.map((ingredients) => {
  const item = document.createElement('li');
  item.textContent = ingredients;
  item.classList.add('item');
  return item;
});

ingredientsElement.append(...itemElement);

console.log(ingredients);

