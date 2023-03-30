Query para crear la tabla en MySQL

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY,
nombre VARCHAR(50),
apellido VARCHAR(50),
email VARCHAR(50),
password VARCHAR(50),
telefono VARCHAR(20),
nacimiento VARCHAR(10),
calle VARCHAR(50),
numero INT,
colonia VARCHAR(50),
municipio VARCHAR(50),
estado VARCHAR(50),
esAdmin BOOLEAN,
codigoPostal INT
);
