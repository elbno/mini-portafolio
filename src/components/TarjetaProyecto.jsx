export default function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <div className="tarjeta-proyecto">
      <h3 className="tarjeta-proyecto__titulo">{titulo}</h3>
      <p className="tarjeta-proyecto__descripcion">{descripcion}</p>
        <a href={enlace} className="tarjeta-proyecto__enlace" target="_blank" rel="noopener noreferrer">
          Ver proyecto
        </a>
    </div>
  );
}