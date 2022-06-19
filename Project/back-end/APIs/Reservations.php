<?php

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json ; charset=utf-8');
    header("Access-Control-Allow-Methods: *"); 
    header("Access-Control-Max-Age: 600");
    header("Access-Control-Allow-Headers: *");

    
    class Reservations extends Controller {

        public function __construct() {
            $this->reservationModel = $this->model('Reservation');
        }

        public function reserveSalle() {
            $reservationData = json_decode(file_get_contents('php://input'));
            $response = $this->reservationModel->reserveSalle($reservationData);
            if($response) {
                echo json_encode('done');
            } else {
                echo json_encode('error');
            }
        }

        public function getReservationDates() {
            $salleId = json_decode(file_get_contents('php://input'));
            $dates = $this->reservationModel->getReservationDates($salleId);
            echo json_encode($dates);
       }

       public function getReservationsByClient() {
        $clientId = json_decode(file_get_contents('php://input'));
        $reservations = $this->reservationModel->getReservationsByClient($clientId);
        echo json_encode($reservations);
       }

       public function deleteReservation() {
        $reservationId = json_decode(file_get_contents('php://input'));
        $response = $this->reservationModel->deleteReservation($reservationId);
        echo json_encode($response);

       }
    }