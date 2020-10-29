$(document).ready(function(){
    $("#hide").click(function(){
        $("#element").hide(1000, function(){
            alert("NO AMIGO LO MATASTE")
        })
    });

    $("#show").click(function(){
        $("#element").show(1000, function(){
            alert("HEY lo encontrate :V")
        })
    });

});