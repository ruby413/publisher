
	$(document).ready(function(){

		$('.box6 > ul').not(':first').hide();
		$('.box6 > h3 > a').click(function(e){
				e.preventDefault();
			$('.box6 > ul').hide();
			$(this).parent().next('ul').show();

			$('.box6 > h3').click(function(){
				$('.box6> h3.on').removeClass('on');
				$(this).addClass('on');
			})
		})
		



		
	})