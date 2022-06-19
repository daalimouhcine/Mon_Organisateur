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
            $this->db->query('INSERT INTO reservations (client_id, salle_id, date) VALUES (:clientId, :salleId, :date)');
            $this->db->bind(':clientId', $reservationData->clientId);
            $this->db->bind(':salleId', $reservationData->salleId);
            $this->db->bind(':date', $reservationData->date);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function getReservationsByClient($clientId) {
            $this->db->query('SELECT reservations.*, salles.titre, salles.ville, salles.address, salles.nombre_places, salles.type_id, salles.description, salles.images, salles.prix FROM reservations INNER JOIN salles ON reservations.salle_id = salles.id WHERE reservations.client_id = :clientId ORDER BY reservations.id DESC');
            $this->db->bind(':clientId', $clientId);
            $reservations = $this->db->execute();
            if($reservations) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function deleteReservation($id) {
            $this->db->query('DELETE FROM reservations WHERE id = :id');
            $this->db->bind(':id', $id);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }


    }

?>