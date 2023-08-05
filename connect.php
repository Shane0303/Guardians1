<?php
// Check if the form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the values from the form
    $Full_name = $_POST["Full name"];
    $Email = $_POST["Email"];
    $Phone_number=$_POST["Phone Number"];
    $Address=$_POST["Address"];




    // Now you can process the form data, such as storing it in a database, sending an email, etc.
    // Example: Storing the data in a MySQL database
    $host = 'localhost';
    $username = 'root';
    $password = 'Shi@14082004';
    $database = 'Hackathon';

    // Create a connection
    $conn = mysqli_connect($host, $username, $password, $database);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Insert the data into the database
    $sql = "INSERT INTO subscribers (Full_name, Email,Phone_number,Address) VALUES ('$Full_name', '$Email','$Phone_number','$Address')";
    if (mysqli_query($conn, $sql)) {
        echo "Data inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Close the connection
    mysqli_close($conn);
}
?>
