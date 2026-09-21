"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/ui.module.css";
import { getAlunos, deleteAluno } from "../lib/storage";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    setAlunos(getAlunos());
  }, []);

  function handleDelete(id, nome) {
    const confirmado = window.confirm(
      `Remover "${nome}"? As notas lançadas para este aluno também serão apagadas.`
    );
    if (!confirmado) return;
    deleteAluno(id);
    setAlunos(getAlunos());
  }

  const alunosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    if (!termo) return alunos;
    return alunos.filter(
      (a) =>
        a.nome.toLowerCase().includes(termo) ||
        a.matricula.toLowerCase().includes(termo) ||
        a.turma.toLowerCase().includes(termo)
    );
  }, [alunos, busca]);

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageHead}>
          <span className={styles.eyebrow}>Alunos</span>
          <h1>Lista de alunos</h1>
          <p>Todos os alunos cadastrados no sistema.</p>
        </div>

        <div className={styles.toolbar}>
          <input
            type="text"
            placeholder="Buscar por nome, matrícula ou turma"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <Link href="/cadaluno" className={styles.buttonPrimary}>
            Novo aluno
          </Link>
        </div>

        {alunosFiltrados.length === 0 ? (
          <div className={styles.emptyState}>
            {alunos.length === 0 ? (
              <p>
                Nenhum aluno cadastrado ainda.{" "}
                <Link href="/cadaluno">Cadastre o primeiro aluno</Link>.
              </p>
            ) : (
              <p>Nenhum aluno encontrado para essa busca.</p>
            )}
          </div>
        ) : (
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Matrícula</th>
                  <th>Idade</th>
                  <th>Turma</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {alunosFiltrados.map((aluno) => (
                  <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.matricula}</td>
                    <td>{aluno.idade}</td>
                    <td>
                      <span className={styles.badge}>{aluno.turma}</span>
                    </td>
                    <td>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Link
                          href={`/editaluno/${aluno.id}`}
                          className={styles.buttonSecondary}
                        >
                          Editar
                        </Link>
                        <button
                          className={styles.buttonDanger}
                          onClick={() => handleDelete(aluno.id, aluno.nome)}
                        >
                          Remover
                        </button>
                      </div>
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
