"use strict";

var menuBtn = document.querySelector('.navbar__collapse');

var tl = gsap.timeline({
    paused: true,
    reversed: true
});

tl.set('.navbar__menu', {top: 0});
tl.to('.navbar__menu ul li a', {
    duration: 0.7,
    width: '100%',
    ease: Power4.easeInOut
});
tl.from('.navbar__menu ul li a span', {
    duration: 0.7,
    opacity: 0,
    y: 25
});


menuBtn.addEventListener('click', function(e) {
    if(tl.isActive()) {
        e.preventDefault();
        return false;
    }
    isReversed(tl);
});


function isReversed(animation) {
    animation.reversed() ? animation.play() : animation.reverse();
}

(function($) {
	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(2500).fadeOut();
	});
	///////////////////////////
	// collapse
    $('.navbar__collapse').on('click', function () {

        $('body').toggleClass('no-scroll');
        $('#nav').toggleClass('open');

        $(this).data('count') ? $(this).data('count', $(this).data('count') + 1) : $(this).data('count', 1);
        
        if ($(this).data('count') % 2 == 0) {
            $('.navbar__collapse span').removeClass('active');
            $('.navbar__collapse span').addClass('active-remove');
            setTimeout( function () {
                $('.navbar__collapse span').removeClass('active-remove');
            }, 800);
        } else {
            $('.navbar__collapse span').addClass('active');
            $('.navbar__collapse span').removeClass('active-remove');
        }
    });
	
})(jQuery);