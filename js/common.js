$(document).ready(function() {



	// геграфия флаги
	$('.item_flag').hover(function () {
		if ($(this).find('.item_flag_hidden_block').hasClass('active')) {
			$(this).find('.item_flag_hidden_block').removeClass('active').fadeOut(300);
		}
		else {
			$('.item_flag_hidden_block').removeClass('active').fadeOut(300);
			$(this).find('.item_flag_hidden_block').addClass('active').fadeIn(300);
		}
	});

	// аккордеон услуги моб
	if (window.matchMedia('(max-width: 950px)').matches) {
		$(".open_toggle_services").on('click', function(e) {
			e.preventDefault();
			if($(this).next("div").is(":visible")){
				$(this).next("div").slideUp(200);
				$(this).removeClass("active");

			} else {
				$(".block_toggle_services").slideUp(200);
				$(this).next("div").slideDown(200);
				$(this).parents().siblings().children(".open_toggle_services").removeClass("active");
				$(this).addClass("active");
			}
		});
	}

	// табы услуги
	if (window.matchMedia('(min-width: 950px)').matches) {
		$('ul.list_tabs_services a').click(function(e) {
			e.preventDefault();
			$('ul.list_tabs_services .active').removeClass('active');
			$(this).addClass('active');
			var tab = $(this).attr('href');
			$('.services_content').not(tab).css({'display':'none'});
			$(tab).fadeIn(400);
		});
	}


	// аккордеон каталог решений моб
	if (window.matchMedia('(max-width: 950px)').matches) {
		$(".open_toggle_solution_catalog").on('click', function(e) {
			e.preventDefault();
			if($(this).next("div").is(":visible")){
				$(this).next("div").slideUp(200);
				$(this).removeClass("active");

			} else {
				$(".block_toggle_solution_catalog").slideUp(200);
				$(this).next("div").slideDown(200);
				$(this).parents().siblings().children(".open_toggle_solution_catalog").removeClass("active");
				$(this).addClass("active");
			}
		});
	}


	// табы каталог решений
	if (window.matchMedia('(min-width: 950px)').matches) {
		$('ul.list_tabs_solution_catalog a').click(function(e) {
			e.preventDefault();
			$('ul.list_tabs_solution_catalog .active').removeClass('active');
			$(this).addClass('active');
			var tab = $(this).attr('href');
			$('.solution_catalog_content').not(tab).css({'display':'none'});
			$(tab).fadeIn(400);
		});
	}

	//фиксированая шапка
	$(window).scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('header').addClass("sticky");
		}
		else {
			$('header').removeClass("sticky");
		}
	});

	//Боковое Меню
	$('.menuToggle').on('click', function() {
		$(this).toggleClass('active');
		$(this).parents('header').find('.main_nav_toggle').toggleClass('active');
		$('body').toggleClass('tablet_scroll');
		$('.overlay').toggleClass('active');
	});



	// слайдер пресс-центр
	if ($(".press_center_slider").length > 0) {
		var swiper = new Swiper('.press_center_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 4,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '#press_center_slider_button_next',
		        prevEl: '#press_center_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 2,
		        },
		        768: {
		          slidesPerView: 2,
		        },
		        650: {
		          slidesPerView: 2,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	// слайдер проекты
	if ($(".projects_slider").length > 0) {
		var swiper = new Swiper('.projects_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 2,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: true, // уберет навигацию когда она не нужна
			// autoplay: {
		 //        delay: 2500,
		 //        disableOnInteraction: false,
	  //     	},
	      	navigation: {
		        nextEl: '#projects_slider_button_next',
		        prevEl: '#projects_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 1,
		        },
		        950: {
		          slidesPerView: 2,
		        },
		        650: {
		          slidesPerView: 2,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	//слайдер демостенд
	if ($(".demo_room_slider").length > 0) {
		var swiper = new Swiper('.demo_room_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: false, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.demo_room_slider_button_next',
		        prevEl: '.demo_room_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 1,
		        },
		        950: {
		          slidesPerView: 1,
		        },
		        650: {
		          slidesPerView: 1,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



	//слайдер партнеры
	if ($(".our_partners_slider").length > 0) {
		var swiper = new Swiper('.our_partners_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 2,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: false, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.our_partners_slider_button_next',
		        prevEl: '.our_partners_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 2,
		        },
		        950: {
		          slidesPerView: 2,
		        },
		        650: {
		          slidesPerView: 1,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



	//слайдер карта товара
	if ($(".card_product_slider").length > 0) {
		var swiper = new Swiper('.card_product_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: false, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.card_product_slider_button_next',
		        prevEl: '.card_product_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 1,
		        },
		        950: {
		          slidesPerView: 1,
		        },
		        650: {
		          slidesPerView: 1,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}



	//слайдер проект большой
	if ($(".project_big_slider").length > 0) {
		var swiper = new Swiper('.project_big_slider', {
			// direction: 'vertical', // вертикальный слайдер
			slidesPerView: 1,
			spaceBetween: 30,
			// effect: 'fade', // анимация
			loop: false,
			observer: false, // помощь инициализации
			observeParents: false,
			slidesPerGroup: 1,
			slideToClickedSlide: false, // клик на слайд = переход на слайд
			watchOverflow: false, // уберет навигацию когда она не нужна
	      	navigation: {
		        nextEl: '.project_big_slider_slider_button_next',
		        prevEl: '.project_big_slider_slider_button_prev',
	      	},
		    breakpoints: {
		        1170: {
		          slidesPerView: 1,
		        },
		        950: {
		          slidesPerView: 1,
		        },
		        650: {
		          slidesPerView: 1,
		        },
		        550: {
		          slidesPerView: 1,
		        }
	      	}
	    });
	}


	  // табы карточка товара
	  $('ul.button_glav_info a').click(function(e) {
	  	e.preventDefault();
	  	$('ul.button_glav_info .active').removeClass('active');
	  	$(this).addClass('active');
	  	var tab = $(this).attr('href');
	  	$('.glav_info_content').not(tab).css({'display':'none'});
	  	$(tab).fadeIn(400);
	  });

// 	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask

    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});

	// if (window.matchMedia('(max-width: 1200px)').matches) // адаптивный js


});




