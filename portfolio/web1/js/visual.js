/*공지사항*/
 var currentNum=0;
 var menuNum=0;
			function init(){
			 var tabDiv=document.getElementById('news');
			var tabH=tabDiv.getElementsByTagName('h3');
			var tabUl=tabDiv.getElementsByTagName('ul');

			for(var i=0; i<tabH.length; i++){
			tabH[i].getElementsByTagName('a')[0].num=i
			tabH[i].getElementsByTagName('a')[0].onclick=function(){
				if(currentNum !=this.num){
					tabH[currentNum].className="";
					tabUl[currentNum].className="newslist no";
					tabH[currentNum].getElementsByTagName('img')[0].src="mainimg/Gonggi" +(currentNum+1)+ "_off.gif"

					tabH[this.num].className="on";
					tabUl[this.num].className="newslist";
					tabH[this.num].getElementsByTagName('img')[0].src="mainimg/Gonggi" +(this.num+1)+ "_on.gif"

					currentNum=this.num;
				}
			
			}
			
		}
		}
	window.onload=init;



