$(document).ready(function() {

    var active = true;

    $("header input#mobmenu").change(function() {
        if(active) {
            $("header ul").css("left", "0");
        }else{
            $("header ul").css("left", "-110%");
        }

        active = !active;
    })

})