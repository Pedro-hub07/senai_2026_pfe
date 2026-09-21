"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/ui.module.css";
import { getAlunos, getNotas, deleteNota } from "../lib/storage";

export default function ListaNotas() {

  const [alunos, setAlunos] = useState([]);
  const [notas, setNotas] = useState([]);
  const [filtroAluno, setFiltroAluno] = useState("todos");


  function carregar() {
    setAlunos(getAlunos());
    setNotas(getNotas());
  }


  useEffect(() => {
    carregar();
  }, []);



  const alunosPorId = useMemo(() => {

    const mapa = new Map();

    alunos.forEach((aluno) => {
      mapa.set(aluno.id, aluno);
    });

    return mapa;

  }, [alunos]);



  const notasFiltradas = useMemo(() => {

    if (filtroAluno === "todos") {
      return notas;
    }

    return notas.filter(
      (nota) => nota.alunoId === filtroAluno
    );

  }, [notas, filtroAluno]);



  const media = useMemo(() => {

    if (notasFiltradas.length === 0) {
      return "—";
    }


    let soma = 0;
    let quantidade = 0;


    notasFiltradas.forEach((nota) => {

      soma += Number(nota.t1 || 0);
      soma += Number(nota.t2 || 0);
      soma += Number(nota.n1 || 0);
      soma += Number(nota.n2 || 0);
      soma += Number(nota.n3 || 0);

      quantidade += 5;

    });


    return (soma / quantidade).toFixed(1);


  }, [notasFiltradas]);



  function handleDelete(id) {

    const confirmado = window.confirm(
      "Remover estas notas?"
    );


    if (!confirmado) return;


    deleteNota(id);
    carregar();

  }



  return (

    <>
      <Header />

      <main className={styles.page}>


        <div className={styles.pageHead}>

          <span className={styles.eyebrow}>
            Notas
          </span>

          <h1>
            Lista de notas
          </h1>

          <p>
            Boletim com T1, T2, N1, N2 e N3.
          </p>

        </div>



        <div className={styles.statRow}>


          <div className={styles.stat}>
            <span>
              Lançamentos
            </span>

            <strong>
              {notasFiltradas.length}
            </strong>

          </div>



          <div className={styles.stat}>

            <span>
              Média geral
            </span>

            <strong>
              {media}
            </strong>

          </div>



          <div className={styles.stat}>

            <span>
              Alunos
            </span>

            <strong>
              {alunos.length}
            </strong>

          </div>


        </div>




        <div className={styles.toolbar}>


          <select

            value={filtroAluno}

            onChange={(e) =>
              setFiltroAluno(e.target.value)
            }

          >

            <option value="todos">
              Todos os alunos
            </option>


            {alunos.map((aluno) => (

              <option
                key={aluno.id}
                value={aluno.id}
              >

                {aluno.nome}

              </option>

            ))}


          </select>



          <Link
            href="/notaluno"
            className={styles.buttonPrimary}
          >

            Lançar notas

          </Link>


        </div>





        {notasFiltradas.length === 0 ? (

          <div className={styles.emptyState}>

            <p>
              Nenhuma nota lançada ainda.
            </p>

          </div>


        ) : (


          <div className={styles.tableWrap}>


            <table className={styles.table}>


              <thead>

                <tr>

                  <th>
                    Aluno
                  </th>

                  <th>
                    T1
                  </th>

                  <th>
                    T2
                  </th>

                  <th>
                    N1
                  </th>

                  <th>
                    N2
                  </th>

                  <th>
                    N3
                  </th>

                  <th>
                    Ação
                  </th>

                </tr>

              </thead>



              <tbody>


                {notasFiltradas.map((nota) => (


                  <tr key={nota.id}>


                    <td>

                      {
                        alunosPorId.get(nota.alunoId)?.nome ??
                        "Aluno removido"
                      }

                    </td>



                    <td>
                      {Number(nota.t1 || 0).toFixed(1)}
                    </td>


                    <td>
                      {Number(nota.t2 || 0).toFixed(1)}
                    </td>


                    <td>
                      {Number(nota.n1 || 0).toFixed(1)}
                    </td>


                    <td>
                      {Number(nota.n2 || 0).toFixed(1)}
                    </td>


                    <td>
                      {Number(nota.n3 || 0).toFixed(1)}
                    </td>



                    <td>

                      <button

                        className={styles.buttonDanger}

                        onClick={() =>
                          handleDelete(nota.id)
                        }

                      >

                        Remover

                      </button>

                    </td>


                  </tr>


                ))}


              </tbody>


            </table>


          </div>


        )}


      </main>

    </>

  );

}