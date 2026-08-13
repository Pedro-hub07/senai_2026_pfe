import imgmusculacao from 'https://viniciusrcamargo.github.io/academia_fofitness/img/musculacao.jpg';
import imgcardio from 'https://viniciusrcamargo.github.io/academia_fofitness/img/corrida.jpg';
import imgyoga from 'https://viniciusrcamargo.github.io/academia_fofitness/img/yoga.jpg';

export default function Main(){
    return(
        export default function Main(){
    return(
        <main>
            <section id="home">
                <h2> Transforme seu corpo com a <span> Fofitness </span></h2>
                <p> A academia perfeita para quem deseja saúde, diversão e um shape inexplicavel</p>
                <button>Começar Agora</button>
            </section>

            <section id="sobre">
                <h2>Sobre nós</h2>
                <p> Somos uma academia focada em perda de peso com saúde, bem-estar e sem dietas mirabolantes. Nosso lema é OUSADIA E ALEGRIA</p>
            </section>

            <section id="modalidades">
                <h2> Modalidades</h2>

                <div className="exercicio">
                    <h3>Musculação</h3>
                    <img src="https://viniciusrcamargo.github.io/academia_fofitness/img/musculacao.jpg" />
                </div>

                <div className="exercicio">
                    <h3>Yoga</h3>
                    <img src="https://viniciusrcamargo.github.io/academia_fofitness/img/yoga.jpg" />
                </div>

                <div className="exercicio">
                    <h3>Cardio</h3>
                    <img src="https://viniciusrcamargo.github.io/academia_fofitness/img/corrida.jpg" />
                </div>

            </section>
        </main>
    ));
}

          <section id="planos"> <h1> Planos e Preços</h1>
            
            <div className="tabela_planos">
                <h3> Básico </h3>
                <p className="preco"> R$ 79,99/mês</p>
                <ul>
                    <li> Acesso à musculação</li>
                    <li> Aulas coletivas limitadas</li>
                    <li> Horário Livre </li>
                </ul>
            </div>
            <div className="plano destaque">
                <h3> Premium </h3>
                <p className="preco"> R$ 129,99/mês</p>
                <ul>
                    <li> Acesso total </li>
                    <li> Personal Trainer</li>
                    <li> Yoga e Funcional </li>
                </ul>
            </div>
            <div className="plano">
                <h3> Básico </h3>
                <p className="preco"> R$ 199,99/mês </p>
                <ul>
                    <li> Personal Exclusivo </li>
                    <li> Nutricionista</li>
                    <li> Acompanhamento mensal </li>
                    <li> Bom dia da atendente </li>
                </ul>
            </div>
            </section>
            <section id="depoimentos"> 
                <h2> O que nosos alunos dizem</h2>
                <div>
                <p> "A melhor academia de mirandópolis, ambiente confortável, climatizado e acessível."</p>
                <span>Pedro Barbosa</span>
                </div>
                <div className="depoimento">
                    <p> "Professores Atenciosos, estrutura impecável e o melhor, tem ar condicionado!"</p>
                    <span> Amorim da Penha</span>
                </div>
            </section>
            <section id="contato" className="contato">
                <h2> Entre em contato</h2>
                <form action="">
                    <input type="text" placeholder="Seu nome" />
                    <input type="text" placeholder="Seu e-mail" />
                    <textarea name="" id="" placeholder="Mensagem"></textarea>
                    <button type="submit"> Enviar </button>
                </form>
            </section>
    
}