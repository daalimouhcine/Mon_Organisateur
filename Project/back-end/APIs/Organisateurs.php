<?php 

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


    class Organisateurs extends Controller {

        public function __construct() {
            $this->organisateurModel = $this->model('Organisateur');
        }

        public function index() {
            // get organisateurs
            $organisateurs = $this->organisateurModel->getOrganisateurs();

            // turn to json and output
            echo json_encode($organisateurs);
        }

        public function add() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // add organisateur
            if($this->organisateurModel->addOrganisateur($data)) {
                echo json_encode(['message' => 'Organisateur added']);
            } else {
                echo json_encode(['message' => 'Organisateur not added']);
            }
        }

        public function update($id) {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // update organisateur
            if($this->organisateurModel->updateOrganisateur($data, $id)) {
                echo json_encode(['message' => 'Organisateur updated']);
            } else {
                echo json_encode(['message' => 'Organisateur not updated']);
            }
        }

        public function delete($id) {
            // delete organisateur
            if($this->organisateurModel->deleteOrganisateur($id)) {
                echo json_encode(['message' => 'Organisateur deleted']);
            } else {
                echo json_encode(['message' => 'Organisateur not deleted']);
            }
        }

        public function getOrganisateur($id) {
            // get organisateur
            $organisateur = $this->organisateurModel->getOrganisateur($id);

            // turn to json and output
            echo json_encode($organisateur);
        }

        public function getOrganisateurByEmail($email) {
            // get organisateur
            $organisateur = $this->organisateurModel->getOrganisateurByEmail($email);

            // turn to json and output
            echo json_encode($organisateur);
        }

    }
