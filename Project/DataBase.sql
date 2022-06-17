CREATE DATABASE IF NOT EXISTS mon_organisateur;
USE mon_organisateur;

CREATE TABLE IF NOT EXISTS admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_utilisateur VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS organisateurs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    cin VARCHAR(255) NOT NULL,
    adresse VARCHAR(255) NOT NULL,
    image_profile VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    status INT NOT NULL,
    nom_entreprise VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    facebook VARCHAR(255),
    twitter VARCHAR(255),
    instagram VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS types (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS salles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    organisateur_id INT NOT NULL,
    titre VARCHAR(255) NOT NULL,
    ville VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    nombre_places INT NOT NULL,
    type_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    images VARCHAR(255) NOT NULL,
    prix INT NOT NULL,
    FOREIGN KEY (organisateur_id) REFERENCES organisateurs (id) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    FOREIGN KEY (type_id) REFERENCES types (id)
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    salle_id INT NOT NULL,
    date VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id) 
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    FOREIGN KEY (salle_id) REFERENCES salles(id)
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    salle_id INT NOT NULL,
    commentaire VARCHAR(255) NOT NULL,
    date_creation VARCHAR(255) NOT NULL,
    FOREIGN KEY (client_id) REFERENCES clients(id)
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    FOREIGN KEY (salle_id) REFERENCES salles(id)
        ON UPDATE CASCADE 
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS app_feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    commentaire VARCHAR(255) NOT NULL,
    rool VARCHAR(255) NOT NULL,
    date_creation VARCHAR(255) NOT NULL
);



