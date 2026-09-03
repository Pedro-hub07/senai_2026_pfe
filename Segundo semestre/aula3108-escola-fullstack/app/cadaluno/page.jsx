"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from "../styles/ui.module.css";
import { saveAluno } from "../lib/storage";

const TURMAS = ["1º Ano", "2º Ano", "3º Ano", "4º Ano", "5º Ano"];

const initialForm = {
  nome: "",
  matricula: "",
  idade: "",
  turma: TURMAS[0],
};

export default function CadastroAluno() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState(null);

  const [bulkText, setBulkText] = useState("");
  const [bulkResult, setBulkResult] = useState(null);

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
    setForm(initialForm);
    setFeedback({
      type: "success",
      text: `Aluno "${form.nome}" cadastrado com sucesso.`,
    });
  }

  function handleBulkSubmit(event) {
    event.preventDefault();

    const linhas = bulkText
      .split("\n")
      .map((linha) => linha.trim())
      .filter(Boolean);

    if (linhas.length === 0) {
      setBulkResult({ sucesso: 0, erros: ["Cole ao menos uma linha."] });
      return;
    }

    let sucesso = 0;
    const erros = [];

    linhas.forEach((linha, index) => {
      const [nome, matricula, idade, turma] = linha
        .split(";")
        .map((parte) => parte?.trim() ?? "");

      if (!nome || !matricula) {
        erros.push(`Linha ${index + 1}: faltou nome ou matrícula.`);
        return;
      }

      const idadeNumerica = Number(idade);
      if (!idade || Number.isNaN(idadeNumerica) || idadeNumerica <= 0) {
        erros.push(`Linha ${index + 1}: idade inválida ("${idade || "vazio"}").`);
        return;
      }

      saveAluno({
        nome,
        matricula,
        idade,
        turma: TURMAS.includes(turma) ? turma : TURMAS[0],
      });
      sucesso += 1;
    });

    setBulkResult({ sucesso, erros });
    if (sucesso > 0 && erros.length === 0) {
      setBulkText("");
    }
  }

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.pageHead}>
          <span className={styles.eyebrow}>Alunos</span>
          <h1>Cadastro de aluno</h1>
          <p>Preencha os dados abaixo para adicionar um novo aluno à turma.</p>
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
                Cadastrar aluno
              </button>
              <Link href="/listaluno" className={styles.buttonSecondary}>
                Ver lista de alunos
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

        <div className={styles.pageHead} style={{ marginTop: 48 }}>
          <span className={styles.eyebrow}>Cadastro rápido</span>
          <h1 style={{ fontSize: "1.4rem" }}>Cadastrar vários alunos de uma vez</h1>
          <p>
            Cole uma lista com um aluno por linha, separando os campos por
            ponto e vírgula: <strong>nome; matrícula; idade; turma</strong>.
            A turma é opcional — se não for uma das turmas válidas, o aluno
            entra no 1º Ano por padrão.
          </p>
        </div>

        <div className={styles.card}>
          <form onSubmit={handleBulkSubmit}>
            <div className={styles.field}>
              <label htmlFor="bulk">Lista de alunos</label>
              <textarea
                id="bulk"
                className={styles.textarea}
                rows={7}
                value={bulkText}
                onChange={(e) => setBulkText(e.target.value)}
                placeholder={
                  "Maria Souza Lima; 2026001; 11; 1º Ano\n" +
                  "João Pedro Alves; 2026002; 12; 2º Ano\n" +
                  "Ana Clara Ferreira; 2026003; 10; 1º Ano"
                }
              />
              <small>Uma linha por aluno. Campos separados por ponto e vírgula ( ; ).</small>
            </div>

            <div className={styles.formActions} style={{ marginTop: 18 }}>
              <button type="submit" className={styles.buttonPrimary}>
                Cadastrar lista
              </button>
            </div>
          </form>

          {bulkResult && (
            <div style={{ marginTop: 18 }}>
              {bulkResult.sucesso > 0 && (
                <p className={`${styles.message} ${styles.messageSuccess}`}>
                  {bulkResult.sucesso} aluno(s) cadastrado(s) com sucesso.
                </p>
              )}
              {bulkResult.erros.length > 0 && (
                <p className={styles.message}>
                  {bulkResult.erros.length} linha(s) com problema:
                  <br />
                  {bulkResult.erros.join(" ")}
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
