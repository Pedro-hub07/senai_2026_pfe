import React from "react";

function MeuAvatar(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p><span>Idade:</span> {props.idade}</p>
      <p><span>Estilo musical:</span> {props.estiloMusical}</p>
      <p><span>Disciplina favorita:</span> {props.disciplina}</p>
    </div>
  );
}

export default MeuAvatar;