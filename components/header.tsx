import styles from '../styles/Header.module.css';
import Link from 'next/link';

function Header() {
  return (
    <div className={styles.lHeader}>
      <header className={styles.container}>
        <Link href="/">
          <div className={styles.containerv2}>
            <img src="/magteste.png" className={styles.icon} alt="icon" />
            <h1 className={styles.h1}>&nbsp;Você <span className={styles.red}>Não</span> Sabia</h1>
          </div>
        </Link>
      </header>
    </div>
  )

}

export default Header;