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

            } else if($this->organisateurModel->getOrganisateurByTelephone($data->telephone)) {
                echo json_encode(['error' => 'number already exists']);
                return;

            } else if($this->organisateurModel->getOrganisateurByEmail($data->email)) {
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





}