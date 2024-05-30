// Строгий режим
"use strict"

document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;
     
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
	if (targetElement.closest('[data-spoller]')) {
		const currentElement = targetElement.closest('[data-spoller]');
		if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
			currentElement.classList.toggle('active');
		}
		slideToggle(currentElement.nextElementSibling);
	}
}



// Показуємо блоки из затримкою  в 0,5s

document.addEventListener('DOMContentLoaded', function() {
	var wrappers = document.querySelectorAll('.items-create__wrapper'); // Отримуємо всі елементи з класом "items-create__wrapper"
	var delay = 500; // Затримка у 0.5 секунди
	wrappers.forEach(function(wrapper, index) {
		 setTimeout(function() {
			  wrapper.classList.add('show'); // Додаємо клас "show" з затримкою
		 }, delay * (index + 1)); // Затримка для кожного елемента
	});
});




//Друкування тексту із затримкою.

const text = "Welcome to";
const title = document.querySelector('.body__title');

function printWithDelay(text, index) {
    if (index < text.length) {
        const letter = text[index];
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.3}s`;
        title.appendChild(span);
        setTimeout(() => printWithDelay(text, index + 1), 100);
    }
}

printWithDelay(text, 0);

document.addEventListener('DOMContentLoaded', function() {
	new Marquee('.info-footer__list', {
		 duration: 15000,
		 gap: 50,
		 delayBeforeStart: 0,
		 direction: 'left',
		 duplicated: true
	});
});