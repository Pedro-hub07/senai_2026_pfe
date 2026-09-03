
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/ui.module.css";
import { getAlunos, saveNota } from "../lib/storage";

const DISCIPLINAS = [
  "Português",
  "Matemática",
  "Ciências",
  "História",
  "Geografia",
  "Inglês",
  "Educação Física",
  "Artes",
];

const PERIODOS = ["1º Bimestre", "2º Bimestre", "3º Bimestre", "4º Bimestre"];

export default function CadastroNota() {
  const [alunos, setAlunos] = useState([]);
  const [form, setForm] = useState({
    alunoId: "",
    disciplina: DISCIPLINAS[0],
    periodo: PERIODOS[0],
    valor: "",
  });
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const lista = getAlunos();
    setAlunos(lista);
    if (lista.length > 0) {
      setForm((prev) => ({ ...prev, alunoId: lista[0].id }));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const valorNumerico = Number(form.valor);
    if (!form.alunoId) {
      setFeedback({ type: "error", text: "Selecione um aluno." });
      return;
    }
    if (Number.isNaN(valorNumerico) || valorNumerico < 0 || valorNumerico > 10) {
      setFeedback({ type: "error", text: "Informe uma nota entre 0 e 10." });
      return;
    }

    saveNota({ ...form, valor: valorNumerico });
    const aluno = alunos.find((a) => a.id === form.alunoId);
    setFeedback({
      type: "success",
      text: `Nota de ${form.disciplina} lançada para ${aluno?.nome ?? "o aluno"}.`,
    });
    setForm((prev) => ({ ...prev, valor: "" }));
  }

  if (alunos.length === 0) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <div className={styles.pageHead}>
            <span className={styles.eyebrow}>Notas</span>
            <h1>Lançar notas</h1>
          </div>
          <div className={styles.emptyState}>
            <p>
              Nenhum aluno cadastrado ainda.{" "}
              <Link href="/cadaluno">Cadastre um aluno primeiro</Link> para
              poder lançar notas.
            </p>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageHead}>
          <span className={styles.eyebrow}>Notas</span>
          <h1>Lançar notas</h1>
          <p>Registre a nota de um aluno em uma disciplina e período.</p>
        </div>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={`${styles.field} ${styles.fieldWide}`}>
              <label htmlFor="alunoId">Aluno</label>
              <select
                id="alunoId"
                name="alunoId"
                value={form.alunoId}
                onChange={handleChange}
              >
                {alunos.map((aluno) => (
                  <option key={aluno.id} value={aluno.id}>
                    {aluno.nome} — {aluno.turma}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="disciplina">Disciplina</label>
              <select
                id="disciplina"
                name="disciplina"
                value={form.disciplina}
                onChange={handleChange}
              >
                {DISCIPLINAS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="periodo">Período</label>
              <select
                id="periodo"
                name="periodo"
                value={form.periodo}
                onChange={handleChange}
              >
                {PERIODOS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="valor">Nota (0 a 10)</label>
              <input
                id="valor"
                name="valor"
                type="number"
                min="0"
                max="10"
                step="0.1"
                value={form.valor}
                onChange={handleChange}
                placeholder="Ex.: 8.5"
                required
              />
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.buttonPrimary}>
                Lançar nota
              </button>
              <Link href="/listnota" className={styles.buttonSecondary}>
                Ver boletim
              </Link>
            </div>
          </form>

          {feedback && (
            <p
              className={`${styles.message} ${
                feedback.type === "success" ? styles.messageSuccess : ""
              }`}
            >
              {feedback.text}
            </p>
          )}
        </div>
      </main>
    </>
  );
}









