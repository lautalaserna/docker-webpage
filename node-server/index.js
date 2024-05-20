const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000;

var PouchDB = require("pouchdb");
var db = new PouchDB("http://imalautiseba:imalautiseba@couchdb-container:5984/peliculas-db");

app.use(express.json());
app.use(cors());

var titulos_random = [
    "Cadena perpetua",
    "El padrino",
    "El caballero de la noche",
    "La lista de Schindler",
    "Pulp Fiction",
    "El club de la lucha",
    "Forrest Gump",
    "Uno de los nuestros",
    "Matrix",
    "El señor de los anillos: La comunidad del anillo",
    "Origen",
    "El silencio de los corderos",
    "Salvar al soldado Ryan",
    "Milagros inesperados",
    "Los infiltrados",
    "Gladiator",
    "El padrino: Parte II",
    "El señor de los anillos: El retorno del Rey",
    "El prestigio",
    "Los sospechosos de siempre",
    "Seven",
    "Sueños de libertad",
    "Interstellar",
    "El caballero oscuro: La leyenda renace",
    "El rey león",
    "Terminator",
    "Terminator 2: El juicio final",
    "El sexto sentido",
    "Toy Story",
    "La princesa prometida",
    "Los increíbles",
    "Toy Story 3",
    "Parque Jurásico",
    "Los Vengadores",
    "Vengadores: Infinity War",
    "Vengadores: Endgame",
    "El padrino: Parte III",
    "Uno de los nuestros",
    "El señor de los anillos: Las dos torres",
    "El show de Truman",
    "El gran hotel Budapest",
    "La red social",
    "Django sin cadenas",
    "Perros de la calle",
    "El renacido",
    "Titanic",
    "Braveheart",
    "El gran Lebowski",
    "El mago de Oz",
    "La naranja mecánica",
    "Blade Runner",
    "La gran evasión",
    "Sonrisas y lágrimas",
    "Amadeus",
    "Casablanca",
    "Ciudadano Kane",
    "Doce hombres sin piedad",
    "En busca del arca perdida",
    "Rocky",
    "Tiburón",
    "E.T., el extraterrestre",
    "El exorcista",
    "Alien",
    "Aliens",
    "El resplandor",
    "El club de los cinco",
    "El gran truco",
    "Regreso al futuro",
    "Indiana Jones y la última cruzada",
    "El bueno, el feo y el malo",
    "Érase una vez en el Oeste",
    "Taxi Driver",
    "Toro salvaje",
    "El francotirador",
    "La chaqueta metálica",
    "Apocalipsis Now",
    "Pelotón",
    "Buenos días, Vietnam",
    "El club de los poetas muertos",
    "Cuenta conmigo",
    "Rain Man",
    "Alguien voló sobre el nido del cuco",
    "El graduado",
    "Chinatown",
    "Cowboy de medianoche",
    "Dos hombres y un destino",
    "Lawrence de Arabia",
    "El puente sobre el río Kwai",
    "Ben-Hur",
    "Espartaco",
    "Los diez mandamientos",
    "2001: Una odisea del espacio",
    "Encuentros en la tercera fase",
    "La guerra de las galaxias: Episodio IV - Una nueva esperanza",
    "La guerra de las galaxias: Episodio V - El imperio contraataca",
    "La guerra de las galaxias: Episodio VI - El retorno del Jedi",
    "La guerra de las galaxias: Episodio VII - El despertar de la fuerza",
    "La guerra de las galaxias: Episodio VIII - Los últimos Jedi",
    "La guerra de las galaxias: Episodio IX - El ascenso de Skywalker",
    "El rey león",
    "La bella y la bestia",
    "Aladdín",
    "Blancanieves y los siete enanitos",
    "Cenicienta",
    "La bella durmiente",
    "La sirenita",
    "Mulán",
    "Enredados",
    "Vaiana",
    "Frozen",
    "Frozen II",
    "Zootrópolis",
    "Toy Story 4",
    "Del revés (Inside Out)",
    "Buscando a Nemo",
    "WALL-E",
    "Up",
    "Coco",
    "Ratatouille",
    "Toy Story 2",
    "Monstruos, S.A.",
    "Cars",
    "Shrek",
    "Buscando a Dory",
    "Gru, mi villano favorito",
    "La LEGO película",
    "Cómo entrenar a tu dragón",
    "Kung Fu Panda",
    "Madagascar",
    "Ice Age",
    "Coraline y la puerta secreta",
    "Kubo y las dos cuerdas mágicas",
    "Paranorman",
    "Pesadillas antes de Navidad",
    "La novia cadáver",
    "Las aventuras de Tintín: El secreto del unicornio",
    "El gigante de hierro",
    "Wallace & Gromit: La maldición de las verduras",
    "Pollitos en fuga",
    "Fantástico Sr. Zorro",
    "Isla de perros",
    "Spider-Man: Un nuevo universo",
    "¡Rompe Ralph!",
    "La LEGO película Batman",
    "Cómo entrenar a tu dragón 2",
    "Kung Fu Panda 2",
    "Shrek 2",
    "Madagascar 2: Escape a África",
    "Ice Age 2: El deshielo",
    "Trolls",
    "¡Canta!",
    "La vida secreta de tus mascotas",
    "Hotel Transylvania",
    "Paddington",
    "El bebé jefazo",
    "Wifi Ralph",
    "Los Croods",
    "Arthur Christmas: Operación regalo",
    "Lluvia de albóndigas",
    "Gru, mi villano favorito 2",
    "Los Minions",
    "Carlitos y Snoopy: La película de Peanuts",
    "Cigüeñas",
    "Angry Birds: La película",
    "Capitán Calzoncillos: Su primer peliculón",
    "Emoji: La película",
    "Ferdinand",
    "El Grinch",
    "Spider-Man: De regreso a casa",
    "Thor: Ragnarok",
    "Black Panther",
    "Spider-Man: Lejos de casa",
    "Guardianes de la galaxia",
    "Deadpool",
    "Capitán América: Civil War",
    "Doctor Strange",
    "Ant-Man",
    "Iron Man",
    "Thor",
    "Capitán América: El soldado de invierno",
    "Guardianes de la galaxia Vol. 2",
    "Spider-Man: De regreso a casa",
    "Black Panther",
    "Vengadores: La era de Ultrón",
    "Capitana Marvel",
    "Spider-Man: Lejos de casa",
    "Wonder Woman",
    "Aquaman",
    "¡Shazam!",
    "Joker",
    "Escuadrón Suicida",
    "Batman v Superman: El amanecer de la justicia",
    "Liga de la Justicia",
    "El hombre de acero",
    "El caballero oscuro: La leyenda renace",
    "El caballero oscuro",
    "Batman inicia",
    "Batman",
    "La LEGO película Batman",
];

