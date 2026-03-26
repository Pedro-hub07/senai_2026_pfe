import React from "react";

function ListaFrutas() {
  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

  const frutasFiltradas = frutas.filter((fruta) => fruta.length > 5);

  return (
    <ul>
      {frutasFiltradas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}
export default ListaFrutas;