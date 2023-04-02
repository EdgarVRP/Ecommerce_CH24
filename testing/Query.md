Query para crear base de datos llamada cafealonso

CREATE DATABASE cafealonso;

Query para crear la tabla usuario en MySQL

CREATE TABLE usuarios (
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

Query para crear tabla productos en MySQL


CREATE TABLE productos (
  idProducto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  rutaimagen VARCHAR(255),
  region VARCHAR(100),
  cosecha VARCHAR(100),
  altura VARCHAR(50),
  humedad INT,
  proceso VARCHAR(100),
  preparacion VARCHAR(100),
  variedad VARCHAR(100),
  precio DOUBLE,
  inventario INT
);


Query para crear la tabla Venta en MySQL:

CREATE TABLE ventas (
  idVenta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idUsuario INT NOT NULL,
  idProducto INT NOT NULL,
  fechaEntrega VARCHAR(100),
  fechaPago VARCHAR(100),
  precioVenta VARCHAR(100),
  tostado INT,
  molido INT,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario),
  FOREIGN KEY (idProducto) REFERENCES productos(idProducto)
);
