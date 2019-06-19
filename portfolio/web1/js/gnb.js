	$(document).ready(function(){
		var timeout;
		$('.gnb').mouseenter(function(){
			$('#gnbwrap').slideDown(300);
		})
		$('#gnbwrap').mouseleave(function(){
			timeout=setTimeout(function(){
			$('#gnbwrap').slideUp(300);			
			},500)
		})
		
		
		$('.sub1').mouseenter(function(){
			$('.subwrap1').addClass('color1');
		})
		$('.subwrap1').mouseenter(function(){
			$('.subwrap1').addClass('color1');
		})
		$('.sub1').mouseleave(function(){
			$('.subwrap1').removeClass('color1');
		})
		$('.subwrap1').mouseleave(function(){
			$('.subwrap1').removeClass('color1');
		})
		
		$('.sub2').mouseenter(function(){
			$('.subwrap2').addClass('color2');
		})
		$('.subwrap2').mouseenter(function(){
			$('.subwrap2').addClass('color2');
		})
		$('.sub2').mouseleave(function(){
			$('.subwrap2').removeClass('color2');
		})
		$('.subwrap2').mouseleave(function(){
			$('.subwrap2').removeClass('color2');
		})


		$('.sub3').mouseenter(function(){
			$('.subwrap3').addClass('color3');
		})
		$('.subwrap3').mouseenter(function(){
			$('.subwrap3').addClass('color3');
		})
		$('.sub3').mouseleave(function(){
			$('.subwrap3').removeClass('color3');
		})
		$('.subwrap3').mouseleave(function(){
			$('.subwrap3').removeClass('color3');
			
		})

		$('.sub4').mouseenter(function(){
			$('.subwrap4').addClass('color4');
		})
		$('.subwrap4').mouseenter(function(){
			$('.subwrap4').addClass('color4');
		})
		$('.sub4').mouseleave(function(){
			$('.subwrap4').removeClass('color4');
		})
		$('.subwrap4').mouseleave(function(){
			$('.subwrap4').removeClass('color4');
			
		})

		$('.sub5').mouseenter(function(){
			$('.subwrap5').addClass('color5');
		})
		$('.subwrap5').mouseenter(function(){
			$('.subwrap5').addClass('color5');
		})
		$('.sub5').mouseleave(function(){
			$('.subwrap5').removeClass('color5');
		})
		$('.subwrap5').mouseleave(function(){
			$('.subwrap5').removeClass('color5');
			
		})

		$('.sub6').mouseenter(function(){
			$('.subwrap6').addClass('color6');
		})
		$('.subwrap6').mouseenter(function(){
			$('.subwrap6').addClass('color6');
		})
		$('.sub6').mouseleave(function(){
			$('.subwrap6').removeClass('color6');
		})
		$('.subwrap6').mouseleave(function(){
			$('.subwrap6').removeClass('color6');
			
		})
	})

