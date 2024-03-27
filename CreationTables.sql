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
  nbPoints INT(2) NOT NULL,
  typeJeu VARCHAR(20) NOT NULL,
  idUtilisateur INT(2) NOT NULL
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
INSERT INTO Jeux (id, libelle, nbPoints, typeJeu, idUtilisateur) VALUES
(1, 'Petit bac', 10, '1v1',3),
(2, 'Tir à la corde', 10, '1v1',4),
(3, 'Parcours', 10, '1v1',5),
(4, 'Quizz Musical', 10, '1v1',6),
(5, 'Balle au prisonnier', 10, '1v1',7),
(6, 'Steeplechase', 10, '1v1',8),
(7, 'Chamboultout', 10, '1v1',9),
(8, 'Baby-foot humain', 10, '1v1',10),
(9, 'Bouteilles percées', 10, '1v1',11),
(10, 'Mémory', 10, '1v1',12),
(11, 'Balayette vélo', 10, '1v1',13),
(12, 'Planche à sacs', 10, '1v1',14),
(13, 'Tour du monde', 10, '1v1',15),
(14, 'Tour de Fröbel', 10, 'coop',16),
(15, 'Béret', 10, '1v1v1v1',2);

INSERT INTO Plannings (idHoraire, idJeu) VALUES
( 1, 1), -- horaire 1 = 10h00 
( 1, 2),
( 1, 3),
( 1, 4),
( 1, 5),
( 1, 6),
( 1, 7),
( 1, 8),
( 1, 9),
( 1, 10),
( 1, 11),
( 1, 12),
( 1, 13),
( 1, 14),
( 1, 15),
( 2, 1), -- horaire 2 = 10h20 
( 2, 2),
( 2, 3),
( 2, 4),
( 2, 5),
( 2, 6),
( 2, 7),
( 2, 8),
( 2, 9),
( 2, 10),
( 2, 11),
( 2, 12),
( 2, 13),
( 2, 14),
( 2, 15),
( 3, 1), -- horaire 3 = 10h40 
( 3, 2),
( 3, 3),
( 3, 4),
( 3, 5),
( 3, 6),
( 3, 7),
( 3, 8),
( 3, 9),
( 3, 10),
( 3, 11),
( 3, 12),
( 3, 13),
( 3, 14),
( 3, 15),
( 4, 1), -- horaire 4 = 11h00 
( 4, 2),
( 4, 3),
( 4, 4),
( 4, 5),
( 4, 6),
( 4, 7),
( 4, 8),
( 4, 9),
( 4, 10),
( 4, 11),
( 4, 12),
( 4, 13),
( 4, 14),
( 4, 15),
( 5, 1), -- horaire 5 = 11h20 
( 5, 2),
( 5, 3),
( 5, 4),
( 5, 5),
( 5, 6),
( 5, 7),
( 5, 8),
( 5, 9),
( 5, 10),
( 5, 11),
( 5, 12),
( 5, 13),
( 5, 14),
( 5, 15),
( 6, 1), -- horaire 6 = 11h40 
( 6, 2),
( 6, 3),
( 6, 4),
( 6, 5),
( 6, 6),
( 6, 7),
( 6, 8),
( 6, 9),
( 6, 10),
( 6, 11),
( 6, 12),
( 6, 13),
( 6, 14),
( 6, 15),
( 7, 1), -- horaire 7 = 13h20 
( 7, 2),
( 7, 3),
( 7, 4),
( 7, 5),
( 7, 6),
( 7, 7),
( 7, 8),
( 7, 9),
( 7, 10),
( 7, 11),
( 2, 12),
( 7, 13),
( 7, 14),
( 7, 15),
( 8, 1), -- horaire 8 = 13h40 
( 8, 2),
( 8, 3),
( 8, 4),
( 8, 5),
( 8, 6),
( 8, 7),
( 8, 8),
( 8, 9),
( 8, 10),
( 8, 11),
( 8, 12),
( 8, 13),
( 8, 14),
( 8, 15),
( 9, 1), -- horaire 9 = 14h00 
( 9, 2),
( 9, 3),
( 9, 4),
( 9, 5),
( 9, 6),
( 9, 7),
( 9, 8),
( 9, 9),
( 9, 10),
( 9, 11),
( 9, 12),
( 9, 13),
( 9, 14),
( 9, 15),
( 10, 1), -- horaire 10 = 14h20 
( 10, 2),
( 10, 3),
( 10, 4),
( 10, 5),
( 10, 6),
( 10, 7),
( 10, 8),
( 10, 9),
( 10, 10),
( 10, 11),
( 10, 12),
( 10, 13),
( 10, 14),
( 10, 15),
( 11, 1), -- horaire 11 = 14h40 
( 11, 2),
( 11, 3),
( 11, 4),
( 11, 5),
( 11, 6),
( 11, 7),
( 11, 8),
( 11, 9),
( 11, 10),
( 11, 11),
( 11, 12),
( 11, 13),
( 11, 14),
( 11, 15),
( 12, 1), -- horaire 12 = 15h00 
( 12, 2),
( 12, 3),
( 12, 4),
( 12, 5),
( 12, 6),
( 12, 7),
( 12, 8),
( 12, 9),
( 12, 10),
( 12, 11),
( 12, 12),
( 12, 13),
( 12, 14),
( 12, 15),
( 13, 1), -- horaire 13 = 15h20
( 13, 2),
( 13, 3),
( 13, 4),
( 13, 5),
( 13, 6),
( 13, 7),
( 13, 8),
( 13, 9),
( 13, 10),
( 13, 11),
( 13, 12),
( 13, 13),
( 13, 14),
( 13, 15);

