import { useContext } from "react";
import { TemaContexto } from '../contexts/temaContexto';

export default function Header(){
    const {tema, mudarTema} = useContext(TemaContexto);

    return(
        <header className={`header-${tema}`}>
            <h1> Meu primeiro site com Tema de Contexto </h1>
            <button onClick={mudarTema}>
                Mudar tema para {tema === 'light' ? 'dark' : 'light'}
            </button>
        </header>
    )
}