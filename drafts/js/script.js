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
function updateLogo() {
	const logo = document.getElementById('logo');
	const mobileLogo = 'img/header/logo-mobail.svg';
	const desktopLogo = 'img/header/logo.svg';

	if (window.innerWidth <= 650.98) {
	  logo.src = mobileLogo;
	} else {
	  logo.src = desktopLogo;
	}
 }

 // Initial check
 updateLogo();

 // Update on resize
 window.addEventListener('resize', updateLogo);

//========================================================================================================================================================
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
		 scrollContainer.addEventListener('click', function (event) {
			  event.preventDefault(); // Prevent default anchor click behavior
			  window.scrollTo({
					top: 0,
					behavior: 'smooth'  // Add smooth scrolling effect
			  });
		 });
	}
}

// Call the function to initialize
initializeScrollToTop();


//========================================================================================================================================================

// Додавання класа activ при натисканні 
document.querySelectorAll('.objects__smoll-ellips').forEach(item => {
	item.addEventListener('click', function() {
		 // Удаляем класс 'activ' у всех элементов
		 document.querySelectorAll('.objects__smoll-ellips').forEach(el => {
			  el.classList.remove('activ');
		 });

		 // Добавляем класс 'activ' к элементу, на который кликнули
		 this.classList.add('activ');
	});
});

//========================================================================================================================================================
// Додавання класа activ при натисканні 
document.querySelectorAll('.objects__label').forEach(item => {
	item.addEventListener('click', function() {
		 // Удаляем класс 'activ' у всех элементов
		 document.querySelectorAll('.objects__label').forEach(el => {
			  el.classList.remove('activ');
		 });

		 // Добавляем класс 'activ' к элементу, на который кликнули
		 this.classList.add('activ');
	});
});
//========================================================================================================================================================
// Універсальна функція для перевірки розміру екрану та заміни картинок
function replaceImageBasedOnScreenSize(selector, newSrc, isIdSelector, isLargeScreen) {
	// Вибір селектора: якщо isIdSelector true, використовуємо querySelector з ідентифікатором, інакше - клас.
	const element = isIdSelector ? document.querySelector(`#${selector}`) : document.querySelector(`.${selector}`);
	
	// Перевірка розміру екрана і заміна зображення
	if (isLargeScreen && window.innerWidth > 1375.98) {
	  if (element) {
		 element.src = newSrc;
	  }
	} else if (!isLargeScreen && window.innerWidth <= 1375.98) {
	  if (element) {
		 element.src = newSrc;
	  }
	}
 }
 
 // Функція для визначення зображення за data-index
 function getImageSrcByIndex(index) {
	switch(index) {
	  case "1":
		 return 'img/objekt/01.svg';
	  case "2":
		 return 'img/objekt/02.png';
	  case "3":
		 return 'img/objekt/03.svg';
	  case "4":
		 return 'img/objekt/04.jpg';
	  default:
		 return '';
	}
 }
 
 // Делегування події кліку на document для всіх елементів з data-index
 document.addEventListener('click', function(event) {
	const target = event.target;
	const dataIndex = target.getAttribute('data-index');
	
	if (dataIndex) {
	  const newSrc = getImageSrcByIndex(dataIndex);
	  
	  if (newSrc) {
		 // Тут ви можете використати перевірку розміру екрану, якщо це потрібно
		 replaceImageBasedOnScreenSize('objects__foto', newSrc, true, window.innerWidth > 1375.98);
	  }
	}
 });
 
//========================================================================================================================================================
/*
// Універсальна функція для перевірки розміру екрану та заміни картинок
function replaceImageBasedOnScreenSize(selector, newSrc, isIdSelector, isLargeScreen) {
	// Вибір селектора: якщо isIdSelector true, використовуємо querySelector з ідентифікатором, інакше - клас.
	const element = isIdSelector ? document.querySelector(`#${selector}`) : document.querySelector(`.${selector}`);
	
	// Перевірка розміру екрана і заміна зображення
	if (isLargeScreen && window.innerWidth > 1375.98) {
		 if (element) {
			  element.src = newSrc;
		 }
	} else if (!isLargeScreen && window.innerWidth <= 1375.98) {
		 if (element) {
			  element.src = newSrc;
		 }
	}
}

// Додавання обробників подій для кожного елемента з класами
document.querySelector('.ellips-one').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/01.svg', true, true);
});

document.querySelector('.ellips-two').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/02.png', true, true);
});

document.querySelector('.ellips-three').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/03.svg', true, true);
});

document.querySelector('.ellips-four').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/04.jpg', true, true);
});

// Додавання обробників подій для кожного елемента з атрибутами data-index
document.querySelector('[data-index="1"]').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/01.svg', true, false);
});

document.querySelector('[data-index="2"]').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/02.png', true, false);
});

document.querySelector('[data-index="3"]').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/03.svg', true, false);
});

document.querySelector('[data-index="4"]').addEventListener('click', function() {
	replaceImageBasedOnScreenSize('objects__foto', 'img/objekt/04.jpg', true, false);
});

*/

//========================================================================================================================================================
// Функція для обробки кліків
function handleClick(itemsSelector, labelsSelector) {
	document.querySelectorAll(itemsSelector).forEach(item => {
	  item.addEventListener('click', function() {
		 // Удаляем класс 'activ' у всех элементов
		 document.querySelectorAll(itemsSelector).forEach(el => {
			el.classList.remove('activ');
		 });
		 document.querySelectorAll(labelsSelector).forEach(el => {
			el.classList.remove('activ');
		 });
 
		 // Добавляем класс 'activ' к элементу, на который кликнули
		 this.classList.add('activ');
 
		 // Ищем соответствующий элемент и добавляем ему класс 'activ'
		 const index = this.getAttribute('data-index');
		 const correspondingLabel = document.querySelector(`${labelsSelector}[data-index="${index}"]`);
		 if (correspondingLabel) {
			correspondingLabel.classList.add('activ');
		 }
	  });
	});
 }
 
 // Функція для перевірки ширини екрану та виклику відповідної функції
 function checkScreenWidth() {
	if (window.matchMedia("(max-width: 1375.98px)").matches) {
	  handleClick('.mobail-object__ellips', '.mobail-object__label');
	} else {
	  handleClick('.objects__smoll-ellips', '.objects__label');
	}
 }
 
 // Перевіряємо ширину екрану при завантаженні сторінки
 checkScreenWidth();
 
 // Перевіряємо ширину екрану при зміні розміру вікна
 window.addEventListener('resize', checkScreenWidth);
 

//========================================================================================================================================================

// Робота аккордіону при натисканні на плюс
const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', function() {
        // Добавляем или убираем класс hidden у блока с контентом
        const content = this.parentElement.nextElementSibling;
        content.classList.toggle('hidden');

        // Добавляем или убираем класс color у родительского блока с классом questions__box-plus
        this.parentElement.classList.toggle('color');
    });
});


