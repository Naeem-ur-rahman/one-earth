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
		414: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		540: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		620: {
			slidesPerView: 3,
			spaceBetween: 5,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 5,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 5,
		},
	},
	grabCursor: true,
});

//agents-swiper
var swiper2 = new Swiper("#agents-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 4,
	spaceBetween: 30,
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		414: {
			slidesPerView: 1,
			spaceBetween: 0,
			slidesPerGroup: 1,
		},
		540: {
			slidesPerView: 2,
			spaceBetween: 10,
			slidesPerGroup: 2,
		},
		620: {
			slidesPerView: 3,
			spaceBetween: 15,
			slidesPerGroup: 3,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 20,
			slidesPerGroup: 3,
		},
		1024: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
	},
	loop: true,
});
