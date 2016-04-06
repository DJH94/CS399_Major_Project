create table Players
(
PlayerID int,	
Name varchar(255),
PRIMARY KEY(PlayerID)
);

create table Scores
(
ScoreID int,
Score int,
TimeScored date,
PRIMARY KEY(ScoreID)
);

INSERT INTO Scores (ScoreID, Score, TimeScored)
VALUES ('1001','120000','2014-11-22'); 