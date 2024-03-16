// Строгий режим

"use strict"

const icons = document.querySelectorAll('.icon-menu');

icons.forEach(icon => {
    icon.addEventListener('click', function () {
        document.documentElement.classList.toggle('open');
    });
});


/*
const swiper = new Swiper('.swiper', {
	// Optional parameters
	spaceBetween: 20,
	
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		480: {
			
			spaceBetween: 15
		},
		
	}
	
 });

 const newSlider = document.querySelector('.new');
if (newSlider) {
	new Swiper('.new__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		speed: 800,
		spaceBetween: 5,
		slidesPerView: 1,
		// Navigation arrows
		navigation: {
			nextEl: '.new__arrow--right',
			prevEl: '.new__arrow--left',
		},

		// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			300: {
				slidesPerView: 1.5,
				spaceBetween: 15
			},
			420: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			620: {
				slidesPerView: 3,
				spaceBetween: 15
			},
			// when window width is >= 480px
			820: {
				slidesPerView: 4,
				spaceBetween: 15
			},
			// when window width is >= 640px
			950: {
				slidesPerView: 5,
				spaceBetween: 35
			},
			1400: {
				slidesPerView: 2,
				spaceBetween: 5
			},
		}
	});
}
 



*/
const mainSlider = new Swiper('.swiper', {
	spaceBetween: 20,
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	breakpoints: {
	  480: {
		 spaceBetween: 15,
	  },
	},
 });
 
 const newSliderContainer = document.querySelector('.new');
 if (newSliderContainer) {
	const newSlider = new Swiper('.new__slider', {
		spaceBetween: 20,
		loop: true,
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
	  navigation: {
		 nextEl: '.new__arrow--right',
		 prevEl: '.new__arrow--left',
	  },
	  breakpoints: {
		 300: {
			slidesPerView: 1.5,
			spaceBetween: 15,
		 },
		 420: {
			slidesPerView: 2,
			spaceBetween: 15,
		 },
		 620: {
			slidesPerView: 3,
			spaceBetween: 15,
		 },
		 820: {
			slidesPerView: 4,
			spaceBetween: 15,
		 },
		 950: {
			slidesPerView: 5,
			spaceBetween: 35,
		 },
		 1400: {
			slidesPerView: 2.5,
			spaceBetween: 15,
		 },
	  },
	});
 }
 



 /*
  document.addEventListener('DOMContentLoaded', function() {
	// Получаем ссылку на объект
	var myObject = document.getElementById('myObject');

	// Функция для проверки видимости объекта во вьюпорте
	function isElementInViewport(el) {
	  var rect = el.getBoundingClientRect();
	  return (
		 rect.top >= 0 &&
		 rect.left >= 0 &&
		 rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		 rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}

	// Функция для добавления/удаления класса при видимости/невидимости объекта
	function handleScroll() {
	  if (isElementInViewport(myObject)) {
		 myObject.classList.add('show');
	  } else {
		 myObject.classList.remove('show');
	  }
	}

	// Добавляем обработчик события scroll
	window.addEventListener('scroll', handleScroll);

	// Вызываем handleScroll сразу после загрузки страницы для проверки видимости
	handleScroll();
 });


 */ 
 
 document.addEventListener('DOMContentLoaded', function() {
	// Получаем ссылку на объект
	var myObject = document.getElementById('myObject');

	// Проверяем, существует ли объект в DOM
	if (myObject) {
		 // Функция для проверки видимости объекта во вьюпорте
		 function isElementInViewport(el) {
			  var rect = el.getBoundingClientRect();
			  return (
					rect.top >= 0 &&
					rect.left >= 0 &&
					rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
					rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			  );
		 }

		 // Функция для добавления/удаления класса при видимости/невидимости объекта
		 function handleVisibility() {
			  if (isElementInViewport(myObject)) {
					myObject.classList.add('show');
			  } else {
					myObject.classList.remove('show');
			  }
		 }

		 // Добавляем обработчик события scroll
		 window.addEventListener('scroll', handleVisibility);

		 // Вызываем handleVisibility сразу после загрузки страницы для проверки видимости
		 handleVisibility();

		 // Добавляем обработчик события resize для обновления видимости при изменении размеров окна
		 window.addEventListener('resize', handleVisibility);
	}
});



