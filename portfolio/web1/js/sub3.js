/*공지사항*/
 var currentNum=0;
 var menuNum=0;
			function init(){
			 var tabDiv=document.getElementById('news');
			var tabH=tabDiv.getElementsByTagName('h4');
			var tabUl=tabDiv.getElementsByTagName('div');

			for(var i=0; i<tabH.length; i++){
			tabH[i].getElementsByTagName('a')[0].num=i
			tabH[i].getElementsByTagName('a')[0].onclick=function(){
				if(currentNum !=this.num){
					tabH[currentNum].className="";
					tabUl[currentNum].className="sub3_contents no";
					tabH[currentNum].getElementsByTagName('img')[0].src="sub3img/sub3_gumi" +(currentNum+1)+ "_off.gif"

					tabH[this.num].className="on";
					tabUl[this.num].className="sub3_contents";
					tabH[this.num].getElementsByTagName('img')[0].src="sub3img/sub3_gumi" +(this.num+1)+ "_on.gif"

					currentNum=this.num;
				}
			
			}
			
		}
		}
	window.onload=init;



