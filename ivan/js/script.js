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




/*Фільтр розміру піци*/
// Получаем все радиокнопки размеров
const sizeInputsFilter = document.querySelectorAll('.input-size__input');
const sizzePizza = document.querySelectorAll('.img-pup-ap');
// Для каждой радиокнопки добавляем обработчик события клика
sizeInputsFilter.forEach(input => {
    input.addEventListener('click', function() {
        // Убираем класс 'checked' у всех меток
        const labels = document.querySelectorAll('.input-size__label');
        labels.forEach(label => {
            label.classList.remove('checked');
        });

        // Получаем метку, соответствующую выбранной радиокнопке
        const selectedLabel = document.querySelector(`label[for="${input.id}"]`);
        // Добавляем класс 'checked' к выбранной метке
        selectedLabel.classList.add('checked');
    });
});

// Функція для зміни ширини зображення після кліку на певному елементі
function changeImageWidth(event) {
    const img = document.getElementById('pizzaImage');
    const width = event.target.dataset.width;
    if (img) {
        img.setAttribute('width', width);
    }
}

// Получаем всі радіокнопки розмірів
const sizeInputs = document.querySelectorAll('[data-testid^="menu__pizza_size_"]');

// Додаємо обробник подій для кожної радіокнопки розмірів
sizeInputs.forEach(input => {
    input.addEventListener('click', changeImageWidth);
});

// Функція для зміни базового інгредієнту
function changeBaseIngredient(event) {
    const isEnabled = event.target.dataset.disabled === "false";
    if (isEnabled) {
        const radioInputs = document.querySelectorAll('[data-testid^="base_ingredient_"]');
        radioInputs.forEach(input => {
            input.disabled = false;
        });
        event.target.disabled = true;
    }
}




// Получаем всі радіокнопки базового інгредієнту
const baseIngredientInputs = document.querySelectorAll('[data-testid^="base_ingredient_"]');

// Додаємо обробник подій для кожної радіокнопки базового інгредієнту
baseIngredientInputs.forEach(input => {
    input.addEventListener('click', changeBaseIngredient);
});

// Получаем все радиокнопки размеров пиццы
const sizeInputsForPizza = document.querySelectorAll('[data-testid^="menu__pizza_size_"]');

// Добавляем обработчик клика для каждой радиокнопки
sizeInputsForPizza.forEach(input => {
    input.addEventListener('click', function() {
        // Удаляем все классы связанные с размерами пиццы у элемента с классом 'pup-ap-pizza__img'
        const pizzaImg = document.querySelector('.pup-ap-pizza__img');
        pizzaImg.classList.remove('small', 'middle', 'big');

        // Получаем значение data-testid текущей радиокнопки
        const size = input.getAttribute('data-testid');

        // Добавляем соответствующий класс в зависимости от выбранного размера пиццы
        if (size === 'menu__pizza_size_small') {
            pizzaImg.classList.add('small');
        } else if (size === 'menu__pizza_size_middle') {
            pizzaImg.classList.add('middle');
        } else if (size === 'menu__pizza_size_big') {
            pizzaImg.classList.add('big');
        }
    });
});




/*Фільтр товщіни тіста піци*/
// Получаем все метки выбора типа теста
const doughLabels = document.querySelectorAll('.input-dough__label');

// Добавляем обработчик клика для каждой метки
doughLabels.forEach(label => {
    label.addEventListener('click', function() {
        // Удаляем класс 'dough' у всех меток
        doughLabels.forEach(doughLabel => {
            doughLabel.classList.remove('dough');
        });

        // Добавляем класс 'dough' к выбранной метке
        label.classList.add('dough');
    });
});




// товщіна тіста, НЕ ПРАЦЮЄ
const tabContainer = document.querySelector('.pup-ap-pizza__info');

