import TarjetaProyecto from '../components/TarjetaProyecto';

export default function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'API Backend Gaming Center',
      descripcion: 'Desarrollo de API REST en equipo con FastAPI, Pydantic y SQLAlchemy para la gestión de clientes y estaciones.',
      enlace: 'https://github.com/Sakin-UCT/backend-2026-grupo-04'
    },
    {
      id: 2,
      titulo: 'Calculadora de limitees',
      descripcion: 'Aplicación en Python usando, Matplotlib y CustomTkinter.',
      enlace: 'https://github.com/elbno/trabajo-calculo-EID'
    }
  ];

  return (
    <div className="proyectos">
      <h1>Mis Proyectos</h1>
      <p>Algunos proyectos en los que he trabajado</p>

      <div className="proyectos__grid">
        {listaProyectos.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto.id}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
          />
        ))}
      </div>
    </div>
  );
}