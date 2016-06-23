		function juizScrollTo(element, offsetElement){			
	$(element).click(function(){
		var goscroll = false;
		var the_hash = $(this).attr("href");
		var regex = new RegExp("\#(.*)","gi");
		var the_element = '';
		var navHeight = offsetElement.outerHeight();

		if(the_hash.match("\#(.+)")) {
			the_hash = the_hash.replace(regex,"$1");
 
			if($("#"+the_hash).length>0) {
				the_element = "#" + the_hash;
				goscroll = true;
			}
			else if($("a[name=" + the_hash + "]").length>0) {
				the_element = "a[name=" + the_hash + "]";
				goscroll = true;
			}
 
			if(goscroll) {
				$('html, body').animate({
					scrollTop:$(the_element).offset().top - navHeight
				}, 'slow');
				return false;
			}
		}
	});					
};

(function($) {

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 250);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		$(window).scroll(function(){
		
			var navHeight = $(".nav").outerHeight();

			if ( $(window).scrollTop() > navHeight) {
				$('.nav').addClass('sticky');
			} else {
				$('.nav').removeClass('sticky');
			}
		});



		juizScrollTo('a[href^="#"]', $(".nav"));


		$(".menu").on("click", function(){
			$(".nav-list").toggleClass('open');
		});
		
	});

})(jQuery);