import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.text}>
        2021 - {new Date().getFullYear()} &copy; Você Não Sabia
      </p>
    </footer>
  )
}

export default Footer;