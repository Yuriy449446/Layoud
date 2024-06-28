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



// Step-1  step-2

const buttonOne = document.getElementById("step-1-button");
const formOne = document.getElementById("some-form");
const stepGreen = document.querySelectorAll(".list-group-item");
const sendForm = document.getElementById("send-form");
const ok = document.querySelector(".step--ok");
const formTwo = document.getElementById("some-form-2");
const previous = document.getElementById("previous-form");
const popapClouse = document.querySelector(".popup1_clouse");


if (buttonOne && formOne && formTwo && stepGreen.length > 0) {
    buttonOne.addEventListener("click", function (event) {
        event.preventDefault(); 
        formOne.classList.remove("active");
        formTwo.classList.add("active");

        stepGreen.forEach(function (item) {
            item.classList.toggle("activ");
        });
    });
}

if (previous && formOne && formTwo && stepGreen.length > 0) {
    previous.addEventListener("click", function (event) {
        event.preventDefault();
        formTwo.classList.remove("active");
        formOne.classList.add("active");

        stepGreen.forEach(function (item) {
            item.classList.toggle("activ");
        });
    });
}

//if (sendForm && ok && formTwo && formOne) {
   // sendForm.addEventListener("click", function (event) {
      //  event.preventDefault(); 

      //  ok.classList.remove("active");
       // formTwo.classList.add("active");
       // setTimeout(function () {
        //    formTwo.submit(); 
       // }, 3000);
    //});
//}
//const sendForm2 = document.getElementById("send-form");
//const ok2 = document.querySelector(".step--ok");
//const formTwo2 = document.querySelector(".step--step-2");
//const sendFormOk = document.getElementById("some-form-2");


// Добавляем обработчик события на клик Send
sendForm.addEventListener("click", function(event) {
    //event.preventDefault();  // Предотвращаем мгновенное обновление страницы
    
    ok.classList.remove("hidden");
    formTwo.classList.remove("active");
    formOne.classList.add("active");
    stepGreen.forEach(function (item) {
        item.classList.toggle("activ");
        document.body.classList.add('popap-lock');
    });

    
});

// Добавляем обработчик события на клик popapClouse
popapClouse.addEventListener("click", function(event) {
     
    ok.classList.toggle("hidden");
    document.body.classList.remove('popap-lock');
});

