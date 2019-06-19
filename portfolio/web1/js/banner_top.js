function changeItem(num){

$('.btn_pop a.on').removeClass('on');
$('.btn_pop a').eq(num).addClass('on');
$('.bann li').hide();
$('.bann li').eq(num).show();

}
function next(){
var temp=$('.btn_pop a.on').index()+1;
if(temp>$('.btn_pop a').length-1){
temp=0;
}
changeItem(temp)
}

var sid;
$(document).ready(function(){
 sid=setInterval(next,3000)
$('.btn_pop a').mouseenter(function(){
clearInterval(sid);
changeItem($(this).index())
})
$('.btn_pop a').mouseleave(function(){
sid=setInterval(next,3000)

})


})