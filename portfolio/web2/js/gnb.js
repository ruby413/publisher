$(document).ready(function(){
		
		$('#gnb > li').mouseenter(function(){
			$(this).addClass('on');
			
		})
		$('#gnb > li').mouseleave(function(){
			$(this).removeClass('on');
			
		})

		
	})