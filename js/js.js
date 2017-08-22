/**
 * Created by Filipe Macel on 11/08/2017.
 */

$(document).ready(function () {
    var submenu = $("#submenu-mobile");

    $("#submenu-mobile").click(function(e) {
        if($(this).is(':checked')) {
            //alert("CheckBox marcado.");
            //$(".submenu").css("display", "block");
            $(".submenu").css("left", "0");
        }else {
            $(".submenu").css("left", "-100%");
            //alert("CheckBox desmarcado.");
            //$(".submenu").css("display", "none");
        }
    });



    var link = $(".menu-mobile").find("a");
    link.click(function () {
        $("#mobile-check").prop("checked", false);
        $(".submenu").css("left", "-100%");
        $(".conteiner-mobile").css("left","-100%");
        $("#submenu-mobile").prop("checked", false);
        $(".mobile-bg-menu").css("display","none");
    });

    var iconeMenu = $("#mobile-check");
    iconeMenu.click(function () {
        if($(this).is(":checked")){
            $(".icone-cabecalho:before").css("transform", "rotate(25deg)");
            //$(".icone-cabecalho").css("visibility", "hidden");
            $(".conteiner-mobile").css("left","0");
            $(".mobile-bg-menu").css("display","block");
        }else{
            $(".conteiner-mobile").css("left","-100%");
            $(".mobile-bg-menu").css("display","none");
        }
    });




});
