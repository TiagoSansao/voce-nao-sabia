import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Você Não Sabia - Curiosidades</title>
        <meta name="description" content="Aprenda e divirta-se ao mesmo tempo aqui com as curiosidades do Você Não Sabia!" />
        <meta name="viewport" content="width=device-width initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <div className={styles.lMain}>
        <main className={styles.main}>
          <section className={styles.mainTop}>
            <div className={styles.mainLeft}>
              <h2 className={styles.mainTextH2}>
                Aprendizado e<br />Entreitenimento
              </h2>
              <h3 className={styles.mainTextH3}>
                Você encontra aqui
              </h3>
              <h4 className={styles.mainTextH4}>
                Divirta-se com curiosidades<br /> interessantísimas que<br /><b> Você não Sabia</b>
              </h4>
              <button className={styles.seeButton}>
                <Link href={`/curiosidades/0`}>
                  <a className={styles.anchor}>
                    Ver Curiosidades <b className={styles.gt}>&gt;</b>
                  </a>
                </Link>
              </button>
            </div>
            <img src="/preta.png" alt="Dog Image" className={styles.mainImage} />
          </section>
          <table className={styles.table}>
            <caption>Informações</caption>
            <thead>
              <tr>
                <th>Curiosidades Visualizadas</th>
                <th>Curiosidades Enviadas<br />(Futuro)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>

      <Footer />
    </div>
  )
}
