# Aplicación de reseñas de películas

Una aplicación simple para mostrar y agregar reseñas de películas. Este proyecto utiliza tres contenedores Docker: uno para la base de datos CouchDB, otro para el servidor web realizado con Node.js y Express, y el último para el frontend hecho con React. Además, se implementó una funcionalidad en el backend para que se agregue una película aleatoria junto a su reseña cada cierto tiempo.


## Requisitos

• Docker


## Instalación

• Cloná este repositorio en tu máquina local:

    git clone https://github.com/lautalaserna/tp2-softwarelibre.git


## Uso

• Asegurate de tener Docker activo.

• Posicionate en la carpeta del proyecto e iniciá los contenedores:

    docker compose up

• Accedé a la aplicación visitando http://localhost:5173 en tu navegador web.


Para detener los contenedores, presioná Ctrl + C en la terminal donde ejecutaste el docker compose up.