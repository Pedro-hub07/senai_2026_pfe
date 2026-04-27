import { useState } from 'react';
import Header from '../../components/header';
import './Cadastro.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    return(
        <section className="container">
            <Header/>

            <div className="card">
                <h2>Cadastro de dados pessoais</h2>

                <form className="form">

                    <div className="input-group">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Endereço</label>
                        <input type="text" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Celular</label>
                        <input type="text" placeholder="Telefone celular" value={celular} onChange={(e) => setCelular(e.target.value)}/>
                    </div>

                    <div className="input-group">
                        <label>Documento</label>
                        <input type="text" placeholder="Documento" value={documento} onChange={(e) => setDocumento(e.target.value)}/>
                    </div>

                    <button className="btn">
                        Salvar
                    </button>

                </form>
            </div>
        </section>
    )
}