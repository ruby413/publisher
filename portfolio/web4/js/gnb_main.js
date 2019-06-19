$(document).ready(function(){
		var timeout;
		$('nav > ul').mouseenter(function(){
			$(this).find('ul').slideDown(300);
		})
		$('nav > ul').mouseleave(function(){
			timeout=setTimeout(function(){
			$('nav > ul').find('ul').slideUp(300);			
			},1000)
		})

		
	})