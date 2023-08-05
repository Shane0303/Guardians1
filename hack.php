<?php
// Replace 'your_host', 'your_username', 'your_password', and 'your_database' with your actual MySQL credentials.
$host = 'Hack';
$username = 'root';
$password = 'Shi@14082003';
$database = 'Hackathon';

// Create a connection
$conn = mysqli_connect($host, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Connection successful. You can now execute queries.
?>
