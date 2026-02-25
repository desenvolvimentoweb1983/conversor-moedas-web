import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbarHeader}>
      <nav aria-label="Navegação principal" className={styles.navbarNav}>
        {/* Logo / Nome do Projeto */}
        <Link
          href="/"
          className={styles.navbarLogo}
          aria-label="Página inicial - Conversor de Moedas"
        >
          Conversor de Moedas
        </Link>

        {/* Links de navegação */}
        <div className={styles.navbarLinks}>
          <Link href="/">Home</Link>
          <Link href="/converter">Converter</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>
    </header>
  );
}