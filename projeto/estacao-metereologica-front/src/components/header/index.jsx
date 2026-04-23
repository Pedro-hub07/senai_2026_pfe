import { Link } from "react-router-dom";
import './header.css';

export default function Header() {
    return(
        <header>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h1>Estação Meteorológica</h1>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/dashboard'> 🏠 Home </Link>
                            </li>

                            <li>
                                <Link to='/cadastro'> 📝 Cadastro </Link>
                            </li>

                            <li>
                                <Link to='/relatorio'> 📋 Relatório </Link>
                            </li>

                            <li>
                                <Link to='/'> 🔚 Sair </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
