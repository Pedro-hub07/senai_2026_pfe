import { useContext } from "react";
import { TemaContexto } from "../contexts/temaContexto";

export default function Noticias() {
  const { tema } = useContext(TemaContexto);

  const noticias = [
    {
      titulo: "Tecnologia avança em 2026",
      descricao: "Novas inovações estão mudando o mundo rapidamente.",
      imagem: "https://via.placeholder.com/300x180"
    },
    {
      titulo: "Esportes em alta",
      descricao: "O futebol continua sendo o esporte mais popular do planeta.",
      imagem: "https://via.placeholder.com/300x180"
    },
    {
      titulo: "Mudanças climáticas",
      descricao: "Especialistas alertam sobre impactos ambientais.",
      imagem: "https://via.placeholder.com/300x180"
    }
  ];

  return (
    <section className={`noticias-${tema}`}>
      <h2>Notícias</h2>

      <div className="container-cards">
        {noticias.map((noticia, index) => (
          <div key={index} className="card">
            <img src={noticia.imagem} alt={noticia.titulo} />
            <h3>{noticia.titulo}</h3>
            <p>{noticia.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}