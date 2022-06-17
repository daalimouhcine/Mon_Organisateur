<?php

    class Reservation extends Database {
        
        public function __construct() {
            $this->db = new Database();
        }

        public function getReservationDates($salleId) {
            $this->db->query('SELECT date from reservations WHERE salle_id = :salleId');
            $this->db->bind(':salleId', $salleId);
            $dates = $this->db->execute();
            if($dates) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function reserveSalle($reservationData) {
            $this->db->query('INSERT INTO reservations (client_id, salle_id, date) VALUES (clientId, :salleId, :date)');
            $this->db->bind(':clientId', $reservationData->clientId);
            $this->db->bind(':salleId', $reservationData->salleId);


    }

?>