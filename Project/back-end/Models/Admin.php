<?php

    class Admin extends Database {

        public function __construct() {
            $this->db = new Database();
        }

        public function getAdminByEmail($email) {
            $this->db->query('SELECT * FROM admins WHERE email = :email');
            $this->db->bind(':email', $email);
            if($this->db->execute()) {
                return $this->db->single();
            } else {
                return false;
            }
        }


    }