CREATE TABLE Users (
    uid INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(30) NOT NULL,
    PRIMARY KEY (uid)
);

CREATE TABLE Posts (
    pid INT NOT NULL,
    uid INT NOT NULL REFERENCES User(uid),
    post_date DATE NOT NULL, /* 'YYYY-MM-DD' */
    title VARCHAR(50),
    body VARCHAR(500),
    PRIMARY KEY(pid)
);

CREATE TABLE Replies (
    rid INT NOT NULL,
    uid INT NOT NULL REFERENCES User(uid),
    pid INT NOT NULL REFERENCES Post(pid),
    reply_date DATE NOT NULL, /* 'YYYY-MM-DD' */
    body VARCHAR(500),
    PRIMARY KEY(rid)
);