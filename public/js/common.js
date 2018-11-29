/***** Common *****/

$("#toggle").click(function(){
    $(".toggle").stop().slideToggle(500);
});

// $(".about").hover(function(){
//     $(".sm-bar1").stop().animate({"opacity": 1}, 500);}, function(){
//         $(".sm-bar1").stop().animate({"opacity": 0});
// });

// $(".works").hover(function(){
//     $(".sm-bar2").stop().animate({"opacity": 1}, 500);}, function(){
//         $(".sm-bar2").stop().animate({"opacity": 0});
// });

// $(".contact").hover(function(){
//     $(".sm-bar3").stop().animate({"opacity": 1}, 500);}, function(){
//         $(".sm-bar3").stop().animate({"opacity": 0});
// });

$(".tog-in > a").hover(function(){
    $(this).find(".sm-bar1").css({"animation-name":"smbarAni1"});
    $(this).find(".sm-bar2").css({"animation-name":"smbarAni2"});
    $(this).find(".sm-bar3").css({"animation-name":"smbarAni3"});
}, function(){
    $(this).find(".sm-bar1").css({"animation-name":"smbarbackAni1"});
    $(this).find(".sm-bar2").css({"animation-name":"smbarbackAni2"});
    $(this).find(".sm-bar3").css({"animation-name":"smbarbackAni3"});
});

$(".bot-icon > a").hover(function(){
    $(this).find("div").css({"animation-name":"iconAni"})
}, function(){
    $(this).find("div").css({"animation-name":"iconbackAni"})
});