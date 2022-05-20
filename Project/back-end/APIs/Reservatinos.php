<?php

    // set headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: *');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    class Reservations extends Controller {

        public function __construct() {
            $this->reservationModel = $this->model('Reservation');
        }

        public function index() {
            // get reservations
            $reservations = $this->reservationModel->getReservations();

            // turn to json and output
            echo json_encode($reservations);
        }

        public function add() {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // add reservation
            if($this->reservationModel->addReservation($data)) {
                echo json_encode(['message' => 'Reservation added']);
            } else {
                echo json_encode(['message' => 'Reservation not added']);
            }
        }
        
        public function update($id) {
            // get data
            $data = json_decode(file_get_contents('php://input'));

            // update reservation
            if($this->reservationModel->updateReservation($data, $id)) {
                echo json_encode(['message' => 'Reservation updated']);
            } else {
                echo json_encode(['message' => 'Reservation not updated']);
            }
        }

        public function delete($id) {
            // delete reservation
            if($this->reservationModel->deleteReservation($id)) {
                echo json_encode(['message' => 'Reservation deleted']);
            } else {
                echo json_encode(['message' => 'Reservation not deleted']);
            }
        }

        public function getReservation($id) {
            // get reservation
            $reservation = $this->reservationModel->getReservation($id);

            // turn to json and output
            echo json_encode($reservation);
        }

        public function getReservationsByUser($id) {
            // get reservations
            $reservations = $this->reservationModel->getReservationsByUser($id);

            // turn to json and output
            echo json_encode($reservations);
        }

        public function getReservationsByEvent($id) {
            // get reservations
            $reservations = $this->reservationModel->getReservationsByEvent($id);

            // turn to json and output
            echo json_encode($reservations);
        }

        public function getReservationsByDate($date) {
            // get reservations
            $reservations = $this->reservationModel->getReservationsByDate($date);

            // turn to json and output
            echo json_encode($reservations);
        }

    }