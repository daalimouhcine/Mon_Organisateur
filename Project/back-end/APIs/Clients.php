<?php 

// set headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json ; charset=utf-8');
header("Access-Control-Allow-Methods: *"); 
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers: *");

class Clients extends Controller {

        public function __construct() {
            $this->clientModel = $this->model('Client');
        }
        
        public function register() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // check if user already exists 
            if($this->clientModel->getClientByEmail($data->email)) {
                echo json_encode(['error' => 'email already exists']);
                return;
                
            } else if($this->clientModel->getClientByTelephone($data->telephone)) {
                echo json_encode(['error' => 'number already exists']);
                return;
        
            } else {
                // hash password
                $data->mot_de_passe = password_hash($data->mot_de_passe, PASSWORD_DEFAULT);
                // add client
                if($this->clientModel->addClient($data)) {
                    echo json_encode(['done' => 'Client added']);
                } else {
                    echo json_encode(['error' => 'Client not added please try again']);
                }
            }
        }
        
        public function login() {
            // get data
            $data = json_decode(file_get_contents('php://input'));
            // get the user by email and then check the password
            $client = $this->clientModel->getClientByEmail($data->email);
        
            // check if the user exists
            if($client) {
                // check if the password is correct
                if(password_verify($data->mot_de_passe, $client->mot_de_passe)) {
                    // delete the password from the user object
                    unset($client->mot_de_passe);
                    echo json_encode(['done' => 'Login successful', 'user' => $client]);
                } else {
                    echo json_encode(['error' => 'Password incorrect']);
                }
            } else {
                echo json_encode(['error' => 'Email incorrect']);
            }
            
        }

        public function getAll() {
            // get clients
            $clients = $this->clientModel->getClients();

            // turn to json and output
            echo json_encode($clients);
        }

        public function update($id) {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // update client
            if($this->clientModel->updateClient($data, $id)) {
                echo json_encode(['message' => 'Client updated']);
            } else {
                echo json_encode(['message' => 'Client not updated']);
            }
        }

        public function delete($id) {
            // delete client
            if($this->clientModel->deleteClient($id)) {
                echo json_encode(['message' => 'Client deleted']);
            } else {
                echo json_encode(['message' => 'Client not deleted']);
            }
        }

        public function getClient($id) {
            // get client
            $client = $this->clientModel->getClient($id);

            // turn to json and output
            echo json_encode($client);
        }

        public function getClientByEmail($email) {
            // get client
            $client = $this->clientModel->getClientByEmail($email);

            // turn to json and output
            echo json_encode($client);
        }

        public function getClientByPhone($phone) {
            // get client
            $client = $this->clientModel->getClientByPhone($phone);

            // turn to json and output
            echo json_encode($client);
        }


    }