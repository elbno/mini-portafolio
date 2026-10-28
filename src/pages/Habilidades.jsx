export default function Habilidades() {
  const habilidadesTecnicas = [
    { id: 1, nombre: 'Python / FastAPI', nivel: 'Intermedio' },
    { id: 2, nombre: 'JavaScript / React', nivel: 'Basico' },
    { id: 3, nombre: 'SQL / PostgreSQL', nivel: 'Intermedio' },
    { id: 4, nombre: 'Redes y Subneteo (Cisco)', nivel: 'Basico' }
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Cisco Packet Tracer', 'Git Bash'];

  return (
    <div className="habilidades">
      <h1>Habilidades y lenguaje</h1>
      
      <h2>Tecnologias</h2>
      <div className="habilidades__grid">
        {habilidadesTecnicas.map((item) => (
          <div key={item.id} className="tarjeta-habilidad">
            <h3 className="tarjeta-habilidad__titulo">{item.nombre}</h3>
            <p className="tarjeta-habilidad__nivel">Nivel: {item.nivel}</p>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: '2rem' }}>Herramientas</h2>
      <ul className="habilidades__lista-herramientas">
        {herramientas.map((herramienta, index) => (
          <li key={index}>{herramienta}</li>
        ))}
      </ul>
    </div>
  );
}