import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();

    const isFormValid = usuario.length >= 3 && senha.length >= 3;

    async function handleLogin(e) {
        e.preventDefault();

        if (!isFormValid) {
            setErro("Preencha corretamente os campos.");
            return;
        }

        setErro('');
        setLoading(true);

        setTimeout(() => {
            if (usuario === "admin" && senha === "123") {
                navigate("/dashboard");
            } else {
                setErro("Usuário ou senha inválidos.");
            }
            setLoading(false);
        }, 1200);
    }

    return (
        <section className="login-container">
            <div className="login-box">

                {/* IMAGEM */}
                <div className="login-image">
                    <img src={imgEstacao} alt="Estação Meteorológica" />
                    <div className="image-overlay">
                        <h1>Bem-vindo à Estação Meteorológica SESI SENAI</h1>
                        <p>Monitoramento climático em tempo real</p>
                    </div>
                </div>

                {/* FORM */}
                <div className="login-form-side">
                    <div className="form-wrapper">

                        <h2>Login</h2>
                        <p>Acesse sua conta</p>

                        <form onSubmit={handleLogin} noValidate>

                            {/* USUÁRIO */}
                            <div className={`input-group ${erro ? "error" : ""}`}>
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                    autoComplete="username"
                                    aria-label="Usuário"
                                />
                            </div>

                            {/* SENHA */}
                            <div className={`input-group ${erro ? "error" : ""}`}>
                                <FaLock className="input-icon" />

                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    autoComplete="current-password"
                                    aria-label="Senha"
                                />

                                <span
                                    className="toggle-password"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                >
                                    {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>

                            {/* ERRO */}
                            {erro && <div className="erro-msg">{erro}</div>}

                            {/* BOTÃO */}
                            <button
                                type="submit"
                                className="btn-login"
                                disabled={!isFormValid || loading}
                            >
                                {loading ? <span className="spinner"></span> : "Entrar"}
                            </button>

                            <div className="form-footer">
                                <span>
                                    Não tem conta? <Link to="/register">Cadastre-se</Link>
                                </span>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
