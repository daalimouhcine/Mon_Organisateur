<?php

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json ; charset=utf-8');
    header("Access-Control-Allow-Methods: *"); 
    header("Access-Control-Max-Age: 600");
    header("Access-Control-Allow-Headers: *");

    class Salles extends Controller {

        public function __construct() {
            $this->salleModel = $this->model('Salle');
        }

        public function getTypes() {
            $types = $this->salleModel->getTypes();
            echo json_encode($types);
        }

        public function addSalle() {
            $data = json_decode(file_get_contents('php://input'));
            $salle = $this->salleModel->addSalle($data);
            echo json_encode($salle);
        }

        public function getSalles() {
            $salles = $this->salleModel->getSalles();
            echo json_encode($salles);
        }

        public function deleteSalle() {
            $id = json_decode(file_get_contents('php://input'));
            $salle = $this->salleModel->deleteSalle($id);
            echo json_encode($salle);
        }

       

    }
