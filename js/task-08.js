
// Напиши скрипт управління формою логіна.

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');

const onFormSubmin = (event) => {
	event.preventDefault();

	const email = event.currentTarget.elements.email;
	const password = event.currentTarget.elements.password;

	if (email.value === '' || password.value === '') {
		alert('Користувач, всі поля мають бути заповнені!');
	} else {
		event.email = email.value;
		event.password = password.value;
	}
	console.log({email: email.value,
		password: password.value });
	event.currentTarget.reset();
};
form.addEventListener('submit', onFormSubmin);