import React, { FormEvent, useEffect, useState } from 'react';
import './App.css';

interface Pelicula {
  id: number;
  titulo: string;
  resenia: string;
}

const App: React.FC = () => {
  const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
  const [titulo, setTitulo] = useState<string>('');
  const [resenia, setResenia] = useState<string>('');

  const fetchPeliculas = () => {
    fetch('http://localhost:3000/peliculas')
      .then(response => response.json())
      .then((data: Pelicula[]) => setPeliculas(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchPeliculas();
    const intervalId = setInterval(fetchPeliculas, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nuevaPelicula = { titulo, resenia };

    fetch('http://localhost:3000/peliculas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevaPelicula),
    })
      .then(response => response.json())
      .then(() => {
        setTitulo('');
        setResenia('');
        fetchPeliculas();
      })
      .catch(error => console.error('Error posting data:', error));
  };

  return (
    <div className="app-container">
      <div className="left-container">
        <p className='titulo-left'>Nueva Película</p>
        <form className='form-peliculas' onSubmit={handleSubmit}>
        <div className='textbox'>
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" value={titulo} onChange={e => setTitulo(e.target.value)} required />
          </div>
          <div className='textbox'>
            <label htmlFor="reseña">Reseña</label>
            <input type="text" id="reseña" name="reseña" value={resenia} onChange={e => setResenia(e.target.value)} required />
          </div>
          <button type="submit">Guardar Película</button>
        </form>
      </div>
      <div className="right-container">
        <p className='titulo-right'>Películas puntuadas por la comunidad</p>
        <div className='lista-container'>
          <ul className='lista-peliculas'>
            {peliculas.map((pelicula, index) => (
              <li key={index} className='item-pelicula'>
                <p className='titulo-pelicula'>{pelicula.titulo}</p>
                <p className='reseña-pelicula'>{pelicula.resenia}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;