import { createContext, useContext } from "react";
import {useState} from "react"; 
import { useAPI } from "../hooks/useAPI";

// .env
const url2 = import.meta.env.VITE_API_URL; 

// 1. crear el contexto
const ContextoApi = createContext(null); 

// 2. proveedor
export const ApiProvider = ({ children}) => {
    
    //-----------------------------------------
    const [busqueda, setBusqueda] = useState("");
    const url = `${url2}?name=${busqueda}`;
    //-----------------------------------------
    const { datos, cargando, error } = useAPI(url); 
    //console.log("contexto"); 

    return(
        <ContextoApi.Provider value= {{ datos, cargando, error, busqueda, setBusqueda }} >
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

