import { useState, useEffect } from "react";

export const useAPI = (url) => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(url);

        // fetch NO lanza ante un 404/500: siempre resuelve un Response.
        // Hay que mirar respuesta.ok para detectar errores HTTP.
        if (!respuesta.ok) {
          // 404 en la búsqueda de Rick and Morty = "sin resultados", no un error de carga
          if (respuesta.status === 404) {
            setDatos({ results: [] });
            return;
          }
          throw new Error("Error al cargar");
        }

        const resultado = await respuesta.json();
        setDatos(resultado);

      } 
      
      catch (error) {
        setError(error);
      } 
      
      finally {
        setCargando(false);
      }
    };

    fetchApi();
  }, [url]);

  return { datos, cargando, error };
};
