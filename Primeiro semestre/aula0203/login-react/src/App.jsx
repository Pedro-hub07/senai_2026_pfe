import './App.css'
import big from './assets/img/big.jpg'

export default function App() {
  return (
    <div className='container'>

      <img src={big} alt="logo do corinthians" className='logo' />

      <h1 className='titulo'>Login</h1>
      <span className="subtitulo">para continuar</span>

      <label htmlFor="nome" className="label">NOME</label>
      <input 
        type="text" 
        className="campo" 
        id='nome'  
        placeholder='Seu nome'
      />

      <label htmlFor="senha" className="label">SENHA</label>
      <input 
        type="password" 
        className="campo" 
        id='senha'
        placeholder='********'
      />

      <button className='botao'>Log in</button>

      <div className='footer'>
        <a className="textoFooter" href="#">Esqueceu a senha?</a>
        <a className="textoFooter" href="#">Cadastre-se!</a>
      </div>

    </div>
  )
}

//export default App