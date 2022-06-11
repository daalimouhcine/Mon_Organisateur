<?php

    class Salle extends Database {

        public function __construct() {
            $this->db = new Database();
        }

        public function getTypes() {
            $this->db->query('SELECT * FROM types');
            $types = $this->db->execute();
            if($types) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }
    }

?>