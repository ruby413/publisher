$(document).ready(function(){

	var positionLeft;
	
	$('#btnAllMenuOpen, #btnAllMenuClose').bind('click', function(){
		if($('#wrap').css('right')!='-296px'){
			positionLeft='-296px';
		}else{
			positionLeft='0px';
		}	
		if(positionLeft=='-296px'){
			$('#allMenuWrap').show();
		}
		$('#wrap').animate(
			{	
				left:positionLeft
			},
			{	
				duration: 1000, 
				step: function( now, fx ){
					$('#wrap').css('right', now );
				}, 
				complete: function(){
					if(positionLeft=='296px'){
						$('#allMenuWrap').hide();
						$('#btnAllMenuOpen').attr('title', '메뉴열기');
						$('#imgAllMenuOpen').attr('title', '메뉴열기');
						$('#btnAllMenuOpen').focus();
					}else{
						$('#btnAllMenuClose').attr('title', '메뉴닫기');
						$('#imgAllMenuClose').attr('title', '메뉴닫기');
					}
				}
			}
		);
	});
});

//function 2차메뉴
function toggleDepth1MenuGroup(key){
	$('#gnb > ul > li > div').each(function(){
		if($(this).attr('id') == 'depth2MenuList_'+key){
			$(this).slideToggle();
				$(this).parent().find('a').toggleClass('on');

		}else{
			$(this).slideUp();
			$(this).parent().find('a').removeClass('on');
		}
	});
}





