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

        public function addSalle($data) {
            $this->db->query('INSERT INTO salles (organisateur_id, titre, ville, address, nombre_places, type_id, description, images, prix) VALUES (:organisateur_id, :titre, :ville, :address, :nombre_places, :type_id, :description, :images, :prix)');
            $this->db->bind(':organisateur_id', $data->organisateur_id);
            $this->db->bind(':titre', $data->titre);
            $this->db->bind(':ville', $data->ville);
            $this->db->bind(':address', $data->address);
            $this->db->bind(':type_id', $data->type_id);
            $this->db->bind(':nombre_places', $data->nombre_places);
            $this->db->bind(':description', $data->description);
            $this->db->bind(':images', $data->images);
            $this->db->bind(':prix', $data->prix);
            return $this->db->execute();
        }

        public function getSalles() {
            $this->db->query('SELECT salles.*,organisateurs.nom_entreprise, organisateurs.nom, organisateurs.prenom, organisateurs.image_profile, organisateurs.telephone, organisateurs.email, types.nom AS type FROM salles INNER JOIN organisateurs ON salles.organisateur_id = organisateurs.id INNER JOIN types ON salles.type_id = types.id');
            $salles = $this->db->execute();
            if($salles) {
                return $this->db->resultSet();
            } else {
                return false;
            }
        }

        public function deleteSalle($id) {
            $this->db->query('DELETE FROM salles WHERE id = :id');
            $this->db->bind(':id', $id);
            return $this->db->execute();
        }


    }

?>