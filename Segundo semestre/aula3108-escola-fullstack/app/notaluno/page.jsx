"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/ui.module.css";
import { getAlunos, saveNota } from "../lib/storage";

export default function CadastroNota() {
  const [alunos, setAlunos] = useState([]);

  const [form, setForm] = useState({
    alunoId: "",
    t1: "",
    t2: "",
    n1: "",
    n2: "",
    n3: "",
  });

  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const lista = getAlunos();
    setAlunos(lista);

    if (lista.length > 0) {
      setForm((prev) => ({
        ...prev,
        alunoId: lista[0].id,
      }));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validarNota(valor) {
    const numero = Number(valor);

    return (
      !Number.isNaN(numero) &&
      numero >= 0 &&
      numero <= 10
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.alunoId) {
      setFeedback({
        type: "error",
        text: "Selecione um aluno.",
      });
      return;
    }

    const notas = [
      form.t1,
      form.t2,
      form.n1,
      form.n2,
      form.n3,
    ];

    for (const nota of notas) {
      if (!validarNota(nota)) {
        setFeedback({
          type: "error",
          text: "Todas as notas devem estar entre 0 e 10.",
        });
        return;
      }
    }

    saveNota({
      ...form,
      t1: Number(form.t1),
      t2: Number(form.t2),
      n1: Number(form.n1),
      n2: Number(form.n2),
      n3: Number(form.n3),
    });

    const aluno = alunos.find(
      (a) => a.id === form.alunoId
    );

    setFeedback({
      type: "success",
      text: `Notas lançadas para ${aluno?.nome ?? "o aluno"}.`,
    });

    setForm((prev) => ({
      ...prev,
      t1: "",
      t2: "",
      n1: "",
      n2: "",
      n3: "",
    }));
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
              Nenhum aluno cadastrado ainda.
              <Link href="/cadaluno">
                Cadastre um aluno primeiro
              </Link>
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
          <span className={styles.eyebrow}>
            Notas
          </span>

          <h1>
            Lançar notas
          </h1>

          <p>
            Registre T1, T2, N1, N2 e N3 do aluno.
          </p>
        </div>


        <div className={styles.card}>

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >

            <div className={`${styles.field} ${styles.fieldWide}`}>
              <label htmlFor="alunoId">
                Aluno
              </label>

              <select
                id="alunoId"
                name="alunoId"
                value={form.alunoId}
                onChange={handleChange}
              >
                {alunos.map((aluno) => (
                  <option
                    key={aluno.id}
                    value={aluno.id}
                  >
                    {aluno.nome} - {aluno.turma}
                  </option>
                ))}
              </select>
            </div>


            <div className={styles.field}>
              <label>T1</label>

              <input
                type="number"
                name="t1"
                min="0"
                max="10"
                step="0.1"
                value={form.t1}
                onChange={handleChange}
                required
              />
            </div>


            <div className={styles.field}>
              <label>T2</label>

              <input
                type="number"
                name="t2"
                min="0"
                max="10"
                step="0.1"
                value={form.t2}
                onChange={handleChange}
                required
              />
            </div>


            <div className={styles.field}>
              <label>N1</label>

              <input
                type="number"
                name="n1"
                min="0"
                max="10"
                step="0.1"
                value={form.n1}
                onChange={handleChange}
                required
              />
            </div>


            <div className={styles.field}>
              <label>N2</label>

              <input
                type="number"
                name="n2"
                min="0"
                max="10"
                step="0.1"
                value={form.n2}
                onChange={handleChange}
                required
              />
            </div>


            <div className={styles.field}>
              <label>N3</label>

              <input
                type="number"
                name="n3"
                min="0"
                max="10"
                step="0.1"
                value={form.n3}
                onChange={handleChange}
                required
              />
            </div>


            <div className={styles.formActions}>

              <button
                type="submit"
                className={styles.buttonPrimary}
              >
                Lançar notas
              </button>


              <Link
                href="/listnota"
                className={styles.buttonSecondary}
              >
                Ver boletim
              </Link>

            </div>

          </form>


          {feedback && (
            <p
              className={`${styles.message} ${
                feedback.type === "success"
                  ? styles.messageSuccess
                  : ""
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