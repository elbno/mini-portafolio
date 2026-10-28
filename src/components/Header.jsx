import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <span>Mi Portafolio</span>
        </div>

        <NavLink to="/" className="nav__enlace" end>Inicio</NavLink>
        <NavLink to="/sobre mi" className="nav__enlace">Sobre Mi</NavLink>
        <NavLink to="/habilidades" className="nav__enlace">Habilidades</NavLink>
        <NavLink to="/proyectos" className="nav__enlace">Proyectos</NavLink>
        <NavLink to="/contacto" className="nav__enlace">Contacto</NavLink>
        
      </nav>
    </header>
  );
}