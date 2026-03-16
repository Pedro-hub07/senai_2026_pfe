import { useState } from "react";
import "./calculadora.css";

export default function Calculadora({ titulo }) {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [resultado, setResultado] = useState("");

    function validar() {
        if (num1 <= 0 || num2 <= 0) {
            alert("Não são permitidos números negativos ou zero");
            return false;
        }
        return true;
    }

    function somar(e) {
        e.preventDefault();
        if (!validar()) return;

        setResultado(Number(num1) + Number(num2));
    }

    function subtrair(e) {
        e.preventDefault();
        if (!validar()) return;

        setResultado(Number(num1) - Number(num2));
    }

    function multiplicar(e) {
        e.preventDefault();
        if (!validar()) return;

        setResultado(Number(num1) * Number(num2));
    }

    function dividir(e) {
        e.preventDefault();
        if (!validar()) return;

        setResultado(Number(num1) / Number(num2));
    }

    function potencia(e) {
        e.preventDefault();
        if (!validar()) return;

        setResultado(Number(num1) ** Number(num2));
    }

    function raiz(e) {
        e.preventDefault();

        if (num1 <= 0) {
            alert("Digite um número maior que zero");
            return;
        }

        setResultado(Math.sqrt(Number(num1)));
    }

    function limpar(e) {
        e.preventDefault();

        setNum1("");
        setNum2("");
        setResultado("");
    }

    return (
        <>
            <h1>{titulo}</h1>

            <div className="container">

                <div className="calculadora">

                    <form>

                        <label>Número 1</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={num1}
                            onChange={(e) => setNum1(e.target.value)}
                        />

                        <label>Número 2</label>
                        <input
                            type="number"
                            placeholder="0"
                            value={num2}
                            onChange={(e) => setNum2(e.target.value)}
                        />

                        <div className="botoes">
                            <button onClick={somar}>Somar</button>
                            <button onClick={subtrair}>Subtrair</button>
                            <button onClick={multiplicar}>Multiplicar</button>
                            <button onClick={dividir}>Dividir</button>
                            <button onClick={potencia}>Potência</button>
                            <button onClick={raiz}>Raiz</button>
                            <button className="limpar" onClick={limpar}>Limpar</button>
                        </div>

                        <span className="resultado">
                            Resultado: {resultado}
                        </span>

                    </form>

                </div>

            </div>
        </>
    );
}