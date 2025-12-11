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

//========================================================================================================================================================
const slider = document.querySelector('.swiper');
if (slider) {
	new Swiper('.swiper', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		//spaceBetween: 10,
		slidesPerView: 1,
		// Navigation arrows
		navigation: {
			nextEl: '.accessoris__arrow--left',
			prevEl: '.accessoris__arrow--right',
		},

		// Responsive breakpoints
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5
			},
			425: {
				slidesPerView: 1,
				spaceBetween: 10
			},

			625: {
				slidesPerView: 1.5,
				spaceBetween: 10
			},
			
			
			1200: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			
			1350: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			
			1440: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});
}
 // відслідклвування пояаи обєкта на єкрані 
 document.addEventListener("DOMContentLoaded", function () {
	let observed = false; // Перевірка, чи вже було додано клас

	const target = document.getElementById("from-img"); // Отримуємо елемент
	if (!target) return; // Якщо елементу немає, припиняємо виконання

	const observer = new IntersectionObserver(
		 (entries, observer) => {
			  entries.forEach((entry) => {
					if (entry.intersectionRatio >= 0.5 && !observed) { 
						 target.classList.add("open"); // Додаємо клас
						 observed = true; // Позначаємо, що клас вже додано
						 observer.unobserve(target); // Відключаємо спостереження
					}
			  });
		 },
		 { threshold: 0.5 } // Відслідковуємо 50% видимості елемента
	);

	observer.observe(target); // Починаємо спостереження за елементом
});



const newSlider = document.querySelector('.trending');
if (newSlider) {
	
	new Swiper('.trending__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		spaceBetween: 80,
		slidesPerView: 3,
		// Navigation arrows
		navigation: {
			nextEl: '.trending__arrow--left',
			prevEl: '.trending__arrow--right',
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			450: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			550: {
				slidesPerView: 1.5,
				spaceBetween: 10
			},
			// when window width is >= 480px
			750: {
				slidesPerView: 2,
				spaceBetween: 25
			},
			// when window width is >= 640px
			1250: {
				slidesPerView: 3,
				spaceBetween: 30
			}
		}
	});
}


const swiper = new Swiper('.trending-categories', {
	loop: true,
	speed: 800,
slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 20,
	//mousewheel: true,


	spaceBetween: 20,
	slidesPerView: 4,
	pagination: {
	  el: '.swiper-pagination.swiper-pagination-categories',
	  clickable: true,
	},
	observer: true,
	observeParents: true,
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		450: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		550: {
			slidesPerView: 2,
			spaceBetween: 25
		},
		// when window width is >= 480px
		850: {
			slidesPerView: 3,
			spaceBetween: 25
		},
		// when window width is >= 640px
		1050: {
			slidesPerView: 3,
			spaceBetween: 30
		}
	}
	
 });
 


// відкриття pop-ap
// Відкрити попап
const buttons = document.querySelectorAll("[data-popup]");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const popupId = btn.dataset.popup;
        const popup = document.getElementById(popupId);

        popup.classList.remove("hidden");

        // Заборонити скрол сторінки
        document.body.classList.add("body-lock");
    });
});

// Закрити попап по кнопці
const closeButtons = document.querySelectorAll(".close-btn");

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const popup = btn.closest(".popup");
        popup.classList.add("hidden");

        // Повернути скрол
        document.body.classList.remove("body-lock");
    });
});

// Закриття при кліку поза popup-content
document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("click", (event) => {
        if (!event.target.closest(".popup-content")) {
            popup.classList.add("hidden");

            // Повернути скрол
            document.body.classList.remove("body-lock");
        }
    });
});


//Друкування тексту із затримкою.

const text = "Твій шлях до гармонії.";
const title = document.querySelector('.week-box__title');
let animationPlayed = false; // щоб виконалося ОДИН раз

function printWithDelay(text, index) {
    if (index === 0) {
        title.classList.add('you');
    }

    if (index < text.length) {
        const letter = text[index];
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.015}s`;
        title.appendChild(span);

        setTimeout(() => printWithDelay(text, index + 1), 232.5);
    }
}

// 📌 OBSERVER — запускати коли видно 25% висоти блока
const targetBlock = document.querySelector('.week-box');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25 && !animationPlayed) {

            animationPlayed = true;     // більше не запускати
            printWithDelay(text, 0);    // запуск анімації

            observer.disconnect();      // відключаємо спостереження
        }
    });
}, { threshold: 0.25 });

observer.observe(targetBlock);



//Заміна головної картинки

const img = document.querySelector('.main-foto__img');

function updateImage() {
  if (window.innerWidth < 1000) {
    img.src = "img/psihologia/main-foto/lotus-mob.jpeg";
  } else {
    img.src = "img/psihologia/main-foto/lotus.jpeg";
  }
}

// Виконуємо при завантаженні
updateImage();

// Виконуємо при зміні розміру екрану
window.addEventListener('resize', updateImage);
