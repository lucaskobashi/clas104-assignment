// JQuery

$("#home").on("click", function(){
    $('#loadProject').empty();
    $("#loadHome").load("home.html");
});

$("#project").on("click", function(){
    $('#loadHome').empty();
    $("#loadProject").load("project.html");
});