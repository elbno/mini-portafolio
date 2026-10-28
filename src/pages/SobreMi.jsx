export default function SobreMi() {
  return (
    <div className="sobre-mi">
      <h1>Sobre mi</h1>
      <p>
        Soy Benito Carbonell, Estudiante de Ingenieria Civil en Informatica, Me apasiona el desarrollo Web
        Y me interesa crear soluciones tecnologicas que mejoren la experiencia de las personas
      </p>
      <h3 style={{ marginTop: '2rem' }}>Que me interesa?</h3>
      <p>
        Estudio Ingenieria Civil en Informatica en
         el Instituto tecnologico de la Universidad Catolica de Temuco
      </p>
      <h3 style={{ marginTop: '2rem' }}>Mis intereses principales</h3>
      <ul className="sobre-mi__lista">
        <li>Desarrollo Web y tecnologias frontend</li>
        <li>Aprender nuevas herramientas y frameworks</li>
        <li>Construir proyetos que generen un impacto real</li>
      </ul>
    </div>
  );
}