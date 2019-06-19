//function 2차메뉴
function toggleDepth1MenuGroup(key){
	$('nav > div > ul > li > ul').each(function(){
		if($(this).attr('id') == 'depth2MenuList_'+key){
			$(this).slideToggle();
				$(this).parent().find('a').toggleClass('on');

		}else{
			$(this).slideUp();
			$(this).parent().find('a').removeClass('on');
		}
	});
}