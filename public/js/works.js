/***** Main *****/

$(".sec-main-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});

$(".sec-sub-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});

/***** View *****/

$(".view").click(function(){
    alert("준비중입니다 :)");
});

/***** My works *****/

$(".my-works > li > a").hover(function(){
    $(this).children("div").stop().animate({"bottom":0}, 500);
}, function(){
    $(this).children("div").stop().animate({"bottom":"-340px"}, 500);
});  

