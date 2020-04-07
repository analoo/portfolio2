
$("#portfolio-nav").on("click", function(){
    $("#portfolio").css("display","inline")
    $("#home").css("display","none")
    $("#contact").css("display","none")
    $("#resume").css("display","none")
})

$("#home-nav").on("click", function(){
    $("#home").css("display","inline")
    $("#portfolio").css("display","none")
    $("#contact").css("display","none")
    $("#resume").css("display","none")
})

$("#contact-nav").on("click", function(){
    $("#contact").css("display","inline")
    $("#portfolio").css("display","none")
    $("#home").css("display","none")
    $("#resume").css("display","none")
})


$("#resume-nav").on("click", function(){
    $("#resume").css("display","inline")
    $("#portfolio").css("display","none")
    $("#home").css("display","none")
    $("#contact").css("display","none")
})


