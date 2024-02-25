// Строгий режим

"use strict"

const icons = document.querySelectorAll('.icon-menu');

icons.forEach(icon => {
    icon.addEventListener('click', function () {
        document.documentElement.classList.toggle('open');
    });
});




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
});



 document.addEventListener('DOMContentLoaded', function () {
	const tabHeaders = document.querySelector('.popup3_clouse');
	const tabMain = document.querySelector('.popup3');
	const tabConsult = document.querySelector('.sub-heder__link');

	tabConsult.addEventListener('click', function () {
		 tabMain.classList.remove('hidden');
		 document.documentElement.classList.toggle('popup');
	});
   tabHeaders.addEventListener('click', function () {
		tabMain.classList.add('hidden');
		document.documentElement.classList.toggle('popup');
  });

});


const orderImg = document.querySelector('.popup3_order');
const order = document.querySelector(".popup3_btn_right");
order.addEventListener('click', function () {
	orderImg.classList.toggle('hidden');
	
	
});




  // Прокрутка сайна нагору
  // Get the scroll-top-container element
  var scrollContainer = document.querySelector('.scroll-top-container');

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