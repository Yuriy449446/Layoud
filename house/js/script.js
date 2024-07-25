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
		slidesPerView: 5,
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-prev',
			prevEl: '.swiper-button-next',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
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
				slidesPerView: 3,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20
				
			},
			
			1350: {
				slidesPerView: 4,
				spaceBetween: 20
			},
			
			1440: {
				slidesPerView: 5,
				spaceBetween: 20
			}
		}
	});
}


//========================================================================================================================================================
   // Малювання будинку із затримкою.

	window.addEventListener('load', function() {
		setTimeout(function() {
			 let counter = 1;
			 const interval = setInterval(function() {
				  let element = document.getElementById('house-' + (counter < 10 ? '0' + counter : counter));
				  if (element) {
						element.classList.remove('hidden');
				  }
				  if (counter === 10) {
						clearInterval(interval);
						setTimeout(addLightClassToTab1Elements, 1000); // Виклик функції із затримкою 2 секунди
				  }
				  counter++;
			 }, 1000);
		}, 1000);
  });

  function addLightClassToTab1Elements() {
		const elements = document.querySelectorAll('[data-tab="tab-1"]');
		elements.forEach(element => {
			 element.classList.add('light');
		});
  }



  //Друкування тексту із затримкою.

const text = "Your dreams will come true!";
const title = document.querySelector('.body-container__title');

function printWithDelay(text, index) {
    if (index < text.length) {
        const letter = text[index];
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.3}s`;
        title.appendChild(span);
        setTimeout(() => printWithDelay(text, index + 1), 465);
    }
}

printWithDelay(text, 0);
