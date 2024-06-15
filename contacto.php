<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibe los datos del formulario
    $nombre = $_POST['nombrecompleto'];
    $empresa = $_POST['nombreempresa'];
    $correo = $_POST['correoelectronico'];
    $telefono = $_POST['numero'];
    $comentarios = $_POST['comen'];

    // Destinatario del correo
    $destinatario = "sofia_051200@hotmail.com";

    // Asunto del correo
    $asunto = "Formulario de contacto";

    // Construye el cuerpo del correo
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Empresa: $empresa\n";
    $mensaje .= "Correo Electrónico: $correo\n";
    $mensaje .= "Teléfono: $telefono\n";
    $mensaje .= "Comentarios:\n$comentarios\n";

    // Envía el correo
    mail($destinatario, $asunto, $mensaje);

    // Redirige de vuelta a la página de contacto
    header("Location: contacto.html");
    exit();
}
?>