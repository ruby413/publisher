

	function set(){
		$('.travel').animate({top:'-122px'},1000,function(){
			$('.travel').append($('.travel ul:first'))
			$('.travel').css('top','0px');
		})
	}
	$(document).ready(function(){
			myset=setInterval(set,5000);
		$('.play').click(function(){
			myset=setInterval(set,3000);
		})
		$('.stop').click(function(){
			clearInterval(myset)
		})
	})