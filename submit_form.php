<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form input
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $message = trim($_POST['message']);
    
    if(empty($name) || empty($email) || empty($message)) {
        die("Please fill in all required fields.");
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address.");
    }
    
    // Set the recipient email address (replace with your email)
    $to = "aalimrizvi07861@gmail.com";  // Update with your email address
    $subject = "Contact Form Submission from $name";
    $body = "You have received a new message from your contact form.\n\n".
            "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message\n";
    
    // Additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Try to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us, $name. We will get back to you soon.";
    } else {
        echo "There was an error sending your message. Please try again later.";
    }
} else {
    // If not a POST request, redirect back to the contact page
    header("Location: contact.html");
    exit();
}
?>
