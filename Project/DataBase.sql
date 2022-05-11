CREATE DATABASE IF NOT EXISTS mon_organisateur;
USE mon_organisateur;

CREATE TABLE IF NOT EXISTS admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS organisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    image_profile VARCHAR(255) NOT NULL,
    sex VARCHAR(255) NOT NULL,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    date_naissance DATE NOT NULL,
    role VARCHAR(255) NOT NULL,
    nom_entreprise VARCHAR(255) NOT NULL,
    suspendu BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    image_profile VARCHAR(255) NOT NULL,
    sex VARCHAR(255) NOT NULL,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    date_naissance DATE NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS salles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    organisateur_id INT NOT NULL,
    ville VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    nombre_places INT NOT NULL,
    type VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    images VARCHAR(255) NOT NULL,
    prix INT NOT NULL,
    FOREIGN KEY (organisateur_id) REFERENCES organisateurs(id)
);

CREATE TABLE IF NOT EXISTS reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    sale_id INT NOT NULL,
    date_reservation VARCHAR(255) NOT NULL,
    date_debut DATE NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (sale_id) REFERENCES sales(id)
);

CREATE TABLE IF NOT EXISTS feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    sale_id INT NOT NULL,
    commentaire VARCHAR(255) NOT NULL,
    date_creation VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id),
    FOREIGN KEY (sale_id) REFERENCES sales(id)
);

CREATE TABLE IF NOT EXISTS app_feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    commentaire VARCHAR(255) NOT NULL,
    rool VARCHAR(255) NOT NULL,
    date_creation VARCHAR(255) NOT NULL
);




