import './App.css'

function App() {

  return (
    <div className="app-container">
      <div className="left-container">
        <p className='titulo-left'>Nueva Película</p>
        <form className='form-peliculas'>
          <div className='textbox'>
            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" name="titulo" />
          </div>
          <div className='textbox'>
            <label htmlFor="reseña">Reseña</label>
            <input type="text" id="reseña" name="reseña" />
          </div>
          <button type="submit">Guardar Película</button>
        </form>
      </div>
      <div className="right-container">
        <p className='titulo-right'>Películas puntuadas por la comunidad</p>
        <div className='lista-container'>
          <ul className='lista-peliculas'>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 1</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 2</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 3</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 3</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 3</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
            <li className='item-pelicula'>
                <p className='titulo-pelicula'>El planeta de los Simios 3</p> 
                <p className='reseña-pelicula'>Esta es una reseña sobre la maravillosa pelicula vista en el cine. La verdad.. no me gustó.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
