// JQuery

$(document).ready(function () {

    $("#home").click(function(){
        $('#loadProject').empty();
        $("#loadHome").load("home.html");
    })

    $("#project").click(function(){
        $('#loadHome').empty();
        $("#loadProject").load("project.html");
    })
});