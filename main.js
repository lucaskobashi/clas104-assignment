// JQuery

$(document).ready(function () {

    $("#home").click(function(){
        $('#loadProject').empty();
        $("#loadHome").load("/src/home.html");
    })

    $("#project").click(function(){
        $('#loadHome').empty();
        $("#loadProject").load("/src/project.html");
    })
});