import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export default function Register() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmasenha, setConfirmaSenha] = useState('');

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        
        <h2 className="text-center mb-4">Login</h2>

        <form>
            
          {/* USUÁRIO */}
          <div className="mb-3">
            <label className="form-label">Usuário</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>

          {/* SENHA */}
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirme sua senha</label>
            <input
              type="password"
              className="form-control"
              value={confirmasenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
            />
          </div>

          {/* BOTÃO */}
          <button className="btn btn-primary w-100">
            Entrar
          </button>


        </form>
      </div>

    </div>
  );
}