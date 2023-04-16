import { getIsMobile } from '@/helper/utility'
import Layout from '@/components/Layout'
import TxtOnVideoContainer from '@/page-containers/TextOnVideoContainer'

const AddTxtOnVideo = ({ isMobile = false }: { isMobile: boolean }) => {
  return (
    <Layout isMobile={isMobile}>
      <TxtOnVideoContainer />
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

export default AddTxtOnVideo
