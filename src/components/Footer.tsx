import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Projeto */}
        <div>
          <h3 className={styles.footerTitle}>Conversor de Moedas Web</h3>
          <p className={styles.footerText}>
            Aplicação web moderna para conversão de moedas em tempo real,
            desenvolvida com tecnologias atuais e baseada na evolução de um
            projeto desktop em Python.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className={styles.footerTitle}>Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/" className={styles.footerLink}>Home</a>
            </li>
            <li>
              <a href="/converter" className={styles.footerLink}>Converter</a>
            </li>
            <li>
              <a href="/sobre" className={styles.footerLink}>Sobre</a>
            </li>
          </ul>
        </div>

        {/* Tecnologias */}
        <div>
          <h3 className={styles.footerTitle}>Tecnologias</h3>
          <ul className="space-y-1">
            <li className={styles.footerText}>Next.js</li>
            <li className={styles.footerText}>React</li>
            <li className={styles.footerText}>TypeScript</li>
            <li className={styles.footerText}>Tailwind CSS</li>
            <li className={styles.footerText}>API de câmbio em tempo real</li>
          </ul>
        </div>
      </div>

      {/* Linha inferior */}
      <div className={styles.footerBottom}>
        © {year} WebDevLuís. Todos os direitos reservados.
        <span className="mx-2">•</span>
        <a
          href="https://github.com/desenvolvimentoweb1983"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}