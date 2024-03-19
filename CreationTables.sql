-- Creer la base de donnees
DROP DATABASE IF EXISTS `projetolympiadls`;
CREATE DATABASE IF NOT EXISTS `projetolympiadls`
CHARACTER SET utf8 COLLATE utf8mb3_general_ci;

USE `projetolympiadls`;

-- Supprimer les tables existantes (si elles existent)
DROP TABLE IF EXISTS Jeux;
DROP TABLE IF EXISTS Plannings;
DROP TABLE IF EXISTS Utilisateurs;
DROP TABLE IF EXISTS Equipes;
DROP TABLE IF EXISTS Pool;
Drop TABLE IF EXISTS Sections;
Drop TABLE IF EXISTS Horaires;

-- Créer les nouvelles tables
CREATE TABLE Jeux (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  libelle VARCHAR(30) NOT NULL,
  regles VARCHAR(30) NOT NULL,
  nbPoints INT(2) NOT NULL,
  typeJeu VARCHAR(20) NOT NULL
);

CREATE TABLE Plannings (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  idHoraire INT(2) NOT NULL,
  idJeu INT(2) NOT NULL,
  FOREIGN KEY (idJeu) REFERENCES jeux(id),
  FOREIGN KEY (idHoraire) REFERENCES horaire(id)
);

CREATE TABLE Utilisateurs (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  identifiant VARCHAR(30) NOT NULL UNIQUE,
  mdp VARCHAR(32) NOT NULL,
  niveauCnx INT(1) NOT NULL
);

CREATE TABLE Equipes (
  id INT(3) PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(15) NOT NULL,
  score INT(3) NOT NULL,
  idSections INT(2)
);

CREATE TABLE Sections (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(15) NOT NULL,
  scoreTotal INT(3) NOT NULL,
  couleur VARCHAR(10) NOT NULL
);

CREATE TABLE Pool (
  idPlanning INT(2),
  idEquipe INT(3),
  FOREIGN KEY (idPlanning) REFERENCES plannings(id),
  FOREIGN KEY (idEquipe) REFERENCES equipes(id)
);

CREATE TABLE Horaires (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  heure TIME NOT NULL
);

-- Remplissage de de données
INSERT INTO Jeux (id, libelle, regles, nbPoints, typeJeu) VALUES
(1, 'Jeu1', 'Description jeu1.', 10, '1v1'),
(2, 'Jeu2', 'Description jeu2.', 20, '1v1'),
(3, 'Jeu3', 'Description jeu3.', 30, '1v1v1v1');

INSERT INTO plannings (id, idHoraire, idJeu) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 4, 2);

INSERT INTO Utilisateurs (id, identifiant, mdp, niveauCnx) VALUES
(1, 'admin', 'admin123', 2),
(2, 'jeu1', 'user123', 1),
(3, 'jeu2', 'user123', 1);

INSERT INTO Equipes (id, nom, score, idSections) VALUES
(1, 'Equipe 1', 0, 1),
(2, 'Equipe 2', 0, 1),
(3, 'Equipe 3', 0, 3),
(4, 'Equipe 4', 0, 3),
(5, 'Equipe 5', 0, 3);

INSERT INTO Pool (idPlanning, idEquipe) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3),
(4, 3);

INSERT INTO Sections (id, nom, scoreTotal, couleur) VALUES
(1, 'Equipe 1', 0, 'Rouge'),
(2, 'Equipe 2', 0, 'Bleu'),
(3, 'Equpipe 3', 0, 'Vert');

INSERT INTO Horaires (id, heure) VALUES
(1, '10:00:00'),
(2, '11:00:00'),
(3, '12:00:00'),
(4, '13:00:00'),
(5, '14:00:00');