var resenias_random = [
    "La historia es apasionante y te atrapa desde el primer minuto.",
    "Los personajes son tan planos como una tabla de planchar, no me gustaron.",
    "La recomiendo para los amantes del drama, ¡es un verdadero deleite!",
    "La trama es tan envolvente que me olvidé de revisar mi teléfono.",
    "El final es más predecible que un lunes de resaca, muy decepcionante.",
    "La cinematografía es una obra de arte, cada escena es un cuadro perfecto.",
    "Las actuaciones son tan malas que pareciera que están leyendo el guion por primera vez.",
    "La dirección es tan buena que parece que el director tenía una varita mágica.",
    "La música es tan molesta que preferiría escuchar el tráfico en hora punta.",
    "Es una película que te mantiene al borde del asiento, ¡imposible despegarse!",
    "La mezcla de géneros es como una pizza con piña, no a todos les gusta.",
    "La ambientación es tan realista que te sientes parte del mundo de la película.",
    "Perfecta para una noche de cine en casa, ideal con palomitas y una manta.",
    "La película tiene un gran mensaje, pero está enterrado bajo capas de clichés.",
    "Es una historia conmovedora que te deja con un nudo en la garganta.",
    "El guion es tan sólido como una roca, bien escrito y ejecutado.",
    "La química entre los protagonistas es inexistente, una lástima.",
    "La acción es tan intensa que casi salto del sofá, muy bien lograda.",
    "Entretenida de principio a fin, perfecta para pasar el rato.",
    "El desarrollo de personajes es tan pobre que no te importa lo que les pase.",
    "La dirección de arte es impresionante, los detalles son increíbles.",
    "Tiene un ritmo tan perfecto que no te das cuenta de cómo pasa el tiempo.",
    "Sorprendente y refrescante, me dejó con ganas de más.",
    "La fotografía es tan hermosa que cada escena parece una postal.",
    "Si te gustan las comedias, esta te hará reír hasta que duelan las mejillas.",
    "Muy original, algo completamente diferente a lo habitual.",
    "Emotiva y sincera, te llega directo al corazón.",
    "El elenco es de primera, todos los actores están en su mejor momento.",
    "Te hace reflexionar sobre la vida, muy profunda y significativa.",
    "La banda sonora es tan buena que la estoy buscando en Spotify.",
    "Divertida y ligera, perfecta para una tarde de risas.",
    "La trama tiene más giros que una montaña rusa, muy emocionante.",
    "La historia de amor es tan cliché que casi me duermo.",
    "Muy bien hecha, se nota el cariño y el esfuerzo en cada detalle.",
    "Realista y cruda, una ventana a la vida misma.",
    "Los efectos especiales son tan malos que parecen sacados de una película de los 90.",
    "Ideal para ver con amigos, pasarás un buen rato seguro.",
    "Aborda temas importantes de manera sensible y profunda.",
    "Dinámica y ágil, no te aburres ni un segundo.",
    "La narrativa es clara y directa, fácil de seguir.",
    "Visualmente impresionante, un verdadero deleite para los ojos.",
    "Perfecta para una tarde de cine familiar, todos la disfrutarán.",
    "Intensa y apasionante, te mantiene pegado a la pantalla.",
    "El enfoque artístico es único, realmente se destaca.",
    "Muy original y bien contada, una joya del cine.",
    "Te hace reír y llorar, una montaña rusa de emociones.",
    "La dirección es creativa y fresca, una visión única del director.",
    "El desarrollo de la trama es tan lento que casi me duermo.",
    "Actuaciones sólidas, pero la historia no está a la altura.",
    "Ideal para los amantes del thriller, te mantendrá intrigado hasta el final.",
];


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
    if (req == undefined || req.body == undefined) return;

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

function elementoRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function agregarPeliculaRandom() {
    const titulo = elementoRandom(titulos_random);
    const resenia = elementoRandom(resenias_random);

    const pelicula = {
        _id: new Date().toISOString(),
        titulo: titulo,
        resenia: resenia
    };

    try {
        const response = await db.put(pelicula);
        console.log("Película random agregada:", pelicula);
    } catch (error) {
        console.error("Error al agregar la película random:", error);
    }
}

app.listen(PORT, () => {
    console.log("Escuchando en el puerto", PORT);

    setInterval(agregarPeliculaRandom, 30000); //Cada 30 seg
});