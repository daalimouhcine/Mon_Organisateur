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

        public function index() {
            // get admins
            $admins = $this->adminModel->getAdmins();

            // turn to json and output
            echo json_encode($admins);
        }

        public function add() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // add admin
            if($this->adminModel->addAdmin($data)) {
                echo json_encode(['message' => 'Admin added']);
            } else {
                echo json_encode(['message' => 'Admin not added']);
            }
        }

        public function login() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // get the user by email and then check the password
            $admin = $this->adminModel->getAdminByEmail($data->email);

            // check for user
            if($admin) {
                // check password
                if(password_verify($data->password, $admin->password)) {
                    echo json_encode(['message' => 'Login successful']);
                } else {
                    echo json_encode(['message' => 'Password incorrect']);
                }

            } else {
                echo json_encode(['message' => 'Admin not found']);
            }
        }

    }