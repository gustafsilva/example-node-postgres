CREATE TABLE users(
  code_user SERIAL PRIMARY KEY,
  email VARCHAR(150) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  password CHAR(32) NOT NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO users (email, name, password) VALUES ('gustavo@email.com', 'gustavo', MD5('123456'));
INSERT INTO users (email, name, password) VALUES ('guilherme@email.com', 'guilherme', MD5('123456789'));
INSERT INTO users (email, name, password) VALUES ('magda@email.com', 'magda', MD5('123'));