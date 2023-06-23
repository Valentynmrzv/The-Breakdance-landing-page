let myImageSliderRew = new Swiper('.swiper-img', {

	slidesPerGroup: 1,
    slidesPerView: 1,
    initialSlide: 0,

    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	simulateTouch: false,
	spaceBetween: 0,
	centeredSlides: false,
	loop: true,
	speed: 400,
	effect: 'slide',

	observer: true,
	observeParents: true,
    observeSlideChildren: true,
    
    preloadImages: false,
    loadOnTransitionStart: false,
    loadPrevNext: true,

});

let myImageSliderRewFirst = new Swiper('.first', {
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	loop: true,
	autoplay: {
		delay: 5000,
		stopOnLastSlide: true,
		disableOnInteraction: true
	},
});