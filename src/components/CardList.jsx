import { useState } from "react";

export const Card = ({
  nombre,
  estatus,
  especie,
  genero,
  origen,
  ubicacion,
  imagen,
  favorito,
  agregarFavorito,
  personaje,
}) => {
  return (
    <article className="bg-surface-container border border-primary-container/15 rounded-lg overflow-hidden hover:border-primary-container/40 hover:shadow-[0_0_16px_-2px_rgba(57,255,20,0.35)] transition">
      <div>
        <img
          src={imagen}
          alt={nombre}
          className="w-full aspect-square object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-on-surface">{nombre}</h3>
        <h4 className="text-sm text-on-surface-variant">
          {estatus} - {especie}
        </h4>
        <p className="text-sm text-on-surface-variant">Género: {genero}</p>
        <p className="text-sm text-on-surface-variant">Origen: {origen}</p>
        <p className="text-sm text-on-surface-variant">
          Ubicación: {ubicacion}
        </p>
        <button
          onClick={() => agregarFavorito(personaje)}
          className="bg-primary-container text-on-primary rounded-lg mt-2 px-4 py-2 font-bold hover:shadow-[0_0_20px_rgba(57,255,20,0.6)] transition"
        >
          {favorito ? `Quitar de Favoritos` : `Agregar a favoritos`}
        </button>
      </div>
    </article>
  );
};
