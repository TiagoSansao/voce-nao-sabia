import styles from '../../styles/Curiosity.module.css'
import Head from 'next/head';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Link from 'next/link';
import { getAllCuriositiesId, getCuriosityData } from '../../lib/curiosities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface curiosityDataTypes {
  curiosityData: {
    id: string,
    curiosity: string,
    font: string,
  }
}



export default function curiosity({ curiosityData }: curiosityDataTypes) {

  const allIds = getAllCuriositiesId();
  const highestPage = allIds[allIds.length - 1].params.id;

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
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheeet" />
      </Head>
      <Header />
      <div className={styles.lMain}>
        <main className={styles.main}>

          {
            curiosityData.id === "0" ?
              <div className={styles.width120}></div> :
              <Link href={"./" + (parseInt(curiosityData.id) - 1)}><FontAwesomeIcon width="120" className={styles.arrow} icon={faArrowLeft} /></Link>
          }

          <div className={styles.curiosityBalloon}>
            {curiosityData.curiosity}
          </div>

          {
            curiosityData.id === highestPage ?
              <div className={styles.width120}></div> :
              <Link href={"./" + (parseInt(curiosityData.id) + 1)}><FontAwesomeIcon className={styles.arrow} icon={faArrowRight} /></Link>
          }


        </main>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllCuriositiesId();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const curiosityData = getCuriosityData(params.id)

  return {
    props: {
      curiosityData
    }
  }
}
