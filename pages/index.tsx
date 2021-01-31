import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&display=swap" rel="stylesheet" />
      </Head>

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
              Divirta-se com curiosidades interessantísimas que<b> Você não Sabia</b>
            </h4>
          </div>
          <img src="/preta.png" alt="Dog Image" className={styles.mainImage} />
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
