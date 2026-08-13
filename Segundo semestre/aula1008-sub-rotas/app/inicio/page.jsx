import Header from "../components/header";
import Footer from "../components/footer";

export default function Inicio() {
    return (
        <div>
            <Header />

            <main>
                <section className="destaque">
                    <span>SESI NEWS</span>
                    <h1>Informação que conecta você ao mundo.</h1>
                    <p>
                        Confira as principais notícias, acontecimentos e novidades.
                    </p>
                </section>

                <section className="noticias">
                    <h2>Últimas notícias</h2>

                    <div className="cards">
                        <article>
                            <span>Esportes</span>
                            <h3>Principais acontecimentos do mundo dos esportes</h3>
                            <p>
                                Confira as últimas notícias e informações esportivas.
                            </p>
                            <a href="/categorias/esportes">Ler notícia →</a>
                        </article>

                        <article>
                            <span>Educação</span>
                            <h3>Educação e conhecimento em destaque</h3>
                            <p>
                                Notícias e informações sobre educação.
                            </p>
                        </article>

                        <article>
                            <span>Tecnologia</span>
                            <h3>Novidades e tendências da tecnologia</h3>
                            <p>
                                Descubra as principais novidades do mundo tecnológico.
                            </p>
                        </article>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}