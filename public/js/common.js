/***** Common *****/

$("#toggle").click(function(){
    $(".toggle").stop().slideToggle(500);
});

$(".about").hover(function(){
    $(".sm-bar1").stop().animate({"opacity": 1}, 500);}, function(){
        $(".sm-bar1").stop().animate({"opacity": 0});
});

$(".works").hover(function(){
    $(".sm-bar2").stop().animate({"opacity": 1}, 500);}, function(){
        $(".sm-bar2").stop().animate({"opacity": 0});
});

$(".contact").hover(function(){
    $(".sm-bar3").stop().animate({"opacity": 1}, 500);}, function(){
        $(".sm-bar3").stop().animate({"opacity": 0});
});