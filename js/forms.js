$(document).ready(function () {


//var form = new FormData(form_aposentado);
    var btn_aposentado = $("#btn-consignado-aposentado");
    btn_aposentado.click(function () {
        var form_aposentado = $("#form-consig-aposentado");
        //console.log(form_aposentado.serializeArray());

        $.ajax({
            url: "email/mail.php",
            type: "post",
            dataType: "json",
            data: {
                acao: "aposentado",
                parametro: form_aposentado.serializeArray()
            },
            success: function (data) {
                console.log(data);
            },
            error: function (data) {
                console.log(data);
            }
        });


        //request.open("post", "./email/mail.php");
        //request.send();
    });



});
