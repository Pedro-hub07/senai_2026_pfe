import Header from "../components/header";
import Footer from "../components/footer";

export default function Categorias() {
    return (
        <div>
            <Header />

            <main>
                <h1>Categorias</h1>

                <div className="categorias">
                    <a href="/categorias/esportes">Esportes</a>
                </div>
            </main>

            <Footer />
        </div>
    )
}