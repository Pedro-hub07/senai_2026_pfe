import { Children, createContext, useContext, useState } from "react";

export const TemaContexto = createContext(null);

export function TemaProvedor({children}){
    const [tema, setTema] = useState('light')

    function mudarTema() {
        //if ternário
        setTema((prev) => (prev === 'light' ? 'dark' : 'light'))
    }


    const valor = {tema, mudarTema};


    return(
        <TemaContexto.Provider value={valor}>
            {children}
        </TemaContexto.Provider>
    )
}
