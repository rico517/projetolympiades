-- Creer la base de donnees
CREATE DATABASE IF NOT EXISTS projetolympiadls
CHARACTER SET utf8 COLLATE utf8mb3_general_ci;

-- Utiliser al base de donnees cree
USE projetolympiadls;

-- Supprimer les tables existantes (si elles existent)
DROP TABLE IF EXISTS Jeux;
DROP TABLE IF EXISTS Planning;
DROP TABLE IF EXISTS Utilisateurs;
DROP TABLE IF EXISTS Equipes;
DROP TABLE IF EXISTS Pool;
Drop TABLE IF EXISTS Section;

-- Créer les nouvelles tables
CREATE TABLE Jeux (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  libelle VARCHAR(30) NOT NULL,
  regles VARCHAR(30) NOT NULL,
  nbPoints INT(2) NOT NULL,
  typeJeu VARCHAR(20) NOT NULL
);

CREATE TABLE Planning (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  horaire DATE NOT NULL,
  idJeu INT(2),
  FOREIGN KEY (idJeu) REFERENCES jeux(id)
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
  idSection INT(2)
);

CREATE TABLE Section (
  id INT(2) PRIMARY KEY AUTO_INCREMENT,
  nom VARCHAR(15) NOT NULL,
  scoreTotal INT(3) NOT NULL,
  couleur VARCHAR(10) NOT NULL
);

CREATE TABLE Pool (
  idPlanning INT(2),
  idEquipe INT(3),
  FOREIGN KEY (idPlanning) REFERENCES planning(id),
  FOREIGN KEY (idEquipe) REFERENCES equipes(id)
);

-- Remplissage de de données
INSERT INTO Jeux (id, libelle, regles, nbPoints, typeJeu) VALUES
(1, 'Jeu1', 'Description jeu1.', 10, '1v1'),
(2, 'Jeu2', 'Description jeu2.', 20, '1v1'),
(3, 'Jeu3', 'Description jeu3.', 30, '1v1v1v1');

INSERT INTO planning (id, horaire, idJeu) VALUES
(1, '2024-03-10', 1),
(2, '2024-03-10', 2),
(3, '2024-03-10', 3),
(4, '2024-03-10', 1),
(5, '2024-03-10', 2);

INSERT INTO Utilisateurs (id, identifiant, mdp, niveauCnx) VALUES
(1, 'admin', 'admin123', 2),
(2, 'jeu1', 'user123', 1),
(3, 'jeu2', 'user123', 1);

INSERT INTO Equipes (id, nom, score, idSection) VALUES
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

INSERT INTO Section (id, nom, scoreTotal, couleur) VALUES
(1, 'Equipe 1', 0, 'Rouge'),
(2, 'Equipe 2', 0, 'Bleu'),
(3, 'Equpipe 3', 0, 'Vert');

