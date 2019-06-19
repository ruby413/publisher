
	$(document).ready(function(){

		$('#news > ul').not(':first').hide();
		$('#news> h3 > a').click(function(e){
				e.preventDefault();
			$('#news>ul').hide();
			$('#news> .book_pn').hide();
			$(this).parent().next('ul').show();
			$(this).parent().prev('.book_pn').show();

			$('#news > h3 > a > img').each(function(){
				$(this).attr('src',$(this).attr('src').replace('_on.gif','_off.gif'))
			})
			$('>img',this).attr('src',$('>img',this).attr('src').replace('_off.gif','_on.gif'))
		})
		




        $('#contents2 > div').not(':first').hide();
		$('#contents2> h3 > a').click(function(e){
				e.preventDefault();
			$('#contents2>div').hide();
			$(this).parent().next('div').show();
			$('#contents2> h3 > a > img').each(function(){
				$(this).attr('src',$(this).attr('src').replace('_on.gif','_off.gif'))
			})
			$('>img',this).attr('src',$('>img',this).attr('src').replace('_off.gif','_on.gif'))
		})

		
	})