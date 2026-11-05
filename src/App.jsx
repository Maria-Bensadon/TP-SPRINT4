import './App.css'
import { Btn } from './components/boton'
import { ListaPersonajes } from './components/ProductList';
import { BarraBusqueda } from './components/SearchBar';
import { useContextoApi } from './context/ApiContext';
import { useState } from 'react';

function App() {

  const { datos } = useContextoApi();
  const [busqueda, setBusqueda] = useState("");

  const personajes = datos.results ?? [];

  return(
    <>
      <div>
        <Btn />
      </div>
      <div>
        <BarraBusqueda busqueda={busqueda} setBusqueda={setBusqueda}/>
      </div>
      <div>
        <ListaPersonajes personajes={personajes} busqueda={busqueda}/>
      </div>
    </>
  ); 
}

export default App
