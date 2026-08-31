"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../header.module.css";

const links = [
  { href: "/", label: "Início" },
  { href: "/cadaluno", label: "Cadastrar aluno" },
  { href: "/listaluno", label: "Lista de alunos" },
  { href: "/notaluno", label: "Lançar notas" },
  { href: "/listnota", label: "Lista de notas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.brandMark}>SM</span>
          <span className={styles.brandText}>
            Sistema Escolar
            <small>SESI Mirandópolis</small>
          </span>
        </Link>

        <button
          className={styles.toggle}
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
