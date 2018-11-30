/***** View *****/

$(".view").click(function(){
    alert("준비중입니다 :)");
});

/***** My works *****/

$(".my-works li").hover(function(){
    $(this).children("div").stop().animate({"bottom":0}, 500);
}, function(){
    $(this).children("div").stop().animate({"bottom":"-340px"}, 500);
});  
