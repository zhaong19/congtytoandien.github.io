<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $companyName = htmlspecialchars($_POST['companyName']);
    $contactPerson = htmlspecialchars($_POST['contactPerson']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $service = htmlspecialchars($_POST['service']);
    $interior = htmlspecialchars($_POST['interior']);
    $note = htmlspecialchars($_POST['note']);

    $to = "ziihao19@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $message = "Company Name: $companyName\n" .
        "Contact Person: $contactPerson\n" .
        "Email: $email\n" .
        "Phone: $phone\n" .
        "Service: $service\n" .
        "Interior: $interior\n" .
        "Note: $note\n";

    $headers = "From: $email\r\n" .
        "Reply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed.";
    }
}
?>