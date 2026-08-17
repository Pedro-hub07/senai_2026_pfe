"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  function validarNumeros() {
    if (numero1 === "" || numero2 === "") {
      setResultado("Digite os dois números");
      return false;
    }

    return true;
  }

  function adicionar() {
    if (validarNumeros()) {
      setResultado(Number(numero1) + Number(numero2));
    }
  }

  function subtrair() {
    if (validarNumeros()) {
      setResultado(Number(numero1) - Number(numero2));
    }
  }

  function multiplicar() {
    if (validarNumeros()) {
      setResultado(Number(numero1) * Number(numero2));
    }
  }

  function dividir() {
    if (validarNumeros()) {
      if (Number(numero2) === 0) {
        setResultado("Não é possível dividir por zero");
        return;
      }

      setResultado(Number(numero1) / Number(numero2));
    }
  }

  function raizQuadrada() {
    if (numero1 === "") {
      setResultado("Digite um número");
      return;
    }

    if (Number(numero1) < 0) {
      setResultado("Não existe raiz real");
      return;
    }

    setResultado(Math.sqrt(Number(numero1)));
  }


  return (
    <main className={styles.container}>

      <h1>Calculadora</h1>

      <input
        type="number"
        placeholder="Primeiro número"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Segundo número"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />


      <div className={styles.botoes}>
        <button onClick={adicionar}>+</button>
        <button onClick={subtrair}>-</button>
        <button onClick={multiplicar}>×</button>
        <button onClick={dividir}>÷</button>
      </div>


      <button 
        className={styles.raiz}
        onClick={raizQuadrada}
      >
        √ Raiz quadrada (primeiro número)
      </button>


      <h2>
        Resultado: {resultado}
      </h2>

    </main>
  );
}