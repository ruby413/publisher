function changeItem(num){

$('.btn a.on_btn').removeClass('on_btn');
$('.btn a').eq(num).addClass('on_btn');
$('.banner li').hide();
$('.banner li').eq(num).show();

}
function next(){
var temp=$('.btn a.on_btn').index()+1;
//alert(temp);
if(temp>$('.btn a').length-1){
temp=0;
}
changeItem(temp)
}

var sid;
$(document).ready(function(){
 sid=setInterval(next,4000)
$('.btn a').mouseenter(function(){
clearInterval(sid);
changeItem($(this).index())
})
$('.btn a').mouseleave(function(){
sid=setInterval(next,4000)

})


})