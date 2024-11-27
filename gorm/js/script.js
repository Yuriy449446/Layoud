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
		spaceBetween: 73,
		slidesPerView: 1,
		// Navigation arrows
		
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		 },
		// Responsive breakpoints
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5
			},
			400: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			600: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			1000: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 1,
				spaceBetween: 20
				
			},
			
			1350: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			
			1440: {
				slidesPerView: 1,
				spaceBetween: 20
			}
		}
	});
}

