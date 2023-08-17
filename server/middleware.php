<?php
use Firebase\JWT\JWT;

class SpaceXAuthenticationMiddleware {
    private $jwtSecretKey;

    public function __construct($jwtSecretKey) {
        $this->jwtSecretKey = $jwtSecretKey;
    }

    public function authenticateRequest($request) {
        // Get the JWT token from the request headers
        $receivedToken = $request['headers']['Authorization'];

        // Verify and decode the JWT
        try {
            $decodedToken = JWT::decode($receivedToken, $this->jwtSecretKey, array('HS256'));
        } catch (Exception $e) {
            throw new Exception('Unauthorized access');
        }

        // Proceed with authentication
        return $request;
    }
}
?>
