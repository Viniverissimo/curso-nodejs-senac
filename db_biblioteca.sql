/*DDL - Sigla para Data Definition Language*/

CREATE DATABASE db_biblioteca; -- Comando que cria um Banco de Dados

USE db_biblioteca;

CREATE TABLE tb_cliente(
	id_cliente	INT 			AUTO_INCREMENT PRIMARY KEY,
	nome 		VARCHAR(255) 	NOT NULL,
	data_nasc 	DATE 			NOT NULL,
	endereco 	VARCHAR(400)	NOT NULL,
	telefone 	CHAR(13)		NULL,
	celular 	CHAR(14)		NOT NULL	UNIQUE,
	email 		VARCHAR(255)	NOT NULL	UNIQUE,
	CPF 		CHAR(14)		NOT NULL	UNIQUE
);

CREATE TABLE tb_livro(
	id_livro	INT 			AUTO_INCREMENT PRIMARY KEY,
	titulo 		VARCHAR(255) 	NOT NULL,
	autor 		VARCHAR(255)	NOT NULL,
    ano_pub		DATE			NOT NULL
);

INSERT INTO tb_cliente(nome,data_nasc,endereco,telefone,celular,email,CPF)
VALUES
(
'Vinicius Verissimo'
,'1997-11-12'
,'Rua Rui de Morais Apocalipse,312'
,NULL
,'(99)99999-9999'
,'verissimodev@gmail.com'
,'999.999.999-99'
);

INSERT INTO tb_livro(titulo,autor,ano_pub)
VALUES
(
'Harry Potter'
,'J.K. Rowling'
,'2000-01-01'
);

SELECT * FROM tb_cliente