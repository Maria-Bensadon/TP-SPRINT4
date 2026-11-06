// padre de card, hijo de app
import { Card } from "./CardList";

export const ListaPersonajes = ({ personajes, favorito, agregarFavorito }) => {
  // La búsqueda ya la hace la API (ApiContext arma la URL con ?name=).
  // Acá solo mapeamos lo que vuelve; filtrar de nuevo sería redundante.
  return (
    <section className="w-full max-w-7-1 mx-auto px-4 py-6">
      <h2 className="mb-4 text-primary-container">
        Lista de personajes disponibles 👽
      </h2>

      {personajes.length === 0 && (
        <p className="text-on-surface-variant italic">
          Proba con otro personaje 👀 ...
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {personajes.map((personaje) => (
          <Card
            key={personaje.id}
            nombre={personaje.name}
            estatus={personaje.status}
            especie={personaje.species}
            genero={personaje.gender}
            origen={personaje.origin.name}
            ubicacion={personaje.location.name}
            imagen={personaje.image}
            personaje={personaje}
            favorito={favorito.some((favo) => favo.id === personaje.id)}
            agregarFavorito={agregarFavorito}
          />
        ))}
      </div>
    </section>
  );
};
