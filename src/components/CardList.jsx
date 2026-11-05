import { useState } from "react";

export const Card = ({
  nombre,
  estatus,
  especie,
  tipo,
  genero,
  origen,
  ubicacion,
  imagen,
}) => {
  const [esFavorito, setEsFavorito] = useState(false);

  return (
    <article>
      <div>
        <img src={imagen} alt={nombre} />
      </div>

      <h3>Nombre: {nombre}</h3>
      <h4>Estatus: {estatus}</h4>
      <h4>Especie: {especie}</h4>
      <p>Género: {genero}</p>
      <p>Origen: {origen}</p>
      <p>Ubicación: {ubicacion}</p>
      <p>Tipo: {tipo}</p>

      {/* Btn con condicional ternario */}
      <button onClick={() => set(!esFavorito)}>
        {esFavorito ? `Quitar de Favoritos` : `Agregar a favoritos`}
      </button>
    </article>
  );
};
