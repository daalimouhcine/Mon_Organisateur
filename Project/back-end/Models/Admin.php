<?php

    class Admin extends Database {

        public function __construct() {
            $this->db = new Database();
        }

        public function getAdmins() {
            $query = "SELECT * FROM admins";
            $stmt = $this->db->prepare($query);
            $stmt->execute();
            $admins = $stmt->fetchAll();
            return $admins;
        }

        public function getAdmin($id) {
            $query = "SELECT * FROM admins WHERE id = :id";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $admin = $stmt->fetch();
            return $admin;
        }

        public function getAdminByEmail($email) {
            $query = "SELECT * FROM admins WHERE email = :email";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $admin = $stmt->fetch();
            return $admin;
        }

        public function addAdmin($data) {
            $query = "INSERT INTO admins (nom_utilisateur, email, mot_de_passe) VALUES (:nom_utilisateur, :email, :mot_de_passe)";
            $stmt = $this->db->prepare($query);
            $stmt->bindParam(':nom_utilisateur', $data->nom_utilisateur);
            $stmt->bindParam(':email', $data->email);
            $stmt->bindParam(':mot_de_passe', $data->mot_de_passe);
            $stmt->execute();
            return true;
        }

    }