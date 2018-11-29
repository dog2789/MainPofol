$(".circle1").click(function(){
    $(".skills").css("display", "table");
    $(".strength").css("display", "none");
    $(".who").css("display", "none");
    $(this).addClass("circle");
    $(".circle2").removeClass("circle");
    $(".circle3").removeClass("circle");
});

$(".circle2").click(function(){
    $(".skills").css("display", "none");
    $(".strength").css("display", "none");
    $(".who").css("display", "block");
    $(this).addClass("circle");
    $(".circle1").removeClass("circle");
    $(".circle1").removeClass("cir-ba");
    $(".circle3").removeClass("circle");
});

$(".circle3").click(function(){
    $(".skills").css("display", "none");
    $(".who").css("display", "none");
    $(".strength").css("display", "block");
    $(this).addClass("circle");
    $(".circle2").removeClass("circle");
    $(".circle1").removeClass("cir-ba");
    $(".circle1").removeClass("circle");
});

$(".ban-tit").each(function(i){
    $(this).stop().delay(i*200).animate({"top":"88%", "opacity":1}, 2000);
});

