<?php

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


    class Admins extends Controller {

        public function __construct() {
            $this->adminModel = $this->model('Admin');
        }

        public function login() {
            // get data
            $data = json_decode(file_get_contents('php://input'));
            // get the user by email and then check the password
            $admin = $this->adminModel->getAdminByEmail($data->email);

            // check for user
            if($admin) {
                // check password
                if(password_verify($data->mot_de_passe, $admin->mot_de_passe)) {
                    echo json_encode(['done' => 'Login successful', 'user' => $admin]);
                } else {
                    echo json_encode(['error' => 'Password incorrect', 'type' => 'password']);
                }

            } else {
                echo json_encode(['error' => 'Admin not found']);
            }
        }

    }