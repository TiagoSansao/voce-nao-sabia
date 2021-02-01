import styles from '../styles/Footer.module.css'
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        2021 - {new Date().getFullYear()} &copy; Você Não Sabia
      </p>
      <p><Link href="termos-de-servico">Termos de Serviço</Link> &nbsp;&nbsp;|&nbsp;&nbsp; <Link href="/politicas-de-privacidade">Políticas de Privacidade</Link> </p>
    </footer>
  )
}

export default Footer;