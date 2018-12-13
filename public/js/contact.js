/***** Main *****/

$(".sec-main-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});

$(".sec-sub-tit > li").each(function(i){
	$(this).stop().delay(i*200).animate({"left":0, "opacity":1}, 1500);
});