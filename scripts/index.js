const h1 = document.querySelector('h1');
const dsk = document.querySelector('.desk');

const TEXT_SLIDER = {
	h1: ['привет', 'hello', 'world', 'fejfej', 5, 6, 7, 8, 9, 10],
	deskcription: [
		'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor officia animi odit id accusamus quas consequuntur blanditiis quos molestiaesimilique?',
		'Lorem ipsum, dolor si consequuntur blanditiis quos molestiaesimilique?',
		'Lorem ipsum, dolor sit blanditiis quos molestiaesimilique?',
		'Lorem ipsum, dolor sit  quos ?',
		'Lorem   quos ?',
		'Lorem ipsum, dolor sit blanditiis quos molestiaesimilique?',
		'Lorem ipsum, dolor sit blanditiis quos ?',
		'ipsum, dolor sit blanditiis quos ?',
		', dolor sit blanditiis quos ?',
		', dolor sit blanditiis quos ?',
	],
	background: [],
};

new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 30,
	centeredSlides: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChange() {
			h1.innerHTML = TEXT_SLIDER.h1[this.realIndex];
			dsk.innerHTML = TEXT_SLIDER.deskcription[this.realIndex];
			document.body.style.backgroundImage = `url(${TEXT_SLIDER.background[this.realIndex]})`;
		},
	},
});

fetch('https://api.unsplash.com/photos/?client_id=TzkZQlQ1PdINlxCx_mZzNKHfNoGDMHhDVKOX65Qj0Ko')
	.then((data) => data.json())
	.then((data) => {
		data.forEach((item) => {
			TEXT_SLIDER.background.push(item.urls.regular);
		});
	});
