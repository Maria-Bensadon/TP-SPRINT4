import { createContext, useContext } from "react";
import { useAPI } from "../hooks/useAPI";

// 1. crear el contexto
const ContextoApi = createContext(null); 

// 2. proveedor
export const ApiProvider = ({ children}) => {

    const url = 'https://rickandmortyapi.com/api/character'; 
    const { datos, cargando, error } = useAPI(url); 
    console.log("contexto"); 

    return(
        <ContextoApi.Provider value= {{ datos, cargando, error }} >
            {children}
        </ContextoApi.Provider>
    ); 
}

// 3. hook
export const useContextoApi =  () => {

    const obtenerContextoApi =  useContext(ContextoApi); 

    if(!obtenerContextoApi) {
        throw new Error(
            `useContextoApi() tiene que usarse dentro de
            <ContextoApi.Provider>`,
        ); 
        
    }

    return obtenerContextoApi; 
}

