	$(function(){
		/*$('.navi ul').hide();
		$('.navi ul').eq(0).show();*/
		$('.list:not(:eq(2))').hide();
		$('.title').click(function(){
			if($(this).next().css('display')=='none')
			{
			$('.list').slideUp(1000);
			}
			$(this).next().slideDown(1000);
			//$('.list').hide();
			//$(this).next().show();
		})
	})