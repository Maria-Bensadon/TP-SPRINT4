import { ListaPersonajes } from "./components/ProductList";
import { BarraBusqueda } from "./components/SearchBar";
import { useContextoApi } from "./context/ApiContext";
import { useState } from "react";
import { Modal } from "./ui/Modal";
import { useToogle } from "./hooks/useToggle";
import { BarraNavegacion } from "./layout/Navbar";
import { useListaFavoritos } from "./hooks/useFavorito";

function App() {
  const { datos, cargando, error } = useContextoApi();
  const [busqueda, setBusqueda] = useState("");
  const [panelAbierto, setPanelAbierto] = useToogle(false);
  const { agregarFavorito, favorito, vaciarLista } = useListaFavoritos();

  const personajes = datos.results ?? [];

  return (
    <>
      {panelAbierto ? (
        <Modal
          setPanelAbierto={setPanelAbierto}
          favorito={favorito}
          vaciarLista={vaciarLista}
        />
      ) : null}
      <header className="sticky top-0 z-50">
        <BarraNavegacion setPanelAbierto={setPanelAbierto} />
      </header>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
      <div>
        <ListaPersonajes
          personajes={personajes}
          busqueda={busqueda}
          favorito={favorito}
          agregarFavorito={agregarFavorito}
        />
      </div>
    </>
  );
}

export default App;
