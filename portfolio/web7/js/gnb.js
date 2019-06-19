	$(document).ready(function(){
		var timeout;
		$('.nav').mouseenter(function(){
			$('.gnb_d').slideDown(300);
		})
		$('.gnb_d').mouseleave(function(){
			timeout=setTimeout(function(){
			$('.gnb_d').slideUp(300);			
			},500)
		})
		
		
	
	})

