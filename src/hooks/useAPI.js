import { useState, useEffect } from "react";

export const useAPI = (url) => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(false);
  console.log("cargando =>", cargando);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {

      setCargando(true);
      setError(null);

      // bloque try catch
      try {
        const respuesta = await fetch(url);

        if (!respuesta) {
          console.error("error al obtener los datos");
        }

        const resultado = await respuesta.json();
        setDatos(resultado);
        //console.log(resultado);

      } catch (error) {
        setError(error);
        //console.error("error al usar la api", error);
        
      } finally {
        setCargando(false);
      }
    };

    fetchApi();
  }, [url]);

  return { datos, cargando, error };
};
