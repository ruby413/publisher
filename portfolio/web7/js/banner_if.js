var rootHTML = $('html');
function windowResize(){
if(rootHTML.width() >= 1600){
	function set1(){
		$('.p1').animate({left:'-1600px'},1000,function(){
			$('.p1').append($('#p1 li:first'))
			$('.p1').css('left','0px');
		})
	}
	$(document).ready(function(){

			myset=setInterval(set1,3500);
		$('.play').click(function(e){
			e.preventDefault();
			myset=setInterval(set1,2000);
		})
		$('.stop').click(function(e){
			e.preventDefault();
			clearInterval(myset)
		})
	})

}else if(rootHTML.width() <= 1600 && rootHTML.width() >= 800){
	function set1(){
		$('.p1').animate({left:'-1600px'},1000,function(){
			$('.p1').append($('#p1 li:first'))
			$('.p1').css('left','0px');
		})
	}




}else if(rootHTML.width() <= 800 && rootHTML.width() >= 377){
	function set2(){
		$('.p2').animate({left:'-801px'},1000,function(){
			$('.p2').append($('#p2 li:first'))
			$('.p2').css('left','0px');
		})
	}




}else if(rootHTML.width() <= 377){
	function set3(){
		$('.p3').animate({left:'-377px'},1000,function(){
			$('.p3').append($('#p3 li:first'))
			$('.p3').css('left','0px');
		})
	}
	
}
$(document).ready(function(){

			myset=setInterval(set3,3500);
		$('.play').click(function(e){
			e.preventDefault();
			myset=setInterval(set3,2000);
		})
		$('.stop').click(function(e){
			e.preventDefault();
			clearInterval(myset)
		})
	})
}