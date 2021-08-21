

-- 1) 
-- A) ALTER TABLE Actor DROP COLUMN salary -> Remove a coluna salary da tabela de atores.
-- B) ALTER TABLE Actor CHANGE gender sex VARCHAR(6) -> Redeclara o valor da coluna.
-- C) ALTER TABLE Actor CHANGE gender gender VARCHAR(255) -> Redeclara o valor da coluna para que ela aceite até 255 caracteres.

-- D) 
ALTER TABLE Actors CHANGE gender gender VARCHAR(100); -- Altera a coluna gender da tabela Actors para que ela aceite strings com até 100 caracteres.

-- CRUD = CREATE, READ, UPDATE, DELETE.

-- 2)
-- A)
UPDATE Actors
SET nome = "Tom Hanks", birth_date = "1956-07-09"
WHERE id = "003";
-- Atualizou o nome e a data de nascimento do id 003.

-- B) 
INSERT INTO Actors (id, nome, salary, birth_date, gender) 
VALUES(
	"005",
    "Juliana Paes",
    "50000",
    "1979-03-26",
    "female"
);
-- Adicionou à tabela Actors.

UPDATE Actors
SET nome = "JULIANA PAES"
WHERE id = "005";
-- Também pode ser WHERE nome = "Juliana Paes". O comando atualizou o nome.

-- C)

UPDATE Actors
SET nome = "Keanu Reeves", salary = 2500000, birth_date = "1964-09-02", gender = "male"
WHERE id = "005";
-- Alterou os valores do id 005

-- D)

UPDATE Actors
SET nome = "Antony"
WHERE id = "015";

-- 3)
-- A)

INSERT INTO Actors (id, nome, salary, birth_date, gender)
VALUES(
	"006",
    "Fernanda Montenegro",
    "500000",
    "1929-10-16",
    "female"
);

DELETE FROM Actors
WHERE nome = "Fernanda Montenegro";

-- B) 

DELETE FROM Actors
WHERE 
	gender = "male" AND 
    salary > 1000000;
    
-- 4)

SELECT COUNT(*) FROM Actors;
-- Conta todos os atores.

SELECT COUNT(*) FROM Actors WHERE gender = "female";
-- Conta todas as atrizes do banco de dados.

SELECT AVG(salary) FROM Actors;
-- Retorna a média dos salários.

-- A) 
SELECT MAX(salary) FROM Actors;
-- Pega o maior salário de todos os atores do banco.

-- B) 
SELECT MIN(salary) FROM Actors WHERE gender = "female";
-- Pega o menor salário das atrizes do banco.

-- C)
SELECT COUNT(*) FROM Actors WHERE gender = "female";

-- D)
SELECT SUM(salary) from Actors;
-- Pega a soma de todos os salários do banco.

-- 5)

SELECT * FROM Actors LIMIT 3;
-- Limita a quantidade de dados retornados. No caso, retorna somente 3 atores da tabela.

SELECT * FROM Actors ORDER BY nome ASC;
-- Ordena os dados dependendo de alguma coluna da tabela. No caso, coloca os nomes em ordem crescente/alfabética.

SELECT * FROM Actors ORDER BY name ASC LIMIT 4;
-- Pega os 4 primeiros atores em ordem alfabética. 

SELECT * FROM Actors
WHERE gender = "female"
ORDER BY nome ASC
LIMIT 4;
-- Pega somente as 4 primeiras atrizes em ordem alfabética.for

SELECT COUNT(*), gender
FROM Actors
GROUP BY gender;
-- A) Agrupa os dados em relação a alguma coluna da tabela. No caso, ele retorna a quantidade de atores e atrizes na tabela. Ou seja, em relação ao gender.->

-- B) 
SELECT id, nome FROM Actors
ORDER BY nome DESC;
-- Retorna somente o id e o nome dos atores em ordem decrescente alfabética. 

-- C) 
SELECT * FROM Actors
ORDER BY salary;
-- Retorna todos os atores ordenados pelo salário. 

-- D)
SELECT * FROM Actors
ORDER BY salary DESC
LIMIT 3; 
-- Retorna os atores com os três maiores salários. 

-- E)
SELECT AVG(salary), gender FROM Actors
GROUP BY gender;
-- Retorna a média dos salários por gênero. 

-- 6)
-- A)
ALTER TABLE Movie ADD playing_limit_date DATE;
-- Altera a tabela de Movie e adiciona um novo parâmetro: playing_limit_date. 

-- B)
ALTER TABLE Movie CHANGE rating rating FLOAT;
-- Altera a tabela para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5. 

-- C)
UPDATE Movie 
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
-- Atualizando a data em cartaz do filme com id "001". 

UPDATE Movie
SET
	playing_limit_date = "2021-11-01"
WHERE id = "002";
-- Atualizando a data em cartaz do filme com id "002". 

-- D)
DELETE FROM Movie WHERE id = "004";
-- Deletou o filme de id "004"

UPDATE Movie
SET synopsy = "teste"
WHERE id = "004";
-- Atualiza a synopsy do filme deletado. Retornar sucesso, porém sem efeito prático no banco.

-- 7)
-- A) 
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
-- Retorna quantos filmes em cartaz possuem avaliações maiores do que 7,5.

-- B)
SELECT AVG(rating) FROM Movie;
-- Retorna a média das avaliações dos filmes.

-- C) 
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE(); 
-- Retorna a quantidade de filmes em cartaz. 

-- D)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
-- Retorna a quantidade de filmes que ainda irão lançar. 

-- E)
SELECT MAX(rating) FROM Movie;
-- Retorna a maior nota dos filmes.

-- F)
SELECT MIN(rating) FROM Movie;
-- Retorna a menor nota dos filmes.

-- 8)
-- A)
SELECT * FROM Movie ORDER BY name;
-- Retorna todos os filmes em ordem alfabética. 

-- B)
SELECT * FROM Movie ORDER BY name DESC LIMIT 5;
-- Retorna os 5 primeiros filmes em ordem decrescente alfabética. 

-- C)
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;
-- Retorna os 3 filmes mais recentes em cartas. 

-- D)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
-- Retorna os 3 filmes melhor avaliados.






	
