INSERT INTO Utilisateurs (id, identifiant, mdp, niveauCnx) VALUES
(1, 'viesco', 'adminviesco', 2),
(2, 'beret', 'ber7602', 1),
(3, 'petitbac', 'bac0921', 1),
(4, 'tircorde','tir8392', 1),
(5, 'parcours','parc1832', 1),
(6, 'quizzmusic','quiz7201', 1),
(7, 'ballepriso','ball9021', 1),
(8, 'steeple','stee2024', 1),
(9, 'chambouletout', 'cham6165', 1),
(10, 'babyfoot','baby8129', 1),
(11, 'bouteilles','bout1982', 1),
(12, 'memo','memo1680', 1),
(13, 'balayelle','bala1687', 1),
(14, 'planchesacs','plan1735', 1),
(15, 'tourmonde','monde0012', 1),
(16, 'tourfrobel','frob2471', 1);

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
(1,1)
(
1
,
2
)
(1,2)
(
2
,
2
)
(2,2)
(
2
,
3
)
(2,3)
(
3
,
3
)
(3,3)
(
3
,
4
)
(3,4)
(
4
,
4
)
(4,4)
(
4
,
5
)
(4,5)
(
5
,
5
)
(5,5)
(
5
,
6
)
(5,6)
(
6
,
6
)
(6,6)
(
6
,
7
)
(6,7)
(
7
,
7
)
(7,7)
(
7
,
8
)
(7,8)
(
8
,
8
)
(8,8)
(
8
,
9
)
(8,9)
(
9
,
9
)
(9,9)
(
9
,
10
)
(9,10)
(
10
,
10
)
(10,10)
(
10
,
11
)
(10,11)
(
11
,
11
)
(11,11)
(
11
,
12
)
(11,12)
(
12
,
12
)
(12,12)
(
12
,
13
)
(12,13)
(
13
,
13
)
(13,13)
(
13
,
14
)
(13,14)
(
14
,
14
)
(14,14)
(
14
,
15
)
(14,15)
(
15
,
15
)
(15,15)
(
15
,
16
)
(15,16)
(
16
,
16
)
(16,16)
(
16
,
17
)
(16,17)
(
17
,
17
)
(17,17)
(
17
,
18
)
(17,18)
(
18
,
18
)
(18,18)
(
18
,
19
)
(18,19)
(
19
,
19
)
(19,19)
(
19
,
20
)
(19,20)
(
20
,
20
)
(20,20)
(
20
,
21
)
(20,21)
(
21
,
21
)
(21,21)
(
21
,
22
)
(21,22)
(
22
,
22
)
(22,22)
(
22
,
23
)
(22,23)
(
23
,
23
)
(23,23)
(
23
,
24
)
(23,24)
(
24
,
24
)
(24,24)
(
24
,
25
)
(24,25)
(
25
,
25
)
(25,25)
(
25
,
26
)
(25,26)
(
26
,
26
)
(26,26)
(
26
,
27
)
(26,27)
(
27
,
27
)
(27,27)
(
27
,
28
)
(27,28)
(
28
,
28
)
(28,28)
(
28
,
29
)
(28,29)
(
29
,
29
)
(29,29)
(
29
,
30
)
(29,30)
(
30
,
30
)
(30,30)
(
30
,
31
)
(30,31)
(
31
,
31
)
(31,31)
(
31
,
32
)
(31,32)
(
32
,
32
)
(32,32)
(
32
,
33
)
(32,33)
(
33
,
33
)
(33,33)
(
33
,
34
)
(33,34)
(
34
,
34
)
(34,34)
(
34
,
35
)
(34,35)
(
35
,
35
)
(35,35)
(
35
,
36
)
(35,36)
(
36
,
36
)
(36,36)
(
36
,
37
)
(36,37)
(
37
,
37
)
(37,37)
(
37
,
38
)
(37,38)
(
38
,
38
)
(38,38)
(
38
,
39
)
(38,39)
(
39
,
39
)
(39,39)
(
39
,
40
)
(39,40)
(
40
,
40
)
(40,40)
(
40
,
41
)
(40,41)
(
41
,
41
)
(41,41)
(
41
,
42
)
(41,42)
(
42
,
42
)
(42,42)
(
42
,
43
)
(42,43)
(
43
,
43
)
(43,43)
(
43
,
44
)
(43,44)
(
44
,
44
)
(44,44)
(
44
,
45
)
(44,45)
(
45
,
45
)
(45,45)
(
45
,
46
)
(45,46)
(
46
,
46
)
(46,46)
(
46
,
47
)
(46,47)
(
47
,
47
)
(47,47)
(
47
,
48
)
(47,48)
(
48
,
48
)
(48,48)
(
48
,
49
)
(48,49)
(
49
,
49
)
(49,49)
(
49
,
50
)
(49,50)
(
50
,
50
)
(50,50)
(
50
,
51
)
(50,51)
(
51
,
51
)
(51,51)
(
51
,
52
)
(51,52)
(
52
,
52
)
(52,52)
(
52
,
53
)
(52,53)
(
53
,
53
)
(53,53)
(
53
,
54
)
(53,54)
(
54
,
54
)
(54,54)
(
54
,
55
)
(54,55)
(
55
,
55
)
(55,55)
(
55
,
56
)
(55,56)
(
56
,
56
)
(56,56)
(
56
,
57
)
(56,57)
(
57
,
57
)
(57,57)
(
57
,
58
)
(57,58)
(
58
,
58
)
(58,58)
(
58
,
59
)
(58,59)
(
59
,
59
)
(59,59)
(
59
,
60
)
(59,60)
(
60
,
60
)
(60,60)
(
60
,
61
)
(60,61)
(
61
,
61
)
(61,61)
(
61
,
62
)
(61,62)
(
62
,
62
)
(62,62)
(
62
,
63
)
(62,63)
(
63
,
63
)
(63,63)
(
63
,
64
)
(63,64)
(
64
,
64
)
(64,64)
(
64
,
65
)
(64,65)
(
65
,
65
)
(65,65)
(
65
,
66
)
(65,66)
(
66
,
66
)
(66,66)
(
66
,
67
)
(66,67)
(
67
,
67
)
(67,67)
(
67
,
68
)
(67,68)
(
68
,
68
)
(68,68)
( (68,


User
continue
ChatGPT
Bien sûr, je continue la séquence :

(
68
,
69
)
(68,69)
(
69
,
69
)
(69,69)
(
69
,
70
)
(69,70)
(
70
,
70
)
(70,70)
(
70
,
71
)
(70,71)
(
71
,
71
)
(71,71)
(
71
,
72
)
(71,72)
(
72
,
72
)
(72,72)
(
72
,
73
)
(72,73)
(
73
,
73
)
(73,73)
(
73
,
74
)
(73,74)
(
74
,
74
)
(74,74)
(
74
,
75
)
(74,75)
(
75
,
75
)
(75,75)
(
75
,
76
)
(75,76)
(
76
,
76
)
(76,76)
(
76
,
77
)
(76,77)
(
77
,
77
)
(77,77)
(
77
,
78
)
(77,78)
(
78
,
78
)
(78,78)
(
78
,
79
)
(78,79)
(
79
,
79
)
(79,79)
(
79
,
80
)
(79,80)
(
80
,
80
)
(80,80)
(
80
,
81
)
(80,81)
(
81
,
81
)
(81,81)
(
81
,
82
)
(81,82)
(
82
,
82
)
(82,82)
(
82
,
83
)
(82,83)
(
83
,
83
)
(83,83)
(
83
,
84
)
(83,84)
(
84
,
84
)
(84,84)
(
84
,
85
)
(84,85)
(
85
,
85
)
(85,85)
(
85
,
86
)
(85,86)
(
86
,
86
)
(86,86)
(
86
,
87
)
(86,87)
(
87
,
87
)
(87,87)
(
87
,
88
)
(87,88)
(
88
,
88
)
(88,88)
(
88
,
89
)
(88,89)
(
89
,
89
)
(89,89)
(
89
,
90
)
(89,90)
(
90
,
90
)
(90,90)
(
90
,
91
)
(90,91)
(
91
,
91
)
(91,91)
(
91
,
92
)
(91,92)
(
92
,
92
)
(92,92)
(
92
,
93
)
(92,93)
(
93
,
93
)
(93,93)
(
93
,
94
)
(93,94)
(
94
,
94
)
(94,94)
(
94
,
95
)
(94,95)
(
95
,
95
)
(95,95)
(
95
,
96
)
(95,96)
(
96
,
96
)
(96,96)
(
96
,
97
)
(96,97)
(
97
,
97
)
(97,97)
(
97
,
98
)
(97,98)
(
98
,
98
)
(98,98)
(
98
,
99
)
(98,99)
(
99
,
99
)
(99,99)
(
99
,
100
)
(99,100)
(
100
,
100
)
(100,100)
(
100
,
101
)
(100,101)
(
101
,
101
)
(101,101)
(
101
,
102
)
(101,102)
(
102
,
102
)
(102,102)
(
102
,
103
)
(102,103)
(
103
,
103
)
(103,103)
(
103
,
104
)
(103,104)
(
104
,
104
)
(104,104)
(
104
,
105
)
(104,105)
(
105
,
105
)
(105,105)
(
105
,
106
)
(105,106)
(
106
,
106
)
(106,106)
(
106
,
107
)
(106,107)
(
107
,
107
)
(107,107)
(
107
,
108
)
(107,108)
(
108
,
108
)
(108,108)
(
108
,
109
)
(108,109)
(
109
,
109
)
(109,109)
(
109
,
110
)
(109,110)
(
110
,
110
)
(110,110)
(
110
,
111
)
(110,111)
(
111
,
111
)
(111,111)
(
111
,
112
)
(111,112)
(
112
,
112
)
(112,112)
(
112
,
113
)
(112,113)
(
113
,
113
)
(113,113)
(
113
,
114
)
(113,114)
(
114
,
114
)
(114,114)
(
114
,
115
)
(114,115)
(
115
,
115
)
(115,115)
(
115
,
116
)
(115,116)
(
116
,
116
)
(116,116)
(
116
,
117
)
(116,117)
(
117
,
117
)
(117,117)
(
117
,
118
)
(117,118)
(
118
,
118
)
(118,118)
(
118
,
119
)
(118,119)
(
119
,
119
)
(119,119)
(
119
,
120
)
(119,120)
(
120
,
120
)
(120,120)
(
120
,
121
)
(120,121)
(
121
,
121
)
(121,121)
(
121
,
122
)
(121,122)
(
122
,
122
)
(122,122)
(
122
,
123
)
(122,123)
(
123
,
123
)
(123,123)
(
123
,
124
)
(123,124)
(
124
,
124
)
(124,124)
(
124
,
125
)
(124,125)
(
125
,
125
)
(125,125)
(
125
,
126
)
(125,126)
(
126
,
126
)
(126,126)
(
126
,
127
)
(126,127)
(
127
,
127
)
(127,127)

(127,128)

(128,128)

(128,129)

(129,129)

(129,130)

(130,130)

(130,131)

(131,131)

(131,132)

(132,132)

(132,133)
(133,133)
(133,134)
(134,134)
(134,135)
(135,135)

INSERT INTO Sections (id, nom, scoreTotal, couleur) VALUES
(1, 'ASS', 0, '#38B6FF'),
(2, 'CG', 0, '#47AA2C'),
(3, 'DCG', 0, '#F9C51B'),
(4, 'MCO', 0, '#FFFFFF'),
(5, 'NDRC', 0, '#8C52FF'),
(6, 'SIO', 0, '#E7191F'),
(7, 'PECT', 0, '#FF66C4');

INSERT INTO Horaires (id, heure) VALUES
(1, '10:00:00'),
(2, '10:20:00'),
(3, '10:40:00'),
(4, '11:00:00'),
(5, '11:20:00'),
(6, '11:40:00'),
(7, '13:20:00'),
(8, '13:40:00'),
(9, '14:00:00'),
(10, '14:20:00'),
(11, '14:40:00'),
(12, '15:00:00'),
(13, '15:20:00');
