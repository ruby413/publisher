function changeItem(num){

$('.btn a.on').removeClass('on');
$('.page a').eq(num).addClass('on');
$('.slide li').hide();
$('.slide li').eq(num).show();

}
function next(){
var temp=$('.page a.on').index()+1;
if(temp>$('.page a').length-1){
temp=0;
}
changeItem(temp)
}

var sid;
$(document).ready(function(){
 sid=setInterval(next,1000)
$('.page a').mouseenter(function(){
clearInterval(sid);
changeItem($(this).index())
})
$('.page a').mouseleave(function(){
sid=setInterval(next,1000)

})


})