API REST para Gestión de Cómics y Librerías
Este proyecto es una API REST desarrollada con Node.js, Express y MongoDB que permite gestionar cómics y librerías. Los usuarios pueden realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) tanto en la colección de cómics como en la de librerías.
Estructura del Proyecto

.
├── src
│ ├── api
│ │ ├── controllers
│ │ │ ├── comics.js
│ │ │ └── librerias.js
│ │ ├── models
│ │ │ ├── comics.js
│ │ │ └── librerias.js
│ │ ├── routes
│ │ │ ├── comics.js
│ │ │ └── librerias.js
│ ├── config
│ │ └── db.js
├── .env
├── index.js
└── README.md

Requisitos Previos

Node.js (v14 o superior)
MongoDB (Atlas o local)
Instalación
Clona el repositorio:
git clone https://github.com/joseluismaza/api-rest
Navega al directorio del proyecto:
cd api-rest
Instala las dependencias:
npm install
Configura las variables de entorno:
Crea un archivo .env en la raíz del proyecto y añade la URL de conexión a la base de datos MongoDB:

DB_URL=mongodb+srv://tu-usuario:tu-password@cluster0.mongodb.net/mi-bbdd?retryWrites=true&w=majority
Ejecución
Para levantar el servidor, ejecuta el siguiente comando:

npm start
El servidor se iniciará en http://localhost:3000.
Rutas Disponibles
Cómics

GET /api/v1/comics: Obtiene todos los cómics.
GET /api/v1/comics/:id: Obtiene un cómic por su ID.
GET /api/v1/comics/categoria/:categoria: Obtiene cómics por categoría.
POST /api/v1/comics: Crea un nuevo cómic.
PUT /api/v1/comics/:id: Actualiza un cómic por su ID.
DELETE /api/v1/comics/:id: Elimina un cómic por su ID.
Librerías
GET /api/v1/librerias: Obtiene todas las librerías.
GET /api/v1/librerias/:id: Obtiene una librería por su ID.
POST /api/v1/librerias: Crea una nueva librería.
PUT /api/v1/librerias/:id: Actualiza una librería por su ID.
DELETE /api/v1/librerias/:id: Elimina una librería por su ID.
Modelos
Cómic
nombre: String (Requerido)
imagen: String (Requerido)
precio: Number (Requerido)
paginas: Number (Requerido)
categoria: String (Requerido, enum: [“superheroes”, “misterio”, “medieval”, “fantasia”])
Librería
nombre: String (Requerido)
calle: String (Requerido)
localidad: String (Requerido)
comics: Array of ObjectId (Referencias a cómics, opcional)
Conexión a la Base de Datos
El archivo src/config/db.js maneja la conexión a la base de datos MongoDB usando la variable de entorno DB_URL. Asegúrate de tener una instancia de MongoDB en ejecución o estar conectado a MongoDB Atlas.
