import { ListaPersonajes } from "./components/ProductList";
import { BarraBusqueda } from "./components/SearchBar";
import { useContextoApi } from "./context/ApiContext";
//import { useState } from "react";
import { Modal } from "./ui/Modal";
import { useToogle } from "./hooks/useToggle";
import { BarraNavegacion } from "./layout/Navbar";
import { useListaFavoritos } from "./hooks/useFavorito";
import { ListarFavoritos } from "./components/FavouriteList";
import { Footer } from "./layout/Footer";

function App() {

  const { datos, cargando, error, busqueda, setBusqueda } = useContextoApi();
  //const [busqueda, setBusqueda] = useState("");
  const [panelAbierto, setPanelAbierto] = useToogle(false);
  const { agregarFavorito, favorito, vaciarLista } = useListaFavoritos();


  const personajes = datos.results ? datos.results : [];

  return (
    <>
      {panelAbierto ? (
        <Modal>
          <ListarFavoritos favorito={favorito} vaciarLista={vaciarLista} />
        </Modal>
      ) : null}
      <header className="sticky top-0 z-50">
        <BarraNavegacion setPanelAbierto={setPanelAbierto} />
      </header>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda} />
      </div>
      <div>
        {cargando && (
          <p className="px-4 py-6 text-on-surface-variant">
            Cargando personajes...
          </p>
        )}
        {error && (
          <p className="px-4 py-6 text-error">
            No se pudieron cargar los personajes.
          </p>
        )}
        {!cargando && !error && (
          <ListaPersonajes
            personajes={personajes}
            favorito={favorito}
            agregarFavorito={agregarFavorito}
          />
        )}
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
