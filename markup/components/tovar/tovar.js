$(document).ready(function(){
	var maxcount = 0;
	var priceforone = 0;
	var priceforonesale = 0;
	var boolsale = "";
	$('.eye').on('click',function(){
		var imgurl = $(this).parents('.product__item').find('.imgdata').attr('src');
		var headtext = $(this).parents('.product__item').find('.product__text').text();
		var count = $(this).parents('.product__item').attr('data-count');
		var brend =  $(this).parents('.product__item').attr('data-brend');
		var creator =  $(this).parents('.product__item').attr('data-creator');
		var model =  $(this).parents('.product__item').attr('data-model');
		var article =  $(this).parents('.product__item').attr('data-article');
		var weight =  $(this).parents('.product__item').attr('data-weight');
		var size =  $(this).parents('.product__item').attr('data-size');
		var text1 =  $(this).parents('.product__item').attr('data-text');
		var text2 =  $(this).parents('.product__item').attr('data-ps');
		var saleBullean = $(this).parents('.product__item').attr('data-sale');

		$('.price__count').find('p').text('1');
		$('.mainhead__photo').attr('src',imgurl);
		$('.tovar__name').text(headtext);
		$('.specblog__brandval').text(brend);
		$('.specblog__creatorval').text(creator);
		$('.specblog__modelval').text(model);
		$('.specblog__artval').text(article);
		$('.specblog__weigval').text(weight);
		$('.specblog__sizeval').text(size);
		$('.desc_textfirst').text(text1);
		$('.desc_textsecond').text(text2);

		if(saleBullean=="true"){
			$('.tovar-sale').removeAttr('id');
			$('.tovar-price').find('p').text($(this).parents('.product__item').find('.saleforjs').find('p').text());
			$('.tovar-sale').find('p').text($(this).parents('.product__item').find('.sale__price').find('p').text());
		}else{
			$('.tovar-sale').attr('id','not--sale');
    		$('.tovar-price').find('p').text($(this).parents('.product__item').find('.saleforjs').find('p').text());
		}

		if(count==0){
			$('.tovar__count').addClass('count__not');
			$('.specblock__button').addClass('not__tovar-btn');
			$('.price__count').find('p').text('0');
		}else{
			$('.tovar__count').removeClass('count__not');
			$('.specblock__button').removeClass('not__tovar-btn');
			$('.tovar__here').find('span').text(count);
		}

		maxcount = count;
		priceforone = $(this).parents('.product__item').find('.saleforjs').find('p').text();
		priceforonesale = $(this).parents('.product__item').find('.sale__price').find('p').text();
		boolsale = saleBullean;
		priceforone = priceforone.replace(/\s+/g, '');
		priceforonesale = priceforonesale.replace(/\s+/g, '');
		priceforone = Number(priceforone);
		priceforonesale = Number(priceforonesale);

		setTimeout(function() {
      	$('.view__window').css({'display':'block'});
		$('.product__view').css({'display':'block'});
		$('body').addClass('no-scroll');
   		}, 500);	
	});

    $('.minus__count').on('click',function(){
			if(!maxcount==0){
				var col1 = $('.price__count').find('p').text();
				col1 = Number(col1);
				if(col1>1){
					col1--;
					$('.price__count').find('p').text(col1);
				}
				if(boolsale=="true"){
					var pricee = priceforone*col1;
					var sale = priceforonesale*col1;
					$('.tovar-price').find('p').text(pricee);
					$('.tovar-sale').find('p').text(sale);
				}else{
					var pricee = priceforone*col1;
					$('.tovar-price').find('p').text(pricee);
				}
			}
		});
		$('.plus__count').on('click',function(){
			if(!maxcount==0){
				var col2 = $('.price__count').find('p').text();
				col2 = Number(col2);
				if(col2<maxcount){
					col2++;
					$('.price__count').find('p').text(col2);
				}
				if(boolsale=="true"){
					console.log(col2);
					console.log(priceforonesale);
					console.log(priceforone);
					var pricee = priceforone*col2;
					var sale = priceforonesale*col2;
					$('.tovar-price').find('p').text(pricee);
					$('.tovar-sale').find('p').text(sale);
				}else{
					var pricee = priceforone*col2;
					$('.tovar-price').find('p').text(pricee);
				}
			}
		});





	$('.clouse__icon, .clousse, .view__window').on('click',function(){
		$('.view__window').css({'display':'none'});
		$('.product__view').css({'display':'none'});
		$('body').removeClass('no-scroll');
	});
});