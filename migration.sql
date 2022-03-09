DROP TABLE IF EXISTS pets;
CREATE TABLE pets (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER,
  kind TEXT
);
INSERT INTO pets(age, name, kind)
VALUES (7, 'fido', 'dog');
INSERT INTO pets(age, name, kind)
VALUES (4, 'buttons', 'cat');