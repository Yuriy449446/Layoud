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

/// Обертання бургер меню.
document.querySelector('.icon-menu').addEventListener('click', function() {
    this.classList.add('rotate');

    // Удаление класса после завершения анимации, чтобы анимация могла повторяться
    setTimeout(() => {
        this.classList.remove('rotate');
    }, 500); // Время должно совпадать с длительностью transition в CSS
});



// Step-1  step-2


const buttonOne = document.getElementById("step-1-button");
const formOne = document.getElementById("some-form");
const stepGreen = document.querySelectorAll(".list-group-item");
const sendForm = document.getElementById("send-form");
const ok = document.querySelector(".step--ok");
const formTwo = document.querySelector(".step--step-2");
const sendFormOk = document.getElementById("some-form-2");
const previous = document.getElementById("previous-form");

// Добавляем обработчик события на клик Nex Step
buttonOne.addEventListener("click", function() {
    formOne.classList.add("hidden");
    formTwo.classList.remove("hidden");

    stepGreen.forEach(function(item) {
        if (item.classList.contains("activ")) {
            item.classList.remove("activ");
        } else {
            item.classList.add("activ");
        }
    });
});

// Добавляем обработчик события на клик Previous Step
previous.addEventListener("click", function() {
    formOne.classList.remove("hidden");
    formTwo.classList.add("hidden");

    stepGreen.forEach(function(item) {
        if (item.classList.contains("activ")) {
            item.classList.remove("activ");
        } else {
            item.classList.add("activ");
        }
    });
});

// Добавляем обработчик события на клик Send
sendForm.addEventListener("click", function(event) {
    event.preventDefault();  // Предотвращаем мгновенное обновление страницы
    
    ok.classList.remove("hidden");
    formTwo.classList.add("hidden");

    // Добавляем задержку в 3 секунды перед обновлением страницы
    setTimeout(function() {
		sendFormOk.submit();  // Отправляем форму
    }, 3000);
});

// Замена кнопки APP STORE
document.addEventListener('DOMContentLoaded', function() {
    function updateImage() {
        var image = document.getElementById('app-320');
        if (window.innerWidth <= 425.98) {
            console.log('Screen width is less than or equal to 425.98px, switching to app-320.svg');
            image.src = 'img/footer-info/app-320.svg';
        } else {
            console.log('Screen width is greater than 425.98px, switching to app.svg');
            image.src = 'img/footer-info/app.svg';
        }
    }

    // Обновляем изображение при загрузке страницы
    updateImage();

    // Обновляем изображение при изменении размера окна
    window.addEventListener('resize', updateImage);
});
