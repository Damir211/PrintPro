$(document).ready(function(){
	$('.select__button').on('click',function(){
		$('.select__button').removeClass('active');
		$(this).addClass('active');
	});

	var isOpen = false;
	$('.head__details').on('click',function(){
		var element = $(this);
		var target = $(this).find('.body__details').hasClass('open__details');
		if(isOpen){
			if(target){
				$('.body__details').removeClass('open__details');
				setTimeout(function() {
      			$('.fone').removeClass('fone__active');
   				 }, 500);
				isOpen = false;
			}else{
				$('.body__details').removeClass('open__details');
				$('.fone').addClass('fone__active');
				setTimeout(function() {
      			element.find('.body__details').addClass('open__details');
    			}, 500);
				isOpen = true;
			}
		}else{
			$('.body__details').removeClass('open__details');
			$('.fone').addClass('fone__active');
			setTimeout(function() {
      		element.find('.body__details').addClass('open__details');
   			 }, 500);

			isOpen = true;
		}
	});
	$('.fone').on('click',function(){
		$('.body__details').removeClass('open__details');
		setTimeout(function() {
		$('.fone').removeClass('fone__active');
   		}, 500);
	});
});