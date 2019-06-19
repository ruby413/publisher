$(function(){
		/*$('.navi ul').hide();
		$('.navi ul').eq(0).show();*/
		$('.list').hide();
		$('.bgm').click(function(){
			if($(this).next().css('display')=='none')
			{
			$('.list').slideUp(500);
			}
			$(this).next().slideToggle(500);
			//$('.list').hide();
			//$(this).next().show();
		})
	})