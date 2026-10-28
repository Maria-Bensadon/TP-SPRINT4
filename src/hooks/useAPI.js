
import { useState, useEffect } from "react";

export const useAPI = (url) => {
  const [datos, setDatos] = useState([]);

  // dentro del useEffect va la api. se llama una sola vez
  useEffect(() => {
    // se declara una funcion asincronica
    const fetchApi = async () => {
      // bloque try catch
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setDatos(resultado);
        console.log(resultado); 
        if(!resultado) {
          console.error("error al obtener los datos"); 
        }
      } 
      catch (error) {
        console.error("error al usar la api", error);
      }
    };

    fetchApi();
  }, [url]);

  return datos;
};