document.addEventListener('DOMContentLoaded', function () {
    const tabHeaders = document.querySelector('.popup3_clouse');
    const tabMain = document.querySelector('.popup3');
    const tabConsult = document.querySelector('.sub-heder__link');
    const orderImg = document.querySelector('.popup3_order');
    const order = document.querySelector(".popup3_btn_right");

    tabConsult.addEventListener('click', function () {
        tabMain.classList.remove('hidden');
        document.documentElement.classList.toggle('popup');
        // Перевірка і приховання orderImg
        if (tabMain.classList.contains('hidden')) {
            orderImg.classList.add('hidden');
        }
    });

    tabHeaders.addEventListener('click', function () {
        tabMain.classList.add('hidden');
        document.documentElement.classList.toggle('popup');
        // Приховання orderImg
        orderImg.classList.add('hidden');
    });

    order.addEventListener('click', function () {
        orderImg.classList.toggle('hidden');
    });
});
 
/*
function confirmOrder() {
	// Виводимо повідомлення "Підтвердити замовлення"
	var confirmation = confirm("Підтвердити замовлення?");
	
	// Перевіряємо результат від користувача
	if (confirmation) {
	  alert("Замовлення підтверджено!");
	} else {
	  alert("Замовлення скасовано.");
	}
 }
 
*/
  /// Виклик форми
  const tauchOpen = document.querySelectorAll('.info__item--arrow');
  const tauchOpenSub = document.getElementById('touchButton');
  const tabOrderFast = document.querySelectorAll('.item__link');
  const tabFormFast = document.querySelector('.page__check');
  const tabFormClouse = document.querySelector('.check-out_clouse');
  tabOrderFast.forEach(icon => {
	icon.addEventListener('click', function () {
		tabFormFast.classList.remove('hidden');
		 document.documentElement.classList.toggle('popup');
		 
	});
});
tabFormClouse.addEventListener('click', function () {
	tabFormFast.classList.add('hidden');
	document.documentElement.classList.toggle('popup');
	
});



	
tauchOpen.forEach(icon => {
	icon.addEventListener('click', function () {
		 // Проверяем, есть ли у tauchOpenSub класс open
		 tauchOpenSub.classList.toggle('hidden');
	});
});







   // Прокрутка сайна нагору
   // Function to initialize scroll-to-top functionality
function initializeScrollToTop() {
	var scrollContainer = document.querySelector('.scroll-top-container');
	
	if (scrollContainer) {
		 // Show/hide the scroll-top-container based on scroll position
		 window.addEventListener('scroll', function () {
			  if (window.scrollY > 500) {
					scrollContainer.style.display = 'block';
			  } else {
					scrollContainer.style.display = 'none';
			  }
		 });

		 // Add click event listener to scroll to the top
		 scrollContainer.addEventListener('click', function () {
			  window.scrollTo({
					top: 0,
					behavior: 'smooth'  // Add smooth scrolling effect
			  });
		 });
	}
}

// Call the function to initialize scroll-to-top functionality when DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeScrollToTop);







  /* перевірка відправлення форми*/ 
   
  
  document.getElementById('form-check-phone').addEventListener('input', function () {
	var phoneValue = this.value;

	// Remove non-digit characters
	var cleanedValue = phoneValue.replace(/\D/g, '');

	// Update the input value with cleaned value
	this.value = cleanedValue;

	// Clear previous error message
	document.getElementById('phoneError').innerText = '';

	// Check if there are non-digit characters in the cleaned value
	if (/[^0-9]/.test(cleanedValue)) {
		 document.getElementById('phoneError').innerText = 'Введіть лише цифри у поле "Телефон".';
	}
});

