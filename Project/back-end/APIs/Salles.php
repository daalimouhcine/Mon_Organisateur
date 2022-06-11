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

       

    }
