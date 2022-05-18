<?php

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');


    class Salles extends Controller {

        public function __construct() {
            $this->salleModel = $this->model('Salle');
        }

        public function index() {
            // get salles
            $salles = $this->salleModel->getSalles();

            // turn to json and output
            echo json_encode($salles);
        }

        public function add() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // add salle
            if($this->salleModel->addSalle($data)) {
                echo json_encode(['message' => 'Salle added']);
            } else {
                echo json_encode(['message' => 'Salle not added']);
            }
        }

        public function update($id) {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // update salle
            if($this->salleModel->updateSalle($data, $id)) {
                echo json_encode(['message' => 'Salle updated']);
            } else {
                echo json_encode(['message' => 'Salle not updated']);
            }
        }

        public function delete($id) {
            // delete salle
            if($this->salleModel->deleteSalle($id)) {
                echo json_encode(['message' => 'Salle deleted']);
            } else {
                echo json_encode(['message' => 'Salle not deleted']);
            }
        }

        public function getSalle($id) {
            // get salle
            $salle = $this->salleModel->getSalle($id);

            // turn to json and output
            echo json_encode($salle);
        }

        public function getSalleByName($name) {
            // get salle
            $salle = $this->salleModel->getSalleByName($name);

            // turn to json and output
            echo json_encode($salle);
        }

        public function getSalleByVille($ville) {
            // get salle
            $salle = $this->salleModel->getSalleByVille($ville);

            // turn to json and output
            echo json_encode($salle);
        }

        public function getSalleByType($type) {
            // get salle
            $salle = $this->salleModel->getSalleByType($type);

            // turn to json and output
            echo json_encode($salle);
        }

        public function getSalleByPrix($prix) {
            // get salle
            $salle = $this->salleModel->getSalleByPrix($prix);

            // turn to json and output
            echo json_encode($salle);
        }

    }
