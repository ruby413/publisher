function set(){
		$('.p1').animate({left:'-100%'},1000,function(){
			$('.p1').append($('#p1 li:first'))
			$('.p1').css('left','0');
		})
	}
	$(document).ready(function(){

			myset=setInterval(set,3500);
		$('.play').click(function(e){
			e.preventDefault();
			myset=setInterval(set,2000);
		})
		$('.stop').click(function(e){
			e.preventDefault();
			clearInterval(myset)
		})
	})



