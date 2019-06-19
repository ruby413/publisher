function infoAdd(){
		var userName=$('#name').val();
		if(userName==""){
			alert('이름을 입력해 주세요.')
				$('#name').focus();
				return;
		}

		var userPhone=$('#tel').val();
		if(userPhone==""){
			alert('전화번호를 입력해 주세요.')
				$('#tel').focus();
				return;
		}

		var userEmail=$('#email').val();
		if(userEmail==""){
			alert('이메일을 입력해 주세요.')
				$('#email').focus();
				return;
		}

		var userContent=$('#content').val();
		if(userContent==""){
			alert('내용을 입력해 주세요.')
				$('#content').focus();
				return;
		}


}

	$(document).ready(function(){
	 $('.btn').click(function(e){
		e.preventDefault();
			infoAdd();
	 })

	})
