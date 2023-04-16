import Layout from '@/components/Layout'
import { getIsMobile } from '@/helper/utility'
import IndexPage from '@/page-containers/IndexPage'

const App = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Layout isMobile={isMobile}>
      <IndexPage />
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

export default App
