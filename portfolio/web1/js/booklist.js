	$(function(){
		$('.next1').click(function(e){
			e.preventDefault();
			$('.book1').append($(".book1 li:first"))
		})
		$('.prev1').click(function(e){
				e.preventDefault();
			$('.book1').prepend($(".book1 li:last"))

		})


	})

	$(function(){
		$('.next2').click(function(e){
			e.preventDefault();
			$('.book2').append($(".book2 li:first"))
		})
		$('.prev2').click(function(e){
				e.preventDefault();
			$('.book2').prepend($(".book2 li:last"))

		})


	})

	$(function(){
		$('.next3').click(function(e){
			e.preventDefault();
			$('.book3').append($(".book3 li:first"))
		})
		$('.prev3').click(function(e){
				e.preventDefault();
			$('.book3').prepend($(".book3 li:last"))

		})


	})