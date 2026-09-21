"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../../components/header";
import styles from "../../styles/ui.module.css";
import { getAluno, saveAluno } from "../../lib/storage";

const TURMAS = ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"];

export default function EditarAluno() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [naoEncontrado, setNaoEncontrado] = useState(false);

  useEffect(() => {
    const aluno = getAluno(id);
    if (!aluno) {
      setNaoEncontrado(true);
      return;
    }
    setForm(aluno);
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.nome.trim() || !form.matricula.trim()) {
      setFeedback({ type: "error", text: "Preencha nome e matrícula." });
      return;
    }

    const idadeNumerica = Number(form.idade);
    if (!form.idade || Number.isNaN(idadeNumerica) || idadeNumerica <= 0) {
      setFeedback({ type: "error", text: "Informe uma idade válida." });
      return;
    }

    saveAluno(form);
    setFeedback({
      type: "success",
      text: `Aluno "${form.nome}" atualizado com sucesso.`,
    });

    setTimeout(() => router.push("/listaluno"), 900);
  }

  if (naoEncontrado) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <div className={styles.pageHead}>
            <span className={styles.eyebrow}>Alunos</span>
            <h1>Aluno não encontrado</h1>
            <p>O aluno que você tentou editar não existe (ou já foi removido).</p>
          </div>
          <Link href="/listaluno" className={styles.buttonSecondary}>
            Voltar para a lista
          </Link>
        </main>
      </>
    );
  }

  if (!form) {
    return (
      <>
        <Header />
        <main className={styles.page}>
          <p>Carregando...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageHead}>
          <span className={styles.eyebrow}>Alunos</span>
          <h1>Editar aluno</h1>
          <p>Atualize os dados do aluno abaixo.</p>
        </div>

        <div className={styles.card}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Ex.: Maria Souza Lima"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="matricula">Matrícula</label>
              <input
                id="matricula"
                name="matricula"
                value={form.matricula}
                onChange={handleChange}
                placeholder="Ex.: 2026001"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="idade">Idade</label>
              <input
                id="idade"
                name="idade"
                type="number"
                min="1"
                max="120"
                value={form.idade}
                onChange={handleChange}
                placeholder="Ex.: 12"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="turma">Turma</label>
              <select
                id="turma"
                name="turma"
                value={form.turma}
                onChange={handleChange}
              >
                {TURMAS.map((turma) => (
                  <option key={turma} value={turma}>
                    {turma}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.buttonPrimary}>
                Salvar alterações
              </button>
              <Link href="/listaluno" className={styles.buttonSecondary}>
                Cancelar
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
