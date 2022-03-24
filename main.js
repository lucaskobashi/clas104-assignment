// JQuery

$(document).ready(function () {

    if (jQuery) {
        alert("it's working!");}

    $("#home").click(function(){
        $('#loadProject').empty();
        $("#loadHome").load("/src/home.html");
    })

    $("#project").click(function(){
        $('#loadHome').empty();
        $("#loadProject").load("/src/project.html");
    })
});