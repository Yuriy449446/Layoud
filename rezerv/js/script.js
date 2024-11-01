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

//document.addEventListener('DOMContentLoaded', function() {
	//var wrappers = document.querySelectorAll('.items-create__wrapper'); // Отримуємо всі елементи з класом "items-create__wrapper"
	//var delay = 500; // Затримка у 0.5 секунди
	//wrappers.forEach(function(wrapper, index) {
	//	 setTimeout(function() {
	//		  wrapper.classList.add('show'); // Додаємо клас "show" з затримкою
	//	 }, delay * (index + 1)); // Затримка для кожного елемента
	//});
//});




// Строка що рухаїться
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

/*
// Повноекраній режим
document.addEventListener("DOMContentLoaded", function () {
	function requestFullScreen() {
	  const element = document.documentElement;
	  if (element.requestFullscreen) {
		 element.requestFullscreen().catch(err => {
			console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
		 });
	  } else if (element.webkitRequestFullscreen) { // Для Safari
		 element.webkitRequestFullscreen();
	  } else if (element.msRequestFullscreen) { // Для IE/Edge
		 element.msRequestFullscreen();
	  }
	}
 
	// Запит повноекранного режиму на подію кліку
	document.addEventListener('click', function() {
	  requestFullScreen();
	});
 });
 
*/ 

function requestFullScreen() {
   const element = document.documentElement;
   if (element.requestFullscreen || element.webkitRequestFullscreen || element.msRequestFullscreen) {
      if (element.requestFullscreen) {
         element.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
         });
      } else if (element.webkitRequestFullscreen) { 
         element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { 
         element.msRequestFullscreen();
      }
   } else {
      console.warn("Fullscreen mode is not supported on this device.");
   }
}
