import styles from '../styles/Header.module.css';

function Header() {
  return (
    <div className={styles.lHeader}>
      <header className={styles.container}>
        <img src="/magteste.png" className={styles.icon} alt="icon" />
        <h1 className={styles.h1}>&nbsp;Você Não Sabia</h1>
      </header>
    </div>
  )

}

export default Header;