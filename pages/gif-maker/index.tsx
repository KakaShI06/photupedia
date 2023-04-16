import Layout from '@/components/Layout'
import { getIsMobile } from '@/helper/utility'
import GifMakerContainer from '@/page-containers/GifMakerContainer'

const GifMaker = ({ isMobile = false }: { isMobile: boolean }) => {
  return (
    <Layout isMobile={isMobile}>
      <GifMakerContainer />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const isMobile = getIsMobile(context.req.headers['user-agent'])

  return {
    props: {
      isMobile,
    },
  }
}

export default GifMaker

