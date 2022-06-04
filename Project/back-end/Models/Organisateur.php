<?php

    class Organisateur extends Database {

        public function __construct() {
            $this->db = new Database();
        }

        public function addOrganisateur($data) {
            // Prepare Query
            $this->db->query('INSERT INTO organisateurs (nom, prenom, image_profile, email, mot_de_passe, telephone, cin, nom_entreprise, adresse, facebook, twitter, instagram, status, role) VALUES (:nom, :prenom, :image_profile, :nom_entreprise, :email, :mot_de_passe, :telephone, :cin, :adresse, :facebook, :twitter, :instagram, :status, :role)');

            // Bind Data
            $this->db->bind(':nom', $data->nom);
            $this->db->bind(':prenom', $data->prenom);
            property_exists($data, 'image_profile') ? $this->db->bind(':image_profile', $data->image_profile) : $this->db->bind(':image_profile', 'default.png');
            $this->db->bind(':nom_entreprise', $data->nom_entreprise);
            $this->db->bind(':email', $data->email);
            $this->db->bind(':mot_de_passe', $data->mot_de_passe);
            $this->db->bind(':telephone', $data->telephone);
            $this->db->bind(':cin', $data->cin);
            $this->db->bind(':nom_entreprise', $data->nom_entreprise);
            $this->db->bind(':adresse', $data->adresse);
            $this->db->bind(':facebook', $data->facebook);
            $this->db->bind(':twitter', $data->twitter);
            $this->db->bind(':instagram', $data->instagram);
            $this->db->bind(':status', 0);
            $this->db->bind(':role', 'organisateur');

            // Execute Query
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function getOrganisateurs() {
            $this->db->query('SELECT * FROM organisateurs');
            if($this->db->execute()) {
                return $this->db->resultSet();

            } else {
                return false;
            }
        }

        public function getOrganisateurByEmail($email) {
            $this->db->query('SELECT * FROM organisateurs WHERE email = :email');
            $this->db->bind(':email', $email);
            if($this->db->execute()) {
                return $this->db->single();

            } else {
                return false;
            }
        }



        public function getOrganisateurByTelephone($telephone) {
            $this->db->query('SELECT * FROM organisateurs WHERE telephone = :telephone');
            $this->db->bind(':telephone', $telephone);
            if($this->db->execute()) {
                return $this->db->single();

            } else {
                return false;
            }
        }

        public function getOrganisateurByCin($cin) {
            $this->db->query('SELECT * FROM organisateurs WHERE cin = :cin');
            $this->db->bind(':cin', $cin);
            if($this->db->execute()) {
                return $this->db->single();

            } else {
                return false;
            }
        }

        public function getOrganisateurByNomEntreprise($nom_entreprise) {
            $this->db->query('SELECT * FROM organisateurs WHERE nom_entreprise = :nom_entreprise');
            $this->db->bind(':nom_entreprise', $nom_entreprise);
            if($this->db->execute()) {
                return $this->db->single();

            } else {
                return false;
            }
        }



    }