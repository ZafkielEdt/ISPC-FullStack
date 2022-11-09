use destino_cordoba;

-- Inserts user
INSERT INTO user (name, email, password) VALUES ('Rosemary Southey', 'rsouthey0@delicious.com', 'TP6Rj129');
INSERT INTO user (name, email, password) VALUES ('Monty Ert', 'mert1@vkontakte.ru', 'gZfx5q58X');
INSERT INTO user (name, email, password) VALUES ('Ilene Aronovich', 'iaronovich2@twitpic.com', 'WPUnBqLG0U');
INSERT INTO user (name, email, password) VALUES ('Bethanne Halfacree', 'bhalfacree3@mit.edu', 'TFsvwAjeMmo');
INSERT INTO user (name, email, password) VALUES ('Jocelin Larmuth', 'jlarmuth4@indiegogo.com', 'jaQGKCS');

-- Insert Roles
INSERT INTO role (name) VALUES ('admin'), ('user');

-- Set Roles
INSERT INTO user_has_role (USER_ID, ROLE_ID)
VALUES (1, 2),
       (2, 2),
       (3, 1),
       (4, 1),
       (5, 2);

-- Select All From User
SELECT * FROM user;
-- Select only name and email from user
SELECT name, email FROM user;
-- Join with role
SELECT us.id, us.name, us.email, r.name FROM user us
    JOIN user_has_role uhr on us.ID = uhr.USER_ID
    JOIN role r on uhr.ROLE_ID = r.ID;

-- Update
UPDATE user SET name = 'Irene Aronovich' WHERE id = 3;