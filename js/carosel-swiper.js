var swiper = new Swiper("#hero-carosel", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 4000,
		// disableOnInteraction: true,
	},
	loop: true,
	speed: 500,
	grabCursor: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
});

var swiper = new Swiper("#brokers-carosel", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 4000,
		// disableOnInteraction: true,
	},
	loop: true,
	speed: 500,
	grabCursor: true,
});