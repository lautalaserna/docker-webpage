const express = require("express");
const app = express();
const PORT = 3000;

var PouchDB = require("pouchdb");
var db = new PouchDB("http://imalautiseba:imalautiseba@couchdb-container:5984/peliculas-db");

app.get("/peliculas", async (req, res) => {
    try {
        const result = await db.allDocs({ include_docs: true });
        const data = result.rows.map((row) => ({
            titulo: row.doc.titulo,
            resenia: row.doc.resenia,
        }));
        res.json(data);
    } catch (error) {
        console.error("Error al obtener las películas:", error);
        res.status(500).json({ error: "Error al obtener las películas" });
    }
});

app.post("/peliculas", async (req, res) => {
    if (!req.body.titulo || !req.body.resenia) {
        return res.status(400).json({ error: "Se requieren título y reseña." });
    }

    const pelicula = {
        _id: new Date().toISOString(), // Id único para cada película.
        titulo: req.body.titulo,
        resenia: req.body.resenia,
    };

    try {
        const response = await db.put(pelicula);
        res.status(201).json({ message: "Película agregada exitosamente.", id: response.id });
    } catch (error) {
        console.error("Error al agregar la película:", error);
        res.status(500).json({ error: "Error al agregar la película." });
    }
});

app.listen(PORT, () => console.log("Escuchando..."));