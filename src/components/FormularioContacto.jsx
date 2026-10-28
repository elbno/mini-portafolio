import { useState } from 'react';

export default function FormularioContacto() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!form.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(form.correo)) {
        nuevosErrores.correo = 'El formato del correo no es válido.';
      }
    }

    if (!form.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje es obligatorio.';
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setEnviado(false);
      return;
    }

    setErrores({});
    setEnviado(true);
    setForm({
      nombre: '',
      correo: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto">
      <h2>Ponte en contacto</h2>
      
      <div className="formulario">
        {enviado && (
          <p className="formulario__exito">
            ¡Gracias por tu mensaje! Ha sido enviado con éxito.
          </p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="formulario__grupo">
            <label htmlFor="nombre" className="formulario__label">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="formulario__input"
              value={form.nombre}
              onChange={handleChange}
            />
            {errores.nombre && <span className="formulario__error">{errores.nombre}</span>}
          </div>

          <div className="formulario__grupo">
            <label htmlFor="correo" className="formulario__label">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              className="formulario__input"
              value={form.correo}
              onChange={handleChange}
            />
            {errores.correo && <span className="formulario__error">{errores.correo}</span>}
          </div>

          <div className="formulario__grupo">
            <label htmlFor="mensaje" className="formulario__label">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              className="formulario__textarea"
              value={form.mensaje}
              onChange={handleChange}
            />
            {errores.mensaje && <span className="formulario__error">{errores.mensaje}</span>}
          </div>

          <button type="submit" className="formulario__boton">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
}