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
const slider = document.querySelector('.accessoris__slide');
if (slider) {
	new Swiper('.accessoris__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		spaceBetween: 10,
		slidesPerView: 1,
		// Navigation arrows
		navigation: {
			nextEl: '.accessoris__arrow--right',
			prevEl: '.accessoris__arrow--left',
		},

		// Responsive breakpoints
		breakpoints: {
			320: {
				slidesPerView: 1.5,
				spaceBetween: 5
			},
			400: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			600: {
				slidesPerView: 3,
				spaceBetween: 10
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			
			1350: {
				slidesPerView: 5,
				spaceBetween: 20
			},
			
			1440: {
				slidesPerView: 7,
				spaceBetween: 20
			}
		}
	});
}