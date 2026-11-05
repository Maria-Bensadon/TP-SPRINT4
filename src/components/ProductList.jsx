
// // padre de card, hijo de app
import { Card } from "./CardList";

export const ListaPersonajes = ({ personajes, busqueda }) => {

  const personajesFiltrados = personajes.filter((personaje) =>
    personaje.name.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <section>
      <h2>Lista de personajes disponibles</h2>

      {personajesFiltrados.length === 0 && (
        <p>Proba con otro personaje</p>
      )}

      <div>
        {personajesFiltrados.map((personaje) => (
          <Card
            key={personaje.id}
            nombre={personaje.name}
            estatus={personaje.status}
            especie={personaje.species}
            tipo={personaje.type}
            genero={personaje.gender}
            origen={personaje.origin.name}
            ubicacion={personaje.location.name}
            imagen={personaje.image}
          />
        ))}
      </div>
    </section>
  );
};
