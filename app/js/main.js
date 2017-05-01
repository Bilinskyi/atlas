

$(document).ready(function(){

	var js_circle = $('.circle-js');
	var js_circle2 = $('.circle-js-lg');

	$(document).on('click', '.tabs-call-caption__item:not(.tabs-call-caption__item_active)', function() {

		$(this).addClass('tabs-call-caption__item_active').siblings().removeClass('tabs-call-caption__item_active');
		if ( $(this).hasClass('js-content') ) {
			$('.tabs-call-content').fadeIn();
		} else {
			$('.tabs-call-content').fadeOut();
		}

	});


	$(window).on('scroll', function() {

		if ($(window).scrollTop() > 200 ) {
			$('.menu-scroll').addClass('menu-scroll_active');
			$('.hamburger').addClass('color');
			$('.wrapp-hamburger').addClass('wrapp-hamburger_position');
		} else {
			$('.menu-scroll').removeClass('menu-scroll_active');	
			$('.hamburger').removeClass('color');
			$('.wrapp-hamburger').removeClass('wrapp-hamburger_position');
		}

	});




	$('.mh1').matchHeight();


	$('.plus').mouseenter(function() {

		$(this).addClass('active');
		$(this).children('.plus__border').addClass('active');

	});
	$('.plus').mouseleave(function() {

		$(this).removeClass('active');
		$(this).children('.plus__border').removeClass('active');

	});


	


		// var scr = $(".main-wrapper").height() > $('body').height();

		var flsm1 = true; 
		var flsm2 = true; 
		var check2 = true;
		var check3 = true;

		$(window).on('load resize', function() {

			/*CHECK WIDTH 1 ITERATION*/
			if (window.innerWidth >= 768 && window.innerWidth < 992) {
				flsm2 = true; 
				check2 = true;
				check3 = true;
				if (flsm1) {
					flsm1 = false;
					setTimeout(function() {
						imageComprehension();
					}, 300); 
				}
			} else if (window.innerWidth >= 992 && window.innerWidth < 1330) {

				flsm1 = true; 
				flsm2 = true; 
				check2 = true;
				if (check3) {
					check3 = false;
					setTimeout(function() {
						imageComprehension();
					}, 300); 
				}

			} else if (window.innerWidth >= 1330) {

				flsm1 = true; 
				flsm2 = true; 
				check3 = true;
				if (check2) {
					check2 = false;
					setTimeout(function() {
						imageComprehension();
					}, 300); 
				}

			} else {
				flsm1 = true; 
				check2 = true;
				check3 = true;
				// if (flsm2) {
					// flsm2 = false; 

					setTimeout(function() {
						imageComprehension();
					}, 300); 

				// }
			}

		});






		/* SLICK_SLIDER */
		if ($('.slider-client').length) {
			$('.slider-client').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				dots: false,
				centerMode: false,
				centerPadding: '30px',
				touchMove: false,
				draggable: false,
				responsive: [
				{
					breakpoint: 1330,
					settings: {
						dots: false,
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 992,
					settings: {
						dots: false,
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				]
			});
		};




		if ($('.slider-comprehension').length) {
			$('.slider-comprehension').slick({
				slidesToShow: 1,
				adaptiveHeight: true,
				slidesToScroll: 1,
				dots: false,
				arrows: true,
				centerMode: false,
				centerPadding: '30px',
				touchMove: false,
				draggable: false,
				autoplay: false,
				speed: 400

			});
		};








		imageComprehension();
		$('.slider-comprehension').on('afterChange', function(){
			imageComprehension();	
		});










		if ($('.slider-main').length) {
			$('.slider-main').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				centerMode: false,
				centerPadding: '30px',
				touchMove: false,
				draggable: false,
				autoplay: true,
				autoplaySpeed: 4000,
				speed: 400,
				pauseOnHover: true,		
				pauseOnFocus: false,
				fade: true,
				cssEase: 'linear'

			}).on('beforeChange', function() {
				$(this).find('.slick-dots .slick-active .circle-js').removeClass('anim');
			}).on('afterChange', function() {
				$(this).find('.slick-dots .slick-active .circle-js').addClass('anim');
				countSlide($(this));
			});
		};

		appendNumber('.slider-main');




		$('.slider-js-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			centerPadding: '130px',
			touchMove: false,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 400,
			draggable: false
		}).on('beforeChange', function() {
			$(this).find('.slick-dots .slick-active .circle-js').removeClass('anim');
		}).on('afterChange', function() {
			$(this).find('.slick-dots .slick-active .circle-js').addClass('anim');
			countSlide($(this));
		});

		appendNumber('.slider-js-1');


		$('.slider-js-2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: true,
			centerPadding: '130px',
			touchMove: false,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 400,
			draggable: false
		}).on('beforeChange', function() {
			$(this).find('.slick-dots .slick-active .circle-js').removeClass('anim');
		}).on('afterChange', function() {
			$(this).find('.slick-dots .slick-active .circle-js').addClass('anim');
			countSlide($(this));
		});

		appendNumber('.slider-js-2');




		



		initActiveTabs('.tab-content_active ');


		$('.tab-caption').on('click', 'li:not(.tab-caption__item_active)', function() {


			var oldEq = $(this).closest('.tabs').find('.tab-content_active');

			oldEq.find('.slick-dots .slick-active .circle-js').removeClass('anim');
			oldEq.find('.slick-current .circle-wrapp .circle-js-lg').removeClass('anim');	

			oldEq.find('.slider-lg').slick('unslick');
			oldEq.find('.slider-inside').slick('unslick');
			oldEq.find('.slider-lg-thumbnail').slick('unslick');

			$(this)
			.addClass('tab-caption__item_active').siblings().removeClass('tab-caption__item_active')
			.closest('.tabs').find('.tab-content').removeClass('tab-content_active').css({opacity: '0',display: 'none'}).eq($(this).index()).addClass('tab-content_active').css('display', 'block').animate({opacity: '1'}, 500);


			initActiveTabs('.tab-content_active ');


			// $('.tab-content_active').find('.slick-dots li').append(js_circle.clone());

			
			
			$('.tab-content_active').find('.slick-dots .slick-active .circle-js').addClass('anim');
			$('.tab-content_active').find('.slick-current .circle-wrapp .circle-js-lg').addClass('anim');	

			$('.tab-content_active').find('.slick-dots li').append(js_circle.clone());
			$('.tab-content_active').find('.slick-dots li.slick-active .circle-js').addClass('anim');

		})







		/*FANCYBOX*/
		$(".fancybox").fancybox({
			'hideOnContentClick': true,
			minWidth : 230,
			padding : 0,
			maxHeight   : "95%",
			closeBtn : true
		});


		/*SCROLL TO*/
	// $('header a[href^="#"]').on('click', function(event) {
	// 	var target = $( $(this).attr('href') );
	// 	if( target.length ) {
	// 		event.preventDefault();
	// 		$('html, body').animate({
	// 			scrollTop: target.offset().top -35
	// 		}, 600);
	// 	}
	// });


	/*MASK JQUERY*/
	jQuery(function($){ 
		$('input[type=tel]').mask("+7 (999) 999-99-99");
	});


	/*HIDE PLACEHOLDER*/
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		.attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});






	/*YANDEX MAP*/
	if ($('.section-map').length) {
		ymaps.ready(init);
		function init(){
			var myMap=new ymaps.Map("map-canvas",{
				center:[54.169980, 37.592267],
				zoom:17,
				controls:['zoomControl']
			}),
			Placemark1=new ymaps.Placemark([54.169980, 37.592267],{
				balloonContent:'',
				hintContent:'',
			},{
				// preset:'islands#redDotIcon'
				iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.svg',
            // Размеры метки.
            iconImageSize: [75, 77],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
          })
			myMap.geoObjects.add(Placemark1);
			myMap.behaviors.disable('scrollZoom');
		}
	};



	/*deletecookie*/
	// $(document).on('click', 'a', function() {
	// 	if (readCookie('txt-c') !== null || readCookie('select-c') !== null ) {
	// 		eraseCookie('txt-c');
	// 		eraseCookie('select-c');
	// 	}
	// });


	/*check-form*/
	// $('#feedback-valid-1').validate({
	// 	rules:{
	// 		"phone":{required:true}
	// 	},
	// 	messages:{
	// 		"phone":{required:""}
	// 	},
	// 	submitHandler: function(form){
	// 		$(form).ajaxSubmit({
	// 			success: function(data) {
	// 				if (data == "true")
	// 				{
	// 					$(':input','#feedback-valid-1')
	// 					.not(':button, :submit, :reset, :hidden')
	// 					.val('')
	// 					.removeAttr('checked')
	// 					.removeAttr('selected');
	// 						// window.location.href = "thx1.html";
	// 						$.fancybox.close()
	// 						var message = $('.modal');
	// 						$.fancybox(message);

	// 					}
	// 				}  
	// 			}); 
	// 	}
	// });


	// function createCookie(name,value,days) {
	// 	var expires = "";
	// 	if (days) {
	// 		var date = new Date();
	// 		date.setTime(date.getTime() + (days*24*60*60*1000));
	// 		expires = "; expires=" + date.toUTCString();
	// 	}
	// 	document.cookie = name + "=" + value + expires + "; path=/";
	// }

	// function readCookie(name) {
	// 	var nameEQ = name + "=";
	// 	var ca = document.cookie.split(';');
	// 	for(var i=0;i < ca.length;i++) {
	// 		var c = ca[i];
	// 		while (c.charAt(0)==' ') c = c.substring(1,c.length);
	// 		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	// 	}
	// 	return undefined;
	// }

	// function eraseCookie(name) {
	// 	createCookie(name,"",-1);
	// }


	/* count slide */
	function countSlide(nameSlideCount) {

		var count = $(nameSlideCount).slick("getSlick").slideCount;

		var currentSlide = $(nameSlideCount).slick('slickCurrentSlide') +1;
		if (currentSlide > 9) {
			var zero_1 = '';
		} else {
			var zero_1 = '0';
		}
		$(nameSlideCount).find('.number').text(zero_1 + currentSlide + '.');

	};




	/*appendNumber*/
	function appendNumber(sliderName_forNumber) {
		$(sliderName_forNumber).find('.slick-dots').append('<div class="number">01.</div>')
	};

	


	function imageComprehension() {
		var $black_white = $('.slider-comprehension .slick-slide').find('.black_white');

		var imageWidth = $('.slider-comprehension .slick-current .color img').width();
		$('.black_white').find('img').css({
			width: imageWidth
		});


		var init_split = Math.round(imageWidth/2);
		var $sep = $('.slider-comprehension .slick-slide').find('.separate');
		$black_white.width(init_split);  
		$sep.css('left', init_split);


		$('.slider-comprehension .slick-current').find('.mousemove').mousemove(function(e){
			var offX  = (e.offsetX);
			if (offX >= imageWidth - 8 ) {
				offX = imageWidth - 8
				$sep.css('left', offX);
				$black_white.width(offX);
			} else if (offX < 8 ) {
				offX = 8
				$sep.css('left', 8);
				$black_white.width(offX);
			} else {
				$sep.css('left', offX);
				$black_white.width(offX);
			}

			
		});

		$('.slider-comprehension .slick-current .mousemove').mouseleave(function(e){
			$black_white.stop().animate({
				width: init_split
			}, 300);
			$sep.stop().animate({
				left: init_split
			}, 300);
		});
	};






	function initActiveTabs(nameActiveTabs) {

		

		$(nameActiveTabs+'.slider-inside').slick({
			slidesToShow: 1,
			adaptiveHeight: true,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			centerMode: false,
			centerPadding: '30px',
			touchMove: false,
			draggable: false,
			pauseOnDotsHover: true,
			pauseOnHover: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 400
		}).on('beforeChange', function() {
			$(this).find('.slick-dots .circle-js').removeClass('anim');
		}).on('afterChange', function() {
			$(this).find('.slick-dots .circle-js').removeClass('anim');
			$(this).find('.slick-dots .slick-active .circle-js').addClass('anim');
			countSlide($(this));
		});;


		appendNumber(nameActiveTabs+'.slider-inside');	

		$(nameActiveTabs+'.slider-lg').slick({
			slidesToShow: 1,
			adaptiveHeight: false,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			centerMode: false,
			centerPadding: '30px',
			touchMove: false,
			draggable: false,
			autoplay: true,
			autoplaySpeed: 4000,
			speed: 600,
			cssEase: 'ease',
			pauseOnDotsHover: true,
			pauseOnHover: true,
			asNavFor: nameActiveTabs+'.slider-lg-thumbnail'
		})

		$(nameActiveTabs+'.slider-lg-thumbnail').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: nameActiveTabs+'.slider-lg',
			dots: false,
			arrows: true,
			adaptiveHeight: true,
			pauseOnDotsHover: true,
			pauseOnHover: true,
			focusOnSelect: true, 
			responsive: [ 
			{
				breakpoint: 992,
				settings: {
					dots: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			]
		}).on('beforeChange', function() {
			$(this).find('.circle-wrapp .circle-js-lg').removeClass('anim');
		}).on('afterChange', function() {
			$(this).find('.circle-wrapp .circle-js-lg').removeClass('anim');
			$(this).find('.slick-current .circle-wrapp .circle-js-lg').addClass('anim');	
		});


	};
	


	$('.slick-dots li').append(js_circle.clone());
	$('.slick-dots li.slick-active .circle-js').addClass('anim');

	$('.circle-wrapp').append(js_circle2.clone());
	$('.slick-current .circle-wrapp .circle-js-lg').addClass('anim');




});