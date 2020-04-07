
$("#portfolio-nav").on("click", function(){
    $("#portfolio").css("display","inline")
    $("#home").css("display","none")
    $("#contact").css("display","none")
    $("#resume").css("display","none")
    $("#selected").css("display","none")

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


var projects = [
    {
    name: "Math Quiz Generator",
    source: "assets/images/math-quiz.gif",
    desc: "This website generates a 60 seconds addition quiz for users conditioning their brain to become mathematicians. As the user answers questions, a new one appears. When the user is wrong, 5 seconds are deducted from the timer. Once the timer reaches 0, the quiz ends and the user is prompted to enter their name or initials to be added to the leaderboard.",
},
{
    name: "Loteria",
    source: "dfdf",
    desc: "dsf"
},
{
    name: "Weather Dashboard",
    source: "assets/images/weather-dash.gif",
    desc: "This website is a simple weather dashboard that shows current data and a five day forecast. A user can enter a city and new weather data is populated. Previous searches are stored on the left side bar and users can select any of those city elements to see the weather data for that city. This website uses the Open Weather API."
}
]

for (let i=0 ; i< projects.length; i++){
    var border = $("<div class='box-border'></div>");
    $("#portfolio-examples").append(border);

    var boxTitle = $("<h4 class='box-title'></h4>");
    $(border).append(boxTitle);
    $(boxTitle).text(projects[i].name);


    var image = $("<img class='box-image'/>")
    $(border).append(image);
    $(image).attr("src", projects[i].source);
    $(image).data("key", i);

}


$(".box-image").on("click", function(){
    $("#selected").empty();

    var index = $(this).data("key");
    var text = $("<div class='titles'></div>");
    var boxTitle = $("<h4 class='box-title'></h4>");
    var boxDesc = $("<p class='box-description'></p>")
    var image = $("<img class='expand-image'/>")

    
    $(text).append(boxTitle,boxDesc);
    $(boxTitle).text(projects[index].name);
    $(boxDesc).text(projects[index].desc);
    (image).attr("src", projects[index].source);

    $("#selected").css("display", "inline");
    $("#selected").append(image);
    $("#selected").append(text);


})