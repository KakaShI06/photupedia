import { getIsMobile } from '@/helper/utility'
import Layout from '@/components/Layout'
import VideoToGifContainer from '@/page-containers/VideoToGif'

interface pageProps {
  isMobile: boolean
  title: string
  subHeading: string
  description: string
}

const VideoToGif = ({
  isMobile,
  title,
  description,
  subHeading,
}: pageProps) => {
  return (
    <Layout isMobile={isMobile}>
      <VideoToGifContainer
        title={title}
        description={description}
        subHeading={subHeading}
      />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const isMobile = getIsMobile(context.req.headers['user-agent'])
  const title = 'Gif Maker'
  const subHeading = 'Convert Videos To Gifs In Seconds'
  const description =
    'Turn your favorite videos into shareable gifs with PhotoPedia. Our easy-to-use app lets you quickly convert videos to gifs without any hassle. Choose your favorite clip, select the start and end points, and let PhotoPedia do the rest. Share your newly created gifs with your friends and family on social media or messaging apps. With PhotoPedia, the possibilities are endless.'

  return {
    props: {
      isMobile,
      subHeading,
      title,
      description,
    },
  }
}

export default VideoToGif
