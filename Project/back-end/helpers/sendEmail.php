<?php
//phpMailer
require __DIR__.'/../PHPMailer/PHPMailer.php';
require __DIR__.'/../PHPMailer/SMTP.php';
require __DIR__.'/../PHPMailer/Exception.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

function sendEmail($patientData) {
    $mail = new PHPMailer(true); 
    
    $body="Thank you for your registration. Your reservation is confirmed with the following info :
        Personal ID : $patientData[id]
        Name: $patientData[first_name] $patientData[last_name].
        Email: $patientData[email].
        Birth Date: $patientData[birth_date].
        Don't forget the ID to log in to your account.";
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth= "true";
    $mail->SMTPSecure = "tls";
    $mail->port="587";
    $mail->Username = "paymenttest1900@gmail.com";
    $mail->Password = "abdelhaq1999";
    // $mail->Subject = "test test allah allah";
    $mail->setFrom("paymenttest1900@gmail.com");
    $mail->Body = "$body";
    $mail->addAddress($patientData['email']);//sent To
    $mail->Send() ;
    $mail->smtpClose();
}