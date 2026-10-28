import { createContext, useContext } from "react";
import { useAPI } from "../hooks/useAPI";

// 1. crear el contexto
const ContextoApi = createContext(null); 

// 2. proovedor
export const ApiProvider = ({ children}) => {

    const url = 'https://rickandmortyapi.com/api/character'; 
    const datosAPI = useAPI(url); 
    console.log("contexto"); 

    return(
        <ContextoApi.Provider value= {datosAPI} >
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

