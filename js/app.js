//import * as flsFunctions from "./modules/functions.js";

//flsFunctions.isWebp();


// import Swiper, { Navigation, Pagination } from "swiper";
console.log('nflfv');

//document.documentElement.classList.remove('safari');

//*@ Да будет SLIDER-SWIPER

let myImageSlider = new Swiper('.slaider', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	//* Бесконечный слайдер
	loop: true,


	//* Обновить свайпер, при изменении элементов слайдера
	observer: true,

	//* Обновить свайпер, при изменении родительских элементов слайдера
	observeParents: true,

	//* Обновить свайпер, при изменении дочерних элементов, внутри, слайда
	observeSlideChildren: true,
	touchRatio: 1,
	slidesPerGroup: 1,


	//*@ Отключить предзагрузку картинок 
	//*@ Похоже устарело и не работает
	//* по умолчанию, она включена, со значением true
	preloadImages: false,

	//*@ lazy Loading (подгрузка картинок)
	//*@ Похоже устарело и не работает
	lazy: {
		//* Подгружать на старте переключения слайдов
		//* если значение true, срабатывает при переключении на следующий или предыдущий слайд
		loadOnTransitionStart: false,
		// Подгружать предыдущую и следующую картинки
		//* если значение true, подгружает предыдущий и следующий слайды
		loadPrevNext: false,
	},
});


//* Что мы хотим: собирать js файлы таким образом, чтобы мы могли подключать, импортировать различные части и файлы в синтаксисе es6, добавлять к <html> class="webp" или "no-webp", в зависимости от поддержки браузером webp изображений

const burger1 = document.querySelector('.burger');
const menu1 = document.querySelector('.wrapper-nav');
const wrapper1 = document.querySelector('.wrapper1');



burger1.addEventListener('click', function () {
	menu1.classList.toggle('active');
	wrapper1.classList.toggle('active');
	burger1.classList.toggle('active');
	document.body.classList.toggle('active');

});

//@ СЛАЙДЕР
//* Регулировка высота каждой картинки слайдера, относительно ширины, ибо, как сделать это через css, я не знаю
const slaid1 = document.querySelectorAll('.slaid');
let footP = document.querySelector('.footer-wrapper p');
//footP.innerHTML = ` Привет `

const mainSlaid1 = document.querySelector('.main-slaider');
const slaiderCont = document.querySelector('.slaider');

let slaidWidth1;


function heightSlide() {
	if (document.documentElement.clientHeight / document.documentElement.clientWidth > 0.75) {
		slaiderCont.classList.add('vertic');
		slaiderCont.classList.remove('horiz');

	} else if (document.documentElement.clientHeight / document.documentElement.clientWidth <= 0.75) {
		slaiderCont.classList.remove('vertic');
		slaiderCont.classList.add('horiz');

	};
}

heightSlide();






function doubleHS() {
	if (slaiderCont.classList.contains('vertic')) {

		for (let elem of slaid1) {


			elem.style.width = `${document.documentElement.clientWidth - 20}px`;
			elem.style.maxWidth = `750px`;
			slaidWidth1 = parseInt(getComputedStyle(elem).width);

			elem.style.height = `${slaidWidth1 * 0.75}px`;

		};


		slaiderCont.style.width = document.querySelectorAll('.slaid')[0].style.width;
		slaiderCont.style.height = document.querySelectorAll('.slaid')[0].style.height;

		console.log(parseInt(getComputedStyle(slaiderCont).height));
		console.log(parseInt(getComputedStyle(slaiderCont).width));

	} else if (slaiderCont.classList.contains('horiz')) {

		//*в цикле, у каждого слайда:
		//* max-width = (высот экрана * 0,9)/0,75
		//* height = высот экрана * 0,9)/0,75 
		for (let elem of slaid1) {
			elem.style.width = `${(document.documentElement.clientHeight * 0.9) / 0.75}px`;
			elem.style.maxWidth = '750px';
			elem.style.height = `${document.documentElement.clientHeight * 0.9}px`;
			elem.style.maxHeight = '562.5px';
		}

		slaiderCont.style.width = `${slaid1[0].offsetWidth}px`;
		slaiderCont.style.height = `${slaid1[0].offsetHeight}px`;

		console.log(parseInt(getComputedStyle(slaiderCont).height));
		console.log(parseInt(getComputedStyle(slaiderCont).width));

	}
};
doubleHS();

//*движение фона за курсором
const activeBg = function () {
	if (document.documentElement.clientWidth < 1000) {
		if (document.documentElement.classList.contains('webp')) {
			document.body.style.background = `#000 url("./img/imgMin/headerFonMin.webp") 50% 50% / cover fixed no-repeat `;
		} else {
			document.body.style.background = `#000 url("./img/imgMin/headerFonMin.jpg") 50% 50% / cover fixed no-repeat `;
		}
	} else {
		if (document.documentElement.classList.contains('webp')) {
			document.body.style.background = `#000 url("./img/headerFon.webp") 50% 50% / cover fixed no-repeat `;
		} else {
			document.body.style.background = `#000 url("./img/headerFon.jpg") 50% 50% / cover fixed no-repeat `;
		}
	}
	//*@ проверка на мобильное сенсорное устройство. если впереди убрать "!", то будет действовать только для них
	if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document.body.addEventListener('mousemove', funFon1);
	}


	function funFon1() {

		if (window.innerWidth > 1.3 * window.innerHeight) {
			document.body.style.backgroundSize = ` 115% auto`;
		} else if (window.innerHeight > 1.3 * window.innerWidth) {
			document.body.style.backgroundSize = ` auto 115% `;
		} else {
			document.body.style.backgroundSize = ` 115% 115% `;
		}



		let getEvent = function () {
			return (event.type.search('touch') !== -1) ? event.touches[0] : event;
		};

		let evt = getEvent();
		//ширина окна брауз в рх
		//console.log(window.innerWidth);
		//расстоян от левого края до курс
		//console.log(event.clientX);
		let per1;

		let per2;
		let curY = evt.clientY;
		let curX = evt.clientX;

		if (curY === window.innerHeight / 2) {
			per2 = 50;

		} else if (curY > window.innerHeight / 2) {
			per2 = 50 + ((evt.clientY - (window.innerHeight / 2)) / ((window.innerHeight) / 25));
		} else if (curY < window.innerHeight / 2) {
			per2 = 50 - (((window.innerHeight / 2) - evt.clientY) / ((window.innerHeight) / 25));
		}

		if (curX === window.innerWidth / 2) {
			per1 = 50;

		} else if (curX > window.innerWidth / 2) {
			per1 = 50 + ((evt.clientX - (window.innerWidth / 2)) / ((window.innerWidth) / 25));
		} else if (curX < window.innerWidth / 2) {
			per1 = 50 - (((window.innerWidth / 2) - evt.clientX) / ((window.innerWidth) / 25));
		}
		document.body.style.backgroundPositionY = `${per2}% `;
		document.body.style.backgroundPositionX = `${per1}% `;

	};

};
activeBg();





window.addEventListener('resize', function () {
	if (document.documentElement.clientWidth > 522) {
		menu1.classList.remove('active');
		wrapper1.classList.remove('active');
		burger1.classList.remove('active');
		document.body.classList.remove('active');
	}
	heightSlide();
	activeBg();
	doubleHS();
	//* Обновить слайдер
	myImageSlider.update();
});

/* window.addEventListener('orientationchange', function () {

	heightSlide();
	activeBg();
	doubleHS();
	//* Обновить слайдер
	myImageSlider.update();
}); */

//* Отключение движение фона, когда курсор на слайдере и включение обратно, когда выезжает с него









