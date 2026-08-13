const estudantes = [
    { id: 1, nome: 'Dani Best', nomeReferencia:'Carbono', ra: 2213, idade: 17 },
    { id: 2, nome: 'Pedro Gonzales Escobar', nomeReferencia:'Buzz', ra: 1322, idade: 17 },
    { id: 3, nome: 'Kelvin Destaque', nomeReferencia:'Piano', ra: 1812, idade: 17 }
]

export default function ListaMap({titulo}) {
    const listaEstudantes = estudantes.map((estudante) => {
        return <li key= {estudante.id}>
            <h3> {estudante.nome} </h3>
            <p> Nome de Referência: {estudante.nomeReferencia} </p>
            <p> RA: {estudante.ra} </p>
            <p> Idade: {estudante.idade} </p>
        </li>
    })
   
    return(
        <>
            <h1> {titulo} </h1>
            <ul> {listaEstudantes} </ul>
        </>

    )
}