import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <h1>Bem-vindo ao Sesi News</h1>
        <p>Seu portal de notícias.</p>

        <a href="/inicio">Entrar no site</a>
      </main>

      <Footer />
    </div>
  );
}