CREATE DATABASE burgers_db;

USE burgers_db;

drop table burgers;

CREATE TABLE burgers(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(40) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheeseburger.', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Impossible Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Western Bacon Cheeseburger.', false);

select * from burgers_db.burgers;