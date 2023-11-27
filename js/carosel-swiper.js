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
	slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 4000,
		// disableOnInteraction: true,
	},
	breakpoints: {
		325: {
			slidesPerView: 1,
			spaceBetween: 5,
		},
		414: {
			slidesPerView: 2,
			spaceBetween: 5,
		},
		620: {
			slidesPerView: 3,
			spaceBetween: 15,
		},
		992: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1025: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
	grabCursor: true,
});
