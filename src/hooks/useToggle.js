
import { useState } from "react"

export const useToogle = (valorInicial) => {

    const [valor, setValor] = useState(valorInicial); 

    const toggle= () => {
        setValor((valor) => !valor);
    };

    return [valor, toggle]; 
}

