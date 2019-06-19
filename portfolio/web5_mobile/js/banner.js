function set(){
		$('.banner ul').animate({left:'-30px'},1000,function(){
			$('.banner ul').append($('.travel ul img:first'))
			$('.banner ul').css('left','0px');
		})
	}
function set_left(){
		$('.banner ul').animate({right:'-33px'},1000,function(){
			$('.banner li').append($('.travel li img:first'))
			$('.banner ul').css('right','0px');
		})
	}
	$(document).ready(function(){
			myset=setInterval(set,2000);
		$('.btn2').click(function(){
			myset=setInterval(set,2000);
		})
		$('.btn1').click(function(){
			//clearInterval(myset)
			setInterval(set_left,2000);
		})
	})