import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <img src="/magteste.png" className={styles.icon} alt="icon" />
      <h1 className={styles.h1}>&nbsp;Você Não Sabia</h1>
    </header>
  )

}

export default Header;