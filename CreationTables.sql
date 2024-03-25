-- Création de la base de données
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
DROP TABLE IF EXISTS Sections;
DROP TABLE IF EXISTS Horaires;

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
  FOREIGN KEY (idJeu) REFERENCES Jeux(id),
  FOREIGN KEY (idHoraire) REFERENCES Horaires(id)
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
  FOREIGN KEY (idPlanning) REFERENCES Plannings(id),
  FOREIGN KEY (idEquipe) REFERENCES Equipes(id)
);

CREATE TABLE Horaires (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  heure TIME NOT NULL
);

-- Remplissage de données
INSERT INTO Jeux (id, libelle, regles, nbPoints, typeJeu) VALUES
(1, 'Petit bac', 'regles.txt', 10, '1v1'),
(2, 'Tir à la corde', 'regles.txt', 10, '1v1'),
(3, 'Parcours', 'regles.txt', 10, '1v1'),
(4, 'Quizz Musical', 'regles.txt', 10, '1v1'),
(5, 'Balle au prisonnier', 'regles.txt', 10, '1v1'),
(6, 'Steeplechase', 'regles.txt', 10, '1v1'),
(7, 'Chamboultout', 'regles.txt', 10, '1v1'),
(8, 'Baby-foot humain', 'regles.txt', 10, '1v1'),
(9, 'Bouteilles percées', 'regles.txt', 10, '1v1'),
(10, 'Mémory', 'regles.txt', 10, '1v1'),
(11, 'Balayette vélo', 'regles.txt', 10, '1v1'),
(12, 'Planche à sacs', 'regles.txt', 10, '1v1'),
(13, 'Tour du monde', 'regles.txt', 10, '1v1'),
(14, 'Tour de Fröbel', 'regles.txt', 10, 'coop'),
(15, 'Béret', 'regles.txt', 10, '1v1v1v1');

INSERT INTO Plannings (id, idHoraire, idJeu) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3),
(4, 2, 1),
(5, 4, 2);

INSERT INTO Utilisateurs (id, identifiant, mdp, niveauCnx) VALUES
(1, 'viesco', 'adminviesco', 2),
(2, 'Beret', 'ber7602', 1),
(3, 'Petit bac', 'bac0921', 1),
(4, 'Tir à la corde','tir8392', 1),
(5, 'Parcours','parc1832', 1),
(6, 'Quizz Musical','quiz7201', 1),
(7, 'Balle au prisonnier','ball9021', 1),
(8, 'Steeplechase','stee2024', 1),
(9, 'Chamboultout', 'cham6165', 1),
(10, 'Baby-foot humain','baby8129', 1),
(11, 'Bouteilles percées','bout1982', 1),
(12, 'Mémory','memo1680', 1),
(13, 'Balayette vélo','bala1687', 1),
(14, 'Planche à sacs','plan1735', 1),
(15, 'Tour du monde','monde0012', 1),
(16, 'Tour de Fröbel','frob2471', 1);

INSERT INTO Equipes (id, nom, score, idSections) VALUES
(1, 'ASS 1', 0, 1),
(2, 'ASS 2', 0, 1),
(3, 'ASS 3', 0, 1),
(4, 'ASS 4', 0, 1),
(5, 'CG 1', 0, 2),
(6, 'CG 2', 0, 2),
(7, 'CG 3', 0, 2),
(8, 'CG 4', 0, 2),
(9, 'CG 5', 0, 2),
(10, 'CG 6', 0, 2),
(11, 'DCG 1', 0, 3),
(12, 'DCG 2', 0, 3),
(13, 'DCG 3', 0, 3),
(14, 'DCG 4', 0, 3),
(15, 'DCG 5', 0, 3),
(16, 'DCG 6', 0, 3),
(17, 'DCG 7', 0, 3),
(18, 'MCO 1', 0, 4),
(19, 'MCO 2', 0, 4),
(20, 'MCO 3', 0, 4),
(21, 'MCO 4', 0, 4),
(22, 'MCO 5', 0, 4),
(23, 'MCO 6', 0, 4),
(24, 'MCO 7', 0, 4),
(25, 'NDRC 1', 0, 5),
(26, 'NDRC 2', 0, 5),
(27, 'NDRC 3', 0, 5),
(28, 'NDRC 4', 0, 5),
(29, 'NDRC 5', 0, 5),
(30, 'NDRC 6', 0, 5),
(31, 'NDRC 7', 0, 5),
(32, 'SIO 1', 0, 6),
(33, 'SIO 2', 0, 6),
(34, 'SIO 3', 0, 6),
(35, 'SIO 4', 0, 6),
(36, 'SIO 5', 0, 6),
(37, 'SIO 6', 0, 6),
(38, 'SIO 7', 0, 6),
(39, 'PECT 1', 0, 7),
(40, 'PECT 2', 0, 7),
(41, 'PECT 3', 0, 7),
(42, 'PECT 4', 0, 7);

INSERT INTO Pool (idPlanning, idEquipe) VALUES
(1, 1),
(1, 2),
(2, 2),
(3, 3),
(4, 3);

INSERT INTO Sections (id, nom, scoreTotal, couleur) VALUES
(1, 'ASS', 0, '#38B6FF'),
(2, 'CG', 0, '#47AA2C'),
(3, 'DCG', 0, '#F9C51B'),
(4, 'MCO', 0, 'Blanc'),
(5, 'NDRC', 0, '#8C52FF'),
(6, 'SIO', 0, '#E7191F'),
(7, 'PECT', 0, '#FF66C4');

INSERT INTO Horaires (id, heure) VALUES
(0, '10:00:00'),
(1, '10:20:00'),
(2, '10:40:00'),
(3, '11:00:00'),
(4, '11:20:00'),
(5, '11:40:00'),
(6, '12:00:00'),
(7, '12:20:00'),
(8, '12:40:00'),
(9, '13:00:00'),
(10, '13:20:00'),
(11, '13:40:00'),
(12, '14:00:00'),
(13, '14:20:00'),
(14, '14:40:00'),
(15, '15:00:00'),
(16, '15:20:00'),
(17, '15:40:00'),
(18, '16:00:00'),
(19, '16:20:00'),
(20, '16:40:00'),
(21, '17:00:00'),
(22, '17:20:00');