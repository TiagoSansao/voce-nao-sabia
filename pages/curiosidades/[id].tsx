import Layout from '../../components/layout'
import { getAllCuriositiesId, getCuriosityData } from '../../lib/curiosities'

interface curiosityDataTypes {
  curiosityData: {
    id: number,
    curiosity: string,
    font: string,
  }
}

export default function curiosity({ curiosityData }: curiosityDataTypes) {
  return (
    <Layout>
      {curiosityData.curiosity}
      <br />
      {curiosityData.id}
      <br />
      {curiosityData.font}
      <br />
    </Layout>
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
