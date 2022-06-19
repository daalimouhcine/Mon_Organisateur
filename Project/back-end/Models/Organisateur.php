<?php 


    class Organisateur extends Database {
        
        public function __construct() {
            $this->db = new Database();
        }

        
        public function addOrganisateur($data) {
            // prepare the query
            $this->db->query('INSERT INTO organisateurs (nom, prenom, cin, adresse, image_profile, email, mot_de_passe, telephone, status, nom_entreprise, role, facebook, twitter, instagram) VALUES (:nom, :prenom, :cin, :adresse, :image_profile, :email, :mot_de_passe, :telephone, :status, :nom_entreprise, :role, :facebook, :twitter, :instagram)');

            // bind data
            $this->db->bind(':nom', $data->nom);
            $this->db->bind(':prenom', $data->prenom);
            $this->db->bind(':cin', $data->cin);
            $this->db->bind(':adresse', $data->adresse);
            $this->db->bind(':image_profile', $data->image_profile);
            $this->db->bind(':email', $data->email);
            $this->db->bind(':mot_de_passe', $data->mot_de_passe);
            $this->db->bind(':telephone', $data->telephone);
            $this->db->bind(':status', 0);
            $this->db->bind(':nom_entreprise', $data->nom_entreprise);
            $this->db->bind(':role', "organisateur");
            $this->db->bind(':facebook', $data->facebook);
            $this->db->bind(':twitter', $data->twitter);
            $this->db->bind(':instagram', $data->instagram);
            
            // execute the query
            if($this->db->execute()) {
                return true;
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

        public function getAllOrganisateurs() {
            $this->db->query('SELECT * FROM organisateurs ORDER BY id DESC');
            if($this->db->execute()) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function getOrganisateurById($id) {
            $this->db->query('SELECT * FROM organisateurs WHERE id = :id');
            $this->db->bind(':id', $id);
            if($this->db->execute()) {
                return $this->db->single();
            } else {
                return false;
            }
        }

        public function updateOrganisateur($data) {
            $this->db->query('UPDATE organisateurs SET nom = :nom, prenom = :prenom, cin = :cin, adresse = :adresse, email = :email, telephone = :telephone, nom_entreprise = :nom_entreprise, facebook = :facebook, twitter = :twitter, instagram = :instagram WHERE id = :id');
            $this->db->bind(':id', $data->id);
            $this->db->bind(':nom', $data->nom);
            $this->db->bind(':prenom', $data->prenom);
            $this->db->bind(':cin', $data->cin);
            $this->db->bind(':adresse', $data->adresse);
            $this->db->bind(':email', $data->email);
            $this->db->bind(':telephone', $data->telephone);
            $this->db->bind(':nom_entreprise', $data->nom_entreprise);
            $this->db->bind(':facebook', $data->facebook);
            $this->db->bind(':twitter', $data->twitter);
            $this->db->bind(':instagram', $data->instagram);
            if($this->db->execute()) {
                return $this->getOrganisateurById($data->id);
            } else {
                return false;
            }
        }
            

        public function validateOrganisateur($orgId) {
            $this->db->query('UPDATE organisateurs SET status = 1 WHERE id = :id');
            $this->db->bind(':id', $orgId);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function suspendOrganisateur($orgId) {
            $this->db->query('UPDATE organisateurs SET status = -1 WHERE id = :id');
            $this->db->bind(':id', $orgId);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function unSuspendOrganisateur($orgId) {
            $this->db->query('UPDATE organisateurs SET status = 1 WHERE id = :id');
            $this->db->bind(':id', $orgId);
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }



    }