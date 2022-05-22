<?php 

    class Client extends Database {
        
        public function __construct() {
            $this->db = new Database();
        }

        public function addClient($data) {
            // Prepare Query
            $this->db->query('INSERT INTO clients (nom, prenom, image_profile, nom_utilisateur, email, mot_de_passe, telephone, role) VALUES (:nom, :prenom, :image_profile, :nom_utilisateur, :email, :mot_de_passe, :telephone, :role)');
            
            // Bind Data
            $this->db->bind(':nom', $data->nom);
            $this->db->bind(':prenom', $data->prenom);
            $this->db->bind(':image_profile', $data->image_profile);
            $this->db->bind(':nom_utilisateur', $data->nom_utilisateur);
            $this->db->bind(':email', $data->email);
            $this->db->bind(':mot_de_passe', $data->mot_de_passe);
            $this->db->bind(':telephone', $data->telephone);
            $this->db->bind(':role', $data->role);
            
            // Execute Query
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }
        
        public function getClients() {
            $this->db->query('SELECT * FROM clients');
            if($this->db->execute()) {
                return $this->db->resultSet();
                
            } else {
                return false;
            }
       }

       public function getOneClient($id) {
            $this->db->query('SELECT * FROM clients WHERE id = :id');
            $this->db->bind(':id', $id);
            if($this->db->execute()) {
                return $this->db->resultSet();

            } else {
                return false;
            }
       }

        public function getClientByEmail($email) {
            $this->db->query('SELECT * FROM clients WHERE email = :email');
            $this->db->bind(':email', $email);
            if($this->db->execute()) {
                return $this->db->single();

            } else {
                return false;
            }
        }

        public function getClientByTelephone($telephone) {
            $this->db->query('SELECT * FROM clients WHERE telephone = :telephone');
            $this->db->bind(':telephone', $telephone);
            if($this->db->execute()) {
                return $this->db->resultSet();

            } else {
                return false;
            }
        }

        public function updateClient($data, $id) {
            // Prepare Query
            $this->db->query('UPDATE clients SET nom = :nom, prenom = :prenom, image_profile = :image_profile, nom_utilisateur = :nom_utilisateur, email = :email, mot_de_passe = :mot_de_passe, telephone = :telephone, role = :role WHERE id = :id');
            
            // Bind Data
            $this->db->bind(':nom', $data->nom);
            $this->db->bind(':prenom', $data->prenom);
            $this->db->bind(':image_profile', $data->image_profile);
            $this->db->bind(':nom_utilisateur', $data->nom_utilisateur);
            $this->db->bind(':email', $data->email);
            $this->db->bind(':mot_de_passe', $data->mot_de_passe);
            $this->db->bind(':telephone', $data->telephone);
            $this->db->bind(':role', $data->role);
            $this->db->bind(':id', $id);

            // Execute Query
            if($this->db->execute()) {
                return true;
            } else {
                return false;
            }
        }

        public function deleteClient($id) {
            $this->db->query('DELETE FROM clients WHERE id = :id');
            $this->db->bind(':id', $id);
            if($this->db->execute()) {
                return true;

            } else {
                return false;
            }
        }


}