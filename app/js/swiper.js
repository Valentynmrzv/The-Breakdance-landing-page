let myImageSliderRew = new Swiper('.swiper-img', {

	slidesPerGroup: 1,
    slidesPerView: 1,
    initialSlide: 0,

    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
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
