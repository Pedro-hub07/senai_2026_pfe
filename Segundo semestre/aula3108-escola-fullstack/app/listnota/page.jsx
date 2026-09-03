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
    const map = new Map();
    alunos.forEach((a) => map.set(a.id, a));
    return map;
  }, [alunos]);

  const notasFiltradas = useMemo(() => {
    const lista =
      filtroAluno === "todos"
        ? notas
        : notas.filter((n) => n.alunoId === filtroAluno);

    return [...lista].sort((a, b) => {
      const nomeA = alunosPorId.get(a.alunoId)?.nome ?? "";
      const nomeB = alunosPorId.get(b.alunoId)?.nome ?? "";
      return nomeA.localeCompare(nomeB) || a.periodo.localeCompare(b.periodo);
    });
  }, [notas, filtroAluno, alunosPorId]);

  const media = useMemo(() => {
    if (notasFiltradas.length === 0) return "—";
    const soma = notasFiltradas.reduce((acc, n) => acc + n.valor, 0);
    return (soma / notasFiltradas.length).toFixed(1);
  }, [notasFiltradas]);

  function handleDelete(id) {
    const confirmado = window.confirm("Remover esta nota?");
    if (!confirmado) return;
    deleteNota(id);
    carregar();
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageHead}>
          <span className={styles.eyebrow}>Notas</span>
          <h1>Lista de notas</h1>
          <p>Boletim consolidado com todas as notas lançadas.</p>
        </div>

        <div className={styles.statRow}>
          <div className={styles.stat}>
            <span>Notas lançadas</span>
            <strong>{notasFiltradas.length}</strong>
          </div>
          <div className={styles.stat}>
            <span>Média do filtro atual</span>
            <strong>{media}</strong>
          </div>
          <div className={styles.stat}>
            <span>Alunos cadastrados</span>
            <strong>{alunos.length}</strong>
          </div>
        </div>

        <div className={styles.toolbar}>
          <select
            value={filtroAluno}
            onChange={(e) => setFiltroAluno(e.target.value)}
          >
            <option value="todos">Todos os alunos</option>
            {alunos.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nome}
              </option>
            ))}
          </select>
          <Link href="/notaluno" className={styles.buttonPrimary}>
            Lançar nota
          </Link>
        </div>

        {notasFiltradas.length === 0 ? (
          <div className={styles.emptyState}>
            {notas.length === 0 ? (
              <p>
                Nenhuma nota lançada ainda.{" "}
                <Link href="/notaluno">Lance a primeira nota</Link>.
              </p>
            ) : (
              <p>Nenhuma nota encontrada para esse filtro.</p>
            )}
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Aluno</th>
                  <th>Disciplina</th>
                  <th>Período</th>
                  <th>Nota</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {notasFiltradas.map((nota) => (
                  <tr key={nota.id}>
                    <td>{alunosPorId.get(nota.alunoId)?.nome ?? "Aluno removido"}</td>
                    <td>{nota.disciplina}</td>
                    <td>{nota.periodo}</td>
                    <td>
                      <span className={styles.badge}>{nota.valor.toFixed(1)}</span>
                    </td>
                    <td>
                      <button
                        className={styles.buttonDanger}
                        onClick={() => handleDelete(nota.id)}
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
