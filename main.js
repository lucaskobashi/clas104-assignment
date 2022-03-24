// JQuery

$("#home").on("click", function(){
    $('#loadProject').empty();
    $("#loadHome").load("/src/home.html");
});

$("#project").on("click", function(){
    $('#loadHome').empty();
    $("#loadProject").load("/src/project.html");
});