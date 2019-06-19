	function tabMenu(tName){
			$(tName+ '>ul').not(':first').hide();
		
		$(tName+ '>h4>a').click(function(e){
				e.preventDefault();
			$(tName+ '>ul').hide();
			
			$(this).parent().next('ul').show();


			$(tName+ '>h4>a').click(function(){
				$(tName+ '>h4>a.on').removeClass('on');
				$(this).addClass('on');
			})
		})
		}
	
	$(document).ready(function(){
		tabMenu('.New');
		tabMenu('.Best');

	})


	$(function(){
		$('.left_b1').click(function(e){
			e.preventDefault();
			$('.n_m').prepend($(".n_m li:last"))
			
		})
		$('.right_b1').click(function(e){
			e.preventDefault();
			$('.n_m').append($(".n_m li:first"))

		})


	})

	$(function(){
		$('.left_b1').click(function(e){
			e.preventDefault();
			$('.n_w').prepend($(".n_w li:last"))
			
		})
		$('.right_b1').click(function(e){
			e.preventDefault();
			$('.n_w').append($(".n_w li:first"))

		})


	})


	$(function(){
		$('.left_b2').click(function(e){
			e.preventDefault();
			$('.b_m').prepend($(".b_m li:last"))
			
		})
		$('.right_b2').click(function(e){
			e.preventDefault();
			$('.b_m').append($(".b_m li:first"))

		})


	})

	$(function(){
		$('.left_b2').click(function(e){
			e.preventDefault();
			$('.b_w').prepend($(".b_w li:last"))
			
		})
		$('.right_b2').click(function(e){
			e.preventDefault();
			$('.b_w').append($(".b_w li:first"))

		})


	})

