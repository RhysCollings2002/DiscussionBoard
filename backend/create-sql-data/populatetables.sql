/* Sample Users */
INSERT INTO Users VALUES (1, 'user1', '1');
INSERT INTO Users VALUES (2, 'user2', '2');
INSERT INTO Users VALUES (3, 'user3', '3');
INSERT INTO Users VALUES (4, 'user4', '4');
INSERT INTO Users VALUES (5, 'user5', '5');

/* Sample Reviews */
INSERT INTO Posts VALUES (1, 1, '2017-02-21', 'First Post', 'This is the first ever post on the site!');
INSERT INTO Posts VALUES (2, 2, '2022-06-16', 'This post is as long as it can be', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
INSERT INTO Posts VALUES (3, 3, '2022-06-16', 'No body', '');
INSERT INTO Posts VALUES (4, 4, '2019-09-08', 'post 4', 'small post');
INSERT INTO Posts VALUES (5, 5, '2015-12-25', 'post 5', 'another small post');

/* Sample Rentals */
INSERT INTO Replies VALUES (1, 1, 1, '2017-12-20', 'This is the first reply');
INSERT INTO Replies VALUES (2, 1, 1, '2022-12-14', 'I can have multiple replies');
INSERT INTO Replies VALUES (3, 2, 3, '2022-12-15', 'first reply');
INSERT INTO Replies VALUES (4, 3, 3, '2022-12-02', 'second reply');
INSERT INTO Replies VALUES (5, 4, 3, '2022-12-10', 'third reply');