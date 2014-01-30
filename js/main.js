/* Carousel */


var $items = $('.carousel-items img');

var switchItems = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming') .fadeIn(250, function () { 
	$items.eq(outgoing).attr('data-state', '').hide();
	$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next >= $items.length) {
		next = 0;
	}
	
	switchItems(current, next);
});

$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var previous = current - 1;
	
	if (previous >= $items.length) {
		previous = 0;
	}
	
	switchItems(current, previous);
});







/* Video */

var $dialog = $ ( '#video' ) ;
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open') .on ('click' , function () {
	$placeholder.html('<iframe src="//player.vimeo.com/video/83188569?color=ffffff&amp;autoplay=1" width="450" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
	/* 
	.get (get) returns the native Javascropt element for us to access 
	When using Jquery we don't hve access to the original HTML elements directly, we are using jQuery to maniplate them.
	Somtimes directly, we are using jQuery to manipulate them.
	Example:
	$dialog.show() - Will call jQuery's 'Show()' function
	$dialog.get(0).show() - will call Javascripts native 'Show() function
	
	*/
	/*
	$dialog.get(0).show();
	*/
	$dialog.get(0).showModal();
	// show() -> allows multiple dialogs
	// showModal() -> signle dialog, with no user interaction behing
	
});

$('#btn-close') .on ('click', function () {
	$dialog.get(0).close();
	$placeholder.html('');
});