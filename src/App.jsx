import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Habilidades  from './pages/Habilidades';
import Contacto from './pages/Contacto';
import SobreMi from './pages/SobreMi'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="habilidades" element={<Habilidades />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="sobre mi" element={<SobreMi />} />
      </Route>
    </Routes>
  );
}