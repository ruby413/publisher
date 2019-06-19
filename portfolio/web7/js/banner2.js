function set(){
		$('.p2').animate({left:'-801px'},1000,function(){
			$('.p2').append($('#p2 li:first'))
			$('.p2').css('left','0px');
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



