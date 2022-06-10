<?php 


// set headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json ; charset=utf-8');
header("Access-Control-Allow-Methods: *"); 
header("Access-Control-Max-Age: 600");
header("Access-Control-Allow-Headers: *");

class Organisateurs extends Controller {

        public function __construct() {
            $this->organisateurModel = $this->model('Organisateur');
            $this->clientModel = $this->model('Client');

        }

        public function register() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // check if user already exists 
            if($this->organisateurModel->getOrganisateurByCin($data->cin)) {
                echo json_encode(
                    array('error' => 'CIN already exists')
                );
                return;

            } else if($this->organisateurModel->getOrganisateurByNomEntreprise($data->nom_entreprise)) {
                echo json_encode(
                    array('error' => "Nom de l'entreprise already exists")
                );
                return;

            } else if($this->organisateurModel->getOrganisateurByTelephone($data->telephone) || $this->clientModel->getClientByTelephone($data->telephone)) {
                echo json_encode(['error' => 'number already exists']);
                return;

            } else if($this->organisateurModel->getOrganisateurByEmail($data->email) || $this->clientModel->getClientByEmail($data->email)) {
                echo json_encode(['error' => 'email already exists']);
                return;
        
            } else {
                // hash password
                $data->mot_de_passe = password_hash($data->mot_de_passe, PASSWORD_DEFAULT);
                // add client
                if($this->organisateurModel->addOrganisateur($data)) {
                    echo json_encode(['done' => 'Organisateur added']);
                } else {
                    echo json_encode(['error' => 'Organisateur not added please try again']);
                }
            }
        }

        public function login() {
            // get data
            $data = json_decode(file_get_contents('php://input'));
            // get the user by email and then check the password
            $organisateur = $this->organisateurModel->getOrganisateurByEmail($data->email);
        
            // check if the user exists
            if($organisateur) {
                // check if the password is correct
                if(password_verify($data->mot_de_passe, $organisateur->mot_de_passe)) {
                    // delete the password from the user object
                    unset($organisateur->mot_de_passe);
                    echo json_encode(['done' => 'Login successful', 'user' => $organisateur]);
                } else {
                    echo json_encode(['error' => 'Mot de passe est incorrect', 'type' => 'email']);
                }
            } else {
                echo json_encode(['error' => 'Email incorrect', 'type' => 'email']);
            }
            
        }

        public function getAllOrganisateurs() {
            $organisateurs = $this->organisateurModel->getAllOrganisateurs();
            echo json_encode($organisateurs);
        }

        public function changeOrganisateurStatus() {

            // get data
            $data = json_decode(file_get_contents('php://input'));
            echo json_encode($data);

            switch($data->status) {
                case 0:
                    $this->organisateurModel->validateOrganisateur($data->id);
                    echo json_encode('Organisateur accepted');
                    break;
                case 1:
                    $this->organisateurModel->suspendOrganisateur($data->id);
                    echo json_encode('Organisateur suspended');
                    break;
                case -1:
                    $this->organisateurModel->unSuspendOrganisateur($data->id);
                    echo json_encode('Organisateur unsuspend');
                    break;

            }
            

        }




}