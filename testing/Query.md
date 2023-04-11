Query para crear base de datos llamada cafealfonso

CREATE DATABASE cafealfonso;

## Tabla usuarios

### Query para crear la tabla usuarios en MySQL

CREATE TABLE usuarios (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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

### **Query para crear usuarios**

##### **Query 1 solo usuario**

INSERT INTO usuarios (nombre, apellido, email, password, telefono, nacimiento, calle, numero, colonia, municipio, estado, esAdmin, codigoPostal)
VALUES ('Juan', 'Pérez', 'juan.perez@example.com', 'mipassword', '555-1234', '01-01-1990', 'Calle 1', 123, 'Colonia 1', 'Municipio 1', 'Estado 1', false, 12345);

##### JSON de 1 usuario

{
  "id": 1,
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan.perez@example.com",
  "password": "mipassword",
  "telefono": "555-1234",
  "nacimiento": "01-01-1990",
  "calle": "Calle 1",
  "numero": 123,
  "colonia": "Colonia 1",
  "municipio": "Municipio 1",
  "estado": "Estado 1",
  "esAdmin": false,
  "codigoPostal": 12345
}

##### Query 4 usuarios

INSERT INTO usuarios (nombre, apellido, email, password, telefono, nacimiento, calle, numero, colonia, municipio, estado, esAdmin, codigoPostal)
VALUES
  ('María', 'González', 'maria.gonzalez@example.com', 'otropassword', '555-5678', '02-02-1991', 'Calle 2', 456, 'Colonia 2', 'Municipio 2', 'Estado 2', false, 23456),
  ('Pedro', 'López', 'pedro.lopez@example.com', 'password123', '555-9012', '03-03-1992', 'Calle 3', 789, 'Colonia 3', 'Municipio 3', 'Estado 3', false, 34567),
  ('Ana', 'Ramírez', 'ana.ramirez@example.com', 'clave123', '555-3456', '04-04-1993', 'Calle 4', 1011, 'Colonia 4', 'Municipio 4', 'Estado 4', false, 45678),
  ('Carlos', 'García', 'carlos.garcia@example.com', 'contraseña123', '555-7890', '05-05-1994', 'Calle 5', 1213, 'Colonia 5', 'Municipio 5', 'Estado 5', false, 56789);

##### JSON 4 usuarios

[
  {
    "id": 2,
    "nombre": "María",
    "apellido": "González",
    "email": "maria.gonzalez@example.com",
    "password": "otropassword",
    "telefono": "555-5678",
    "nacimiento": "02-02-1991",
    "calle": "Calle 2",
    "numero": 456,
    "colonia": "Colonia 2",
    "municipio": "Municipio 2",
    "estado": "Estado 2",
    "esAdmin": false,
    "codigoPostal": 23456
  },
  {
    "id": 3,
    "nombre": "Pedro",
    "apellido": "López",
    "email": "pedro.lopez@example.com",
    "password": "password123",
    "telefono": "555-9012",
    "nacimiento": "03-03-1992",
    "calle": "Calle 3",
    "numero": 789,
    "colonia": "Colonia 3",
    "municipio": "Municipio 3",
    "estado": "Estado 3",
    "esAdmin": false,
    "codigoPostal": 34567
  },
  {
    "id": 4,
    "nombre": "Ana",
    "apellido": "Ramírez",
    "email": "ana.ramirez@example.com",
    "password": "clave123",
    "telefono": "555-3456",
    "nacimiento": "04-04-1993",
    "calle": "Calle 4",
    "numero": 1011,
    "colonia": "Colonia 4",
    "municipio": "Municipio 4",
    "estado": "Estado 4",
    "esAdmin": false,
    "codigoPostal": 45678
  },
  {
    "id": 5,
    "nombre": "Carlos",
    "apellido": "García",
    "email": "carlos.garcia@example.com",
    "password": "contraseña123",
    "telefono": "555-7890",
    "nacimiento": "05-05-1994",
    "calle": "Calle 5",
    "numero": 1213,
    "colonia": "Colonia 5",
    "municipio": "Municipio 5",
    "estado": "Estado 5",
    "esAdmin": false,
    "codigoPostal": 56789
  }
]

## Tabla Productos

### Query para crear tabla productos en MySQL

CREATE TABLE productos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  rutaimagen VARCHAR(255),
  region VARCHAR(100),
  cosecha VARCHAR(100),
  altura VARCHAR(50),
  humedad INT,
  proceso VARCHAR(100),
  preparacion VARCHAR(100),
  variedad VARCHAR(100),
  nota VARCHAR(500),
  puntuacion INT,
  precio DOUBLE,
  inventario INT
);

### Query para insertar 10 productos

INSERT INTO productos (nombre, rutaimagen, region, cosecha, altura, humedad, proceso, preparacion, variedad, precio, inventario, nota, puntuacion)
VALUES
('Café orgánico', 'ruta1.jpg', 'Norte', 'Verano', '1500 msnm', 12, 'Lavado', 'Tostado medio', 'Arábica', 10.50, 100,'nota 1',50),
('Café gourmet', 'ruta2.jpg', 'Sur', 'Invierno', '1200 msnm', 10, 'Natural', 'Tostado claro', 'Arábica', 15.00, 50,'nota 2',60),
('Café de especialidad', 'ruta3.jpg', 'Centro', 'Otoño', '1300 msnm', 11, 'Honey', 'Tostado oscuro', 'Arábica', 12.75, 75,'nota 3',70),
('Café robusta', 'ruta4.jpg', 'Este', 'Primavera', '1000 msnm', 13, 'Lavado', 'Tostado medio', 'Robusta', 8.25, 200,'nota 4',80),
('Té verde', 'ruta5.jpg', 'Norte', 'Verano', '500 msnm', 8, 'Proceso chino', 'Infusión a 75°C', 'Sencha', 7.50, 150,'nota 5',90),
('Té negro', 'ruta6.jpg', 'Sur', 'Invierno', '600 msnm', 9, 'Proceso indio', 'Infusión a 90°C', 'Assam', 9.25, 100,'nota 6',96),
('Té blanco', 'ruta7.jpg', 'Centro', 'Otoño', '800 msnm', 7, 'Proceso chino', 'Infusión a 75°C', 'Bai Hao Yin Zhen', 12.00, 50,'nota 7',97),
('Té oolong', 'ruta8.jpg', 'Este', 'Primavera', '1000 msnm', 11, 'Proceso taiwanés', 'Infusión a 85°C', 'Tie Guan Yin', 13.75, 25,'nota 8',98),
('Chocolate negro', 'ruta9.jpg', 'Norte', 'Invierno', '-', 1, 'Conchado', 'Tableta', '70% cacao', 5.50, 75,'nota 9',99),
('Chocolate con leche', 'ruta10.jpg', 'Sur', 'Verano', '-', 2, 'Conchado', 'Tableta', '50% cacao', 4.50, 100,'nota 10',100);

### Objeto JSON de 1 producto

{
  "id": 1,
  "nombre": "Café orgánico",
  "rutaimagen": "ruta1.jpg",
  "region": "Norte",
  "cosecha": "Verano",
  "altura": "1500 msnm",
  "humedad": 12,
  "proceso": "Lavado",
  "preparacion": "Tostado medio",
  "variedad": "Arábica",
  "precio": 10.50,
  "inventario": 100
}

## Tabla Productos

Query para crear la tabla Venta en MySQL:

CREATE TABLE ventas (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
