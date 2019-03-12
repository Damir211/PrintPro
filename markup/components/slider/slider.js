$(document).ready(function(){
	
	// Находим блок карусели
	
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
		autoPlay:true,
		stopOnHover:true,
		singleItem:true
	});
});