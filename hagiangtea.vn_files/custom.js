// Custom JavaScript
$(document).ready(function() {
    "use strict";
      /*-------------------------------------------------------------------------------
  Preloader
    -------------------------------------------------------------------------------*/
	$(window).on('load', function() {
		$('.sigma_preloader').addClass('hidden');
	  });    

	// sticky header
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		}
	}
	
	headerSticky();
	$(window).scroll(headerSticky);
	// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
}
	projectMasonaryLayout ();
	
	// main menu
	$('.main-navigation .sf-menu').superfish({
		delay: 100,
		animation: { opacity: 'show', height: 'show' },
		speed: 300,
	});
	
	$('.carousel').each(function() {
		var $carousel = $(this);
		$carousel.owlCarousel({
			autoHeight: false,
			nav: $carousel.data("nav"),
			navText: ["<i class='uil-arrow-left'></i>", "<i class='uil-arrow-right'></i>"],
			dots: $carousel.data("dots"),
			dotsEach: true,
			loop: $carousel.data("loop"),
			margin: $carousel.data("margin"),
			autoplay: $carousel.data("autoplay"),
			autoplayTimeout: $carousel.data("autoplay-timeout"),
			responsive: $carousel.data("responsive")
		});
	});

	// menudropdown auto align
	var wapoMainWindowWidth = $(window).width();
	$('.sf-menu ul li').mouseover(function(){
		// checks if third level menu exist
		var subMenuExist = $(this).find('.sub-menu').length;
		if( subMenuExist > 0){
			var subMenuWidth = $(this).find('.sub-menu').width();
			var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;

			// if sub menu is off screen, give new position
			if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){
				var newSubMenuPosition = subMenuWidth;
				$(this).find('.sub-menu').css({
					left: -newSubMenuPosition,
					top: '0',
				});
			}
		}
	 });

	// nav scroll
	if($('#dtr-header-global').length){
		var navoffset = $('#dtr-header-global').height();
		$('.dtr-nav a[href^="#"], .dtr-scroll-link').on("click", function(e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 25
			}, "slow","easeInSine");
		});
	} else {
		$('.dtr-scroll-link').on("click", function(e) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow","easeInSine");
		});
	}

	// scrollspy
	var win = $(window);
	$("section").each(function () {
		if (win.scrollTop() >= $(this).offset().top - 140) {
			$(".dtr-nav li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
		}
	});
	
	
	
	win.on("scroll", function () {
		$("section").each(function () {
			if (win.scrollTop() >= $(this).offset().top - 140) {
				$(".dtr-nav a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
			}
		});
	});

	/*-------------------------------------
        OwlCarousel
    -------------------------------------*/
    $('.sc-carousel').each(function() {
        var owlCarousel = $(this),
        loop = owlCarousel.data('loop'),
        items = owlCarousel.data('items'),
        margin = owlCarousel.data('margin'),
        stagePadding = owlCarousel.data('stage-padding'),
        autoplay = owlCarousel.data('autoplay'),
        autoplayTimeout = owlCarousel.data('autoplay-timeout'),
        smartSpeed = owlCarousel.data('smart-speed'),
        dots = owlCarousel.data('dots'),
        nav = owlCarousel.data('nav'),
        navSpeed = owlCarousel.data('nav-speed'),
        xsDevice = owlCarousel.data('mobile-device'),
        xsDeviceNav = owlCarousel.data('mobile-device-nav'),
        xsDeviceDots = owlCarousel.data('mobile-device-dots'),
        smDevice = owlCarousel.data('ipad-device'),
        smDeviceNav = owlCarousel.data('ipad-device-nav'),
        smDeviceDots = owlCarousel.data('ipad-device-dots'),
        smDevice2 = owlCarousel.data('ipad-device2'),
        smDeviceNav2 = owlCarousel.data('ipad-device-nav2'),
        smDeviceDots2 = owlCarousel.data('ipad-device-dots2'),
        mdDevice = owlCarousel.data('md-device'),
        centerMode = owlCarousel.data('center-mode'),
        HoverPause = owlCarousel.data('hoverpause'),
        mdDeviceNav = owlCarousel.data('md-device-nav'),
        mdDeviceDots = owlCarousel.data('md-device-dots');
        owlCarousel.owlCarousel({
            loop: (loop ? true : false),
            items: (items ? items : 4),
            lazyLoad: true,
            center: (centerMode ? true : false),
            autoplayHoverPause: (HoverPause ? true : false),
            margin: (margin ? margin : 0),
            //stagePadding: (stagePadding ? stagePadding : 0),
            autoplay: (autoplay ? true : false),
            autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
            smartSpeed: (smartSpeed ? smartSpeed : 250),
            dots: (dots ? true : false),
            nav: (nav ? true : false),
            navText: ["<i class='flaticon flaticon-left-arrow'></i>", "<i class='flaticon flaticon-right-arrow'></i>"],
            navSpeed: (navSpeed ? true : false),
            responsiveClass: true,
            responsive: {
                0: {
                    items: (xsDevice ? xsDevice : 1),
                    nav: (xsDeviceNav ? true : false),
                    dots: (xsDeviceDots ? true : false),
                    center: false,
                },
                768: {
                    items: (smDevice2 ? smDevice2 : 2),
                    nav: (smDeviceNav2 ? true : false),
                    dots: (smDeviceDots2 ? true : false),
                    center: false,
                },
                992: {
                    items: (smDevice ? smDevice : 3),
                    nav: (smDeviceNav ? true : false),
                    dots: (smDeviceDots ? true : false),
                    center: false,
                },
                1025: {
                    items: (mdDevice ? mdDevice : 4),
                    nav: (mdDeviceNav ? true : false),
                    dots: (mdDeviceDots ? true : false),
                }
            }
        });
    });

	// sectionAnchor - link to section from another page
	function sectionAnchor() {
	var navoffset = $('#dtr-header-global').height();
		var hash = window.location.hash;
		if (hash !== '') {
			setTimeout(function() {
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - navoffset - 25
				}, 800, 'easeInSine');
				history.pushState('', document.title, window.location.pathname);
			}, 500);
		}
	} sectionAnchor();
	


	// responsive menu
	$('.main-navigation .dtr-nav').slicknav({
		label:"",
		prependTo: '.dtr-responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks:"true",
		menuButton: '#dtr-menu-button',
		closeOnClick:true
	});

	// responsive menu button
	$("#dtr-menu-button").on("click", function(e) {
		$(".slicknav_nav").slideToggle();
	});

	// responsive menu hamburger
	var $hamburger = $("#dtr-menu-button");
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
	});

	// responsive header nav scroll
	var mnavoffset = $('.dtr-responsive-header').height();
	var scroll = new SmoothScroll('.dtr-responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 40
	});

	// scrollspy for responsive
	var win = $(window);
	$("section").each(function () {
		if (win.scrollTop() >= $(this).offset().top - 140) {
			$(".slicknav_menu li a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
		}
	});
	win.on("scroll", function () {
		$("section").each(function () {
			if (win.scrollTop() >= $(this).offset().top - 140) {
				$(".slicknav_menu a[href='#" + $(this).attr("id") + "']").addClass("active").parent().siblings().find("a").removeClass("active");
			}
		});
	});

	// responsiveAnchor - link to section from another page
	function responsiveAnchor() {
	var windowWidth=$(window).width();
		if(windowWidth<992){
			var mnavoffset = $('.dtr-responsive-header').height();
			var hash = window.location.hash;
			if (hash !== '') {
				setTimeout(function() {
					$('html, body').stop().animate({
						scrollTop: $(hash).offset().top - mnavoffset - 40
					}, 800, 'easeInSine');
					history.pushState('', document.title, window.location.pathname);
				}, 500);
			}
		}
	} responsiveAnchor();

	
	    /*===================================================================================*/
    /*  horizontal timeline
    /*===================================================================================*/
    if (jQuery('.timeline').length > 0) {
        timeline(document.querySelectorAll('.timeline'), {
            forceVerticalMode: 767,
            mode: 'horizontal',
            verticalStartPosition: 'left',
            visibleItems: 4
        });
    }
	// wow animations
	if( $(window).outerWidth() >= 767 ) {
		new WOW().init({
			mobile: false,
		});
	}



});
// document ready end


