import React, { useState } from "react";

function ConectaAPI() {
  const [conselho, setConselho] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const buscarConselho = async () => {
    setLoading(true);
    setErro("");

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      setConselho(data.slip.advice);
    } catch (error) {
      setErro("Erro ao buscar conselho.");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Conecta API</h2>

      <button onClick={buscarConselho}>
        Buscar conselho
      </button>

      {loading && <p>Carregando...</p>}

      {erro && <p style={{ color: "red" }}>{erro}</p>}

      {conselho && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          💡 {conselho}
        </p>
      )}
    </div>
  );
}

export default ConectaAPI;