// Добавляем обработчик клика на родительский элемент
tabContainer.addEventListener('click', function(event) {
    // Проверяем, что клик произошел на элементе с атрибутом data-tab
    if (event.target.dataset.tab) {
        const tabId = event.target.dataset.tab; // Получаем значение атрибута data-tab текущего заголовка таба

        // Получаем все контентные блоки
        const contentBoxes = document.querySelectorAll('[data-tab-content]');

        // Скрываем все контентные блоки перед показом нужного блока
        contentBoxes.forEach(function (contentBox) {
            contentBox.classList.add('hidden');
        });

        // Отображаем только соответствующий выбранному табу контентный блок
        const selectedContentBox = document.querySelector('[data-tab-content="' + tabId + '"]');
        if (selectedContentBox) { // Проверяем наличие контентного блока
            selectedContentBox.classList.remove('hidden');
        }
    }
});



/*Додаємо чекед до вибору інгрідієнтів і червоний бордер*/
// Отримуємо всі кнопки з класом "add-pizza__item"
const pizzaItems = document.querySelectorAll('.add-pizza__item');

// Додаємо обробник події кліку для кожної кнопки
pizzaItems.forEach(item => {
    item.addEventListener('click', function() {
        // Перевіряємо, чи у кнопки є клас "activ"
        const isActive = item.classList.contains('activ');
        
        // Якщо у кнопки є клас "activ", видаляємо його, в іншому випадку - додаємо
        if (isActive) {
            item.classList.remove('activ');
        } else {
            item.classList.add('activ');
        }
    });
});




//Баварія

  // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
  function showElement(elementId) {
	var element = document.getElementById(elementId);
	var pizzaElements = document.getElementsByClassName('pizza');
	if (element) {
	  element.classList.remove('hidden');
	  for(var i = 0; i < pizzaElements.length; i++) {
		 pizzaElements[i].classList.add('open');
	  }
	}
 }

 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
 function hideElement(elementId) {
	var element = document.getElementById(elementId);
	var pizzaElements = document.getElementsByClassName('pizza');
	if (element) {
	  element.classList.add('hidden');
	  for(var i = 0; i < pizzaElements.length; i++) {
		 pizzaElements[i].classList.remove('open');
	  }
	}
 }

 // Обробник події по кліку на елемент з id="chorizo-01"
 document.getElementById('bavaria-01').addEventListener('click', function() {
	showElement('bavaria');
 });

 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
 closeButtons.forEach(function(button) {
	button.addEventListener('click', function() {
	  hideElement('bavaria');
	});
 });





  //Чоризо фреш



    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('chorizo-01').addEventListener('click', function() {
		showElement('chorizo');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('chorizo');
		});
	 });


	 //Карбонара

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('karbonara-01').addEventListener('click', function() {
		showElement('karbonara');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('karbonara');
		});
	 });

	  //Папероні фреш

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('paperoni-01').addEventListener('click', function() {
		showElement('paperoni');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('paperoni');
		});
	 });

	  //Шитка та огірки

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('vetchina-01').addEventListener('click', function() {
		showElement('vetchina');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('vetchina');
		});
	 });

	  //Шитка та сир

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('vetcina-sir-01').addEventListener('click', function() {
		showElement('vetcina-sir');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('vetcina-sir');
		});
	 });

	  //Bay! Кебаб

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('kebab-01').addEventListener('click', function() {
		showElement('kebab');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('kebab');
		});
	 });

	   //Чотирі сезони

    // Функція для відображення елементу та додавання класу "open" до елементів з класом "pizza"
	 function showElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.remove('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.add('open');
		  }
		}
	 }
  
	 // Функція для приховування елементу та видалення класу "open" з елементів з класом "pizza"
	 function hideElement(elementId) {
		var element = document.getElementById(elementId);
		var pizzaElements = document.getElementsByClassName('pizza');
		if (element) {
		  element.classList.add('hidden');
		  for(var i = 0; i < pizzaElements.length; i++) {
			 pizzaElements[i].classList.remove('open');
		  }
		}
	 }
  
	 // Обробник події по кліку на елемент з id="chorizo-01"
	 document.getElementById('sezon-01').addEventListener('click', function() {
		showElement('sezon');
	 });
  
	 // Обробник події по кліку на елементи з класом "pup-ap-pizza_clouse"
	 var closeButtons = document.querySelectorAll('.pup-ap-pizza_clouse');
	 closeButtons.forEach(function(button) {
		button.addEventListener('click', function() {
		  hideElement('sezon');
		});
	 });