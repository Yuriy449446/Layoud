"use strict";

document.addEventListener("click", documentActions);

function documentActions(e) {
    const targetElement = e.target;

    // Обработка клика по бургер-меню
    if (targetElement.closest('.icon-menu')) {
        document.body.classList.toggle('menu-open');
    }
}

/// Обертание бургер-меню с анимацией
document.querySelector('.icon-menu').addEventListener('click', function() {
    this.classList.add('rotate');

    // Удаление класса после завершения анимации
    this.addEventListener('transitionend', function() {
        this.classList.remove('rotate');
    }, { once: true });  // { once: true } гарантирует, что событие сработает только один раз
});


//========================================================================================================================================================


new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoHeight: true,
    speed: 800,
    spaceBetween: 73,
    slidesPerView: 5,
    // Navigation arrows
    navigation: {
        nextEl: '.hero-prev',
        prevEl: '.hero-next',
    },
    pagination: {
        el: ".hero-pagination",
        clickable: true,
     },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
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
            spaceBetween: 10
        },
        1024: {
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

//========================================================================================================================================================
 
// Добавляем клас "film" по клику на пульс
document.querySelectorAll('.mobail-plus').forEach(function(mobailPlus) {
    // Добавляем обработчик клика на каждый элемент
    mobailPlus.addEventListener('click', function() {
        // Получаем родительский элемент с классом "menu__item mobail-item"
        let parentMenuItem = mobailPlus.closest('.menu__item.mobail-item');
        
        if (parentMenuItem) {
            // Проверяем, есть ли у родителя класс "film"
            if (parentMenuItem.classList.contains('film')) {
                // Если есть, удаляем класс
                parentMenuItem.classList.remove('film');
            } else {
                // Если нет, удаляем класс "film" у всех элементов
                document.querySelectorAll('.menu__item.mobail-item').forEach(function(item) {
                    item.classList.remove('film');
                });
                // Добавляем класс "film" к родителю
                parentMenuItem.classList.add('film');
            }
        }
    });
});


//========================================================================================================================================================
const newSlider = document.querySelector('.recommended');
if (newSlider) {
	const swiper = new Swiper('.recommended__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		direction: 'horizontal',
		autoplay: {
			delay: 1000, // задержка между прокрутками в миллисекундах
			disableOnInteraction: false, // продолжает прокрутку даже при взаимодействии
		},
		spaceBetween: 30,
		simulateTouch: true,
		slidesPerView: 6,
		// Responsive breakpoints
		breakpoints: {
            319: {
				slidesPerView: 1,
				spaceBetween: 5
			},
            450: {
				slidesPerView: 1.5,
				spaceBetween: 5
			},
            550: {
				slidesPerView: 2,
				spaceBetween: 5
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 5
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 5
			},
			1350: {
				slidesPerView: 5,
				spaceBetween: 25
			},
			1700: {
				slidesPerView: 6,
				spaceBetween: 30
			},
			1924: {
				slidesPerView: 6,
				spaceBetween: 30
			}
		}
	});

	// Остановка автопрокрутки при наведении курсора на слайдер
	newSlider.addEventListener('mouseenter', () => {
		swiper.autoplay.stop();
	});

	// Возобновление автопрокрутки при уходе курсора со слайдера
	newSlider.addEventListener('mouseleave', () => {
		swiper.autoplay.start();
	});
}


//========================================================================================================================================================


const newChanel = document.querySelector('.new-channel');
if (newChanel) {
	const swiper = new Swiper('.new-channel__slider', {
		// Optional parameters
		loop: true,
		autoHeight: true,
		direction: 'horizontal',
		autoplay: {
			delay: 2000, // задержка между прокрутками в миллисекундах
			disableOnInteraction: false, // продолжает прокрутку даже при взаимодействии
		},
		spaceBetween: 30,
		simulateTouch: true,
		slidesPerView: 6,
		// Responsive breakpoints
		breakpoints: {
            319: {
				slidesPerView: 1,
				spaceBetween: 5
			},
            450: {
				slidesPerView: 1.5,
				spaceBetween: 5
			},
            550: {
				slidesPerView: 2,
				spaceBetween: 5
			},
			850: {
				slidesPerView: 3,
				spaceBetween: 5
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 5
			},
			1350: {
				slidesPerView: 5,
				spaceBetween: 25
			},
			1700: {
				slidesPerView: 6,
				spaceBetween: 30
			},
			1924: {
				slidesPerView: 6,
				spaceBetween: 30
			}
		}
	});

	// Остановка автопрокрутки при наведении курсора на слайдер
	newSlider.addEventListener('mouseenter', () => {
		swiper.autoplay.stop();
	});

	// Возобновление автопрокрутки при уходе курсора со слайдера
	newSlider.addEventListener('mouseleave', () => {
		swiper.autoplay.start();
	});
}
//========================================================================================================================================================



//========================================================================================================================================================

document.querySelector('.popular-movies__button').addEventListener('click', function() {
    // Переключение класса "visibl" для элемента с классом "popular-movies__items--bottom"
    document.querySelector('.popular-movies__items--bottom').classList.toggle('visibl');
    
    // Переключение класса "red" для нажатой кнопки
    this.classList.toggle('red');
  });
   
	//========================================================================================================================================================
    
    // Функция для применения логики к определенному блоку
     // Выбираем все элементы .popular-movies__item внутри блока .popular-movies__items--top, .popular-movies__items--bottom
    //Приховуєм наступний елемент,якщо його немає тоді попередній
    function applyHoverLogicToBlock(block) {
        const items = block.querySelectorAll('.popular-movies__item');

        items.forEach(function(item, index) {
            item.addEventListener('mouseenter', function() {
                let sibling;
                if (index < items.length - 1) {
                    // Если это не последний элемент, скрываем следующий элемент
                    sibling = items[index + 1];
                } else {
                    // Если это последний элемент, скрываем предыдущий
                    sibling = items[index - 1];
                }
                if (sibling) {
                    sibling.style.display = 'none';
                }
            });

            item.addEventListener('mouseleave', function() {
                let sibling;
                if (index < items.length - 1) {
                    // Возвращаем отображение следующего элемента
                    sibling = items[index + 1];
                } else {
                    // Возвращаем отображение предыдущего элемента
                    sibling = items[index - 1];
                }
                if (sibling) {
                    sibling.style.display = '';
                }
            });
        });
    }

    // Применяем логику к блоку .popular-movies__items--top
    const topBlock = document.querySelector('.popular-movies__items--top');
    applyHoverLogicToBlock(topBlock);

    // Применяем логику к блоку .popular-movies__items--bottom
    const bottomBlock = document.querySelector('.popular-movies__items--bottom');
    applyHoverLogicToBlock(bottomBlock);
   
	 //========================================================================================================================================================


//========================================================================================================================================================

//========================================================================================================================================================