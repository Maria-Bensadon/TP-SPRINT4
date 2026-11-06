import { useLocalStorage } from "./useLocalStorage";

export const useListaFavoritos = () => {
    
  const [favorito, setFavorito] = useLocalStorage("MisFavoritos", []);

  const agregarFavorito = (personajes) => {
    setFavorito((lista) => {
      // falta:
      const encontrada = lista.some((item) => item.id === personajes.id);

      if (encontrada) {
        return lista.filter((item) => item.id !== personajes.id);
      }

      return [...lista, personajes];
    });
  };

  // Vaciar lista
  const vaciarLista = () => {
    if (confirm("Deseas eliminar la lista personal")) {
      setFavorito([]);
      localStorage.removeItem("MisFavoritos");
    }
  };

  return { favorito, agregarFavorito, vaciarLista };
};
