import Layout from '@/components/Layout'
import ProductListing from '@/components/ProductListing'
import { getIsMobile } from '@/helper/utility'

const App = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Layout isMobile={isMobile}>
      <ProductListing />
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
