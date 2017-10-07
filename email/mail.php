<?php
 $getpost = filter_input_array(INPUT_POST, FILTER_DEFAULT);


 /**Variáveis locais**/
$Erro = true;
//$nome = $GetPost['name'];
//$email = $GetPost['email'];
$parametro = $getpost['parametro'];
$acao = $getpost['acao'];

$nome = $parametro[0]['value'];
$email = $parametro[1]['value'];
$celular = $parametro[2]['value'];
$valor = $parametro[3]['value'];
$Nparcelas = $parametro[4]['value'];

//echo json_encode($Nparcelas);
$emaill = "contato@vizzarconsultoria.com";

/*** Incluir a classe PHPMailer **/
include_once $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/class.smtp.php';
include_once $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/class.phpmailer.php';
// Caminho da biblioteca PHPMailer
require_once $_SERVER['DOCUMENT_ROOT'].'/libs/phpmailer/PHPMailerAutoload.php';
//Enviando o e-mail utilizando a classe PHPMailer

    $Mailer = new PHPMailer;
    $Mailer->CharSet = "utf8";
    $Mailer->SMTPDebug = 3;

// Configura para envio de e-mails usando SMTP
    $Mailer->isSMTP();

// Servidor SMTP
    $Mailer->Host = "mail.vizzarconsultoria.com";

// Usar autenticação SMTP
    $Mailer->SMTPAuth = true;

// Usuário da conta
    $Mailer->Username = "contato@vizzarconsultoria.com";

// Senha da conta
    $Mailer->Password = "vizzar1008";

// Tipo de encriptação que será usado na conexão SMTP
    $Mailer->SMTPSecure = "ssl";

// Porta do servidor SMTP
    $Mailer->Port = 26;

// Nome do Remetente
    $Mailer->FromName = "Vizzar";

// Email do Remetente
    $Mailer->From = "contato@vizzarconsultoria.com";

// Endereço do e-mail do destinatário
    $Mailer->addAddress("contato@vizzarconsultoria.com");

// Informa se vamos enviar mensagens usando HTML
    $Mailer->isHTML(true);
    //Titulo do email // Assunto do e-mail
    $Mailer->Subject = "Novo e-mail da vizzar".date("H:i").date("d/m/Y");
    //Corpo do email // Mensagem que vai no corpo do e-mail
    $Mailer->Body = "Email enviado pela vizzar consultoria ";

    /** Verificação */

   if($Mailer->send()){
        $Erro = false;
    }

//var_dump($Erro);

