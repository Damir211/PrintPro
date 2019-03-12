$(document).ready(function(){
	
	// Находим блок карусели
	
	var carousel2 = $("#carusel2");
	var carousel3 = $("#carusel3");
	var carousel4 = $("#carusel4");

	// Запускаем плагин карусели
	carousel2.owlCarousel({
		pagination:false,
		itemsDesktop: [5000,4],
		itemsDesktopSmall:[1400,3],
		itemsTablet:[1080,2],
		itemsTabletSmall:[700,1]

	});
	carousel3.owlCarousel({
		pagination:false,
		itemsDesktop: [5000,4],
		itemsDesktopSmall:[1400,3],
		itemsTablet:[1080,2],
		itemsTabletSmall:[700,1]

	});
	carousel4.owlCarousel({
		pagination:false,
		itemsDesktop: [5000,4],
		itemsDesktopSmall:[1400,3],
		itemsTablet:[1080,2],
		itemsTabletSmall:[700,1]

	});

	$('#prev1').on('click',function(){
		carousel2.trigger('owl.prev');
		return false;
	});
	$('#next1').on('click',function(){
		carousel2.trigger('owl.next');
		return false;
	});
	$('#prev2').on('click',function(){
		carousel3.trigger('owl.prev');
		return false;
	});
	$('#next2').on('click',function(){
		carousel3.trigger('owl.next');
		return false;
	});
	$('#prev3').on('click',function(){
		carousel4.trigger('owl.prev');
		return false;
	});
	$('#next3').on('click',function(){
		carousel4.trigger('owl.next');
		return false;
	});

	$('.like').on('click',function(){
		$(this).toggleClass('active__like');
	});

});