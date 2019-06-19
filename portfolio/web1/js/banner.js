var menuWidth=160;
var set;
var isRolling=true;

function auto(){
	$('.banner_nxt').trigger('click');
}


	$(document).ready(function(){
		
		set=setInterval(auto,3000)
		$('.banner_btn > a.banner_prev').click(function(e){
			  e.preventDefault();
			if($('.banner').is(':animated')==false){
				if(isRolling==true){
					clearInterval(set);
					set=setInterval(auto,3000)
				}
			$('.banner').animate({left:'-'+menuWidth+'px'},3000,function(){
				$('.banner').prepend($('.banner li:last'));
				$('.banner').css('left','0px');
			})
			}
		})


		$('.banner_btn > a.banner_nxt').click(function(e){
				 e.preventDefault();
			if($('.banner').is(':animated')==false){
				if(isRolling==true){
					clearInterval(set);
					set=setInterval(auto,3000)
				}
			$('.banner').animate({left:'-'+menuWidth+'px'},3000,function(){
				$('.banner').append($('.banner li:first'));
				$('.banner').css('left','0px');
			})
			}
		})



     $('.banner').hover(function(){
               clearInterval(set);
	 },function(){
				set=setInterval(auto,3000)
		
	})
		
	})