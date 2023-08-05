<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Insert the subscriber data into the MySQL database
    // Replace 'your_username', 'your_password', and 'your_database' with your actual MySQL credentials.
    $conn = mysqli_connect('localhost', 'your_username', 'your_password', 'your_database');
    $query = "INSERT INTO subscribers (email, name) VALUES ('$email', '$name')";
    mysqli_query($conn, $query);

    // Send confirmation email
    $subject = "Subscription Confirmation";
    $message = "Dear $name, \n\nThank you for subscribing to our newsletter!";
    $headers = "From: your_email@example.com"; // Replace with your email address

    // Make sure your server is configured to send emails before using the mail() function.
    // Alternatively, consider using a third-party email service like SendGrid or PHPMailer for advanced email handling.

    if (mail($email, $subject, $message, $headers)) {
        echo "Thank you for subscribing! A confirmation email has been sent to your email address.";
    } else {
        echo "There was an error sending the confirmation email. Please try again later.";
    }
}
?>
