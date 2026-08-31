import Link from "next/link";
import Header from "../components/header";
import styles from "../page.module.css";

const features = [
  {
    href: "/cadaluno",
    title: "Cadastrar aluno",
    text: "Adicione um novo aluno com dados de turma e contato.",
  },
  {
    href: "/listaluno",
    title: "Lista de alunos",
    text: "Consulte, edite ou remova os alunos já cadastrados.",
  },
  {
    href: "/notaluno",
    title: "Lançar notas",
    text: "Registre as notas de cada aluno por disciplina e período.",
  },
  {
    href: "/listnota",
    title: "Lista de notas",
    text: "Veja o boletim consolidado de toda a turma.",
  },
];

export default function Principal() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <h1>Acompanhe a vida escolar em um só lugar.</h1>
            <p>
              O sistema do SESI Mirandópolis reúne cadastro de alunos e
              lançamento de notas em uma plataforma simples, para que a
              secretaria e os professores tenham tudo à mão.
            </p>
            <div className={styles.heroActions}>
              <Link href="/cadaluno" className={styles.primaryButton}>
                Cadastrar aluno
              </Link>
              <Link href="/listaluno" className={styles.secondaryButton}>
                Ver alunos
              </Link>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="210" cy="330" rx="150" ry="24" fill="#170b09" />
              <path
                d="M60 150 L210 90 L360 150 L210 210 Z"
                fill="#6e1414"
                stroke="#c81e2c"
                strokeWidth="2"
              />
              <path
                d="M60 150 V210 L210 270 L360 210 V150"
                fill="none"
                stroke="#c81e2c"
                strokeWidth="2"
              />
              <line x1="210" y1="210" x2="210" y2="270" stroke="#c81e2c" strokeWidth="2" />
              <circle cx="360" cy="150" r="5" fill="#e2394a" />
              <line x1="360" y1="150" x2="360" y2="205" stroke="#e2394a" strokeWidth="2" />
              <rect x="120" y="255" width="180" height="70" rx="6" fill="#170b09" stroke="#341915" strokeWidth="2" />
              <line x1="140" y1="272" x2="260" y2="272" stroke="#a68a83" strokeWidth="2" />
              <line x1="140" y1="288" x2="240" y2="288" stroke="#a68a83" strokeWidth="2" />
              <line x1="140" y1="304" x2="252" y2="304" stroke="#a68a83" strokeWidth="2" />
              <circle cx="210" cy="90" r="10" fill="#e2394a" />
            </svg>
          </div>
        </section>

        <section className={styles.features}>
          {features.map((f) => (
            <Link href={f.href} key={f.href} className={styles.card}>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
