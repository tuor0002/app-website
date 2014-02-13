 var $win = $(window);
var $sun = $('.sun'); 
var $dipper = $ ('.dipper')
var $ships = $ ('.ships img');


$win.on('scroll', function () {
	
	//console.log( $win.scrollTop() );
	$sun.css('transform', 'rotate(' + $win.scrollTop () / 2 + 'deg)');
	
});




$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');	
}, { offset: '60%' });



$('.ships-section').waypoint(function () {
	$ships.eq(0).addClass('js-ship-delay-1');
	$ships.eq(2).addClass('js-ship-delay-3');
	$ships.eq(3).addClass('js-ship-delay-2');
	$ships.addClass('js-ships-animate');
}, { offset: '60%' });




var dinoData = $.ajax('dinos.json', {
	
	dataType: 'json'
	
});


// Because AJAX take time to download things of the internet
//.done() will be triggered only after jquery has finished downloading
dinoData.done(function (data) {
	var dino =  Math.round (Math.random() * (data.length - 1) );
	
	$('.dino-name').html(data[dino].name);
	$('.dino-period').html(data[dino].period);
	$('.dino-diet').html(data[dino].diet);
});