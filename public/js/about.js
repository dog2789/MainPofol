$(".circle1").click(function(){
    $(".skills").css("display", "table");
    $(".strength").css("display", "none");
    $(".who").css("display", "none");
});

$(".circle2").click(function(){
    $(".skills").css("display", "none");
    $(".strength").css("display", "none");
    $(".who").css("display", "block");
});

$(".circle3").click(function(){
    $(".skills").css("display", "none");
    $(".who").css("display", "none");
    $(".strength").css("display", "block");
});

