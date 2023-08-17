<?php
use Firebase\JWT\JWT;

require 'vendor/autoload.php'; // Include the JWT library
// Include other necessary libraries
  header('Access-Control-Allow-Origin: *');
    $user = $_POST['name'];
    // echo ("Hello from server: $user");
// Your JWT secret key
$jwtSecretKey = 'spacex-123467890';

// Generate the token payload
$tokenPayload = array(
    "name" => "Cristos",      // User's name
    "spacex_role" => "full-stack developer", 
    "exp" => time() + 3600 // Token expiration time (1 hour)
);

// Generate the JWT token
$token = JWT::encode($tokenPayload, $jwtSecretKey, 'HS256');

// Send the token as the response
// echo ("token: $token");
 echo ($token);
?>
