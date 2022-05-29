function menu() {
    if ($('#menu-cond').val() == 0) {
        $('#menusha').css("display", "flex");
        $('#menu-opener').html("Close");
        $('#menu-cond').val(1);
    } else {
        $('#menusha').css("display", "none");
        $('#menu-opener').html("Menu");
        $('#menu-cond').val(0);
    }
}

function svgPlayer() {
    $("#header_icon-svg").css("width", 100 + "%");
}