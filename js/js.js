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
            $("#submenu-mobile").prop("checked", false);
            $(".submenu").css("left", "-100%");
        }
    });


    var modalInfo = $("#modal");
    modalInfo.click(function () {
        var classe = $(this).attr('id');
        console.log(classe);
        if($(this).is(":checked")){
            $(".modal-conteiner").fadeIn(300);
            $(".modal-conteiner").css("display", "flex");
            pauseSlideFinan = true;
        }else{
            pauseSlideFinan = false;
            $(".modal-conteiner").css("display", "none");
            $(".modal-conteiner").fadeOut(300);
        }
    });

    //Texto Mais informações de Minha Casa Minha Vida
    $("#mais-info-mcmv").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-mcmv").css("display","block");
    });

    //Texto mais informações de reforma
    $("#mais-info-reforma").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-reforma").css("display","block");
    });

    //Texto mais informações de Terreno e Construção
    $("#mais-info-terreno-construcao").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-tereno-construcao").css("display","block");
    });

    //Texto mais informações de Terreno Próprio
    $("#mais-info-terreno-proprio").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-tereno-proprio").css("display","block");
    });

    //Texto mais informações de SBPE
    $("#mais-info-sbpe").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-sbpe").css("display","block");
    });

    //Texto mais informações de Empréstimo Pessoal
    $("#mais-info-emp-pessoal").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-emp-pessoal").css("display","block");
    });

    //Texto mais informações de Seguro de Vida
    $("#mais-info-seguro").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-seguro").css("display","block");
    });

    //Texto mais informações de Abertura de Conta
    $("#mais-info-abert-conta").click(function () {
        $(".modal-text").css("display","none");
        $(".modal-text-abert-conta").css("display","block");
    });
});
