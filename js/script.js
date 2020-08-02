// Back to top button

$(document).ready(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').tooltip();
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
			$('#back-to-top').tooltip('hide');
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});