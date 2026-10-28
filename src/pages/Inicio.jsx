import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="inicio">
      <h1 className="inicio__titulo">Benito Carbonell</h1>
      <h2 className="inicio__subtitulo">Desarrollador Frontend</h2>
      <p style={{ marginTop: '2rem' }}></p> 

      <p className="inicio__descripcion">
        Bienvenido a mi portafolio
      </p>
      <p> aqui puedes conocer mas sobre mi,
      </p>
      <p>
         mis habilidades y proyectos
      </p>
      <Link to="/sobre mi" className="inicio__boton">
        Explorar 
      </Link>
    </div>
  );
}