$(document).ready(function(){
	var altura = $('.navigation').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.navigation').addClass('menu-fixed');
		} else {
			$('.navigation').removeClass('menu-fixed');
		}
	});

});