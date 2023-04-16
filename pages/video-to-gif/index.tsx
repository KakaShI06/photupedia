import { useEffect, useState } from 'react'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
import { saveAs } from 'file-saver'
import { GetServerSideProps } from 'next'
import { getIsMobile } from '@/helper/utility'
import Layout from '@/components/Layout'
import VideoToGifContainer from '@/page-containers/VideoToGif';

const ffmpeg = createFFmpeg({ log: true })

const VideoToGif = ({ isMobile }: { isMobile: boolean }) => {
  const [video, setVideo] = useState('')
  const [name, setName] = useState('')

  const init = async () => {
    await ffmpeg.load()
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout isMobile={isMobile}>
      <VideoToGifContainer 
        name={name}
        video={video}
        setName={setName}
        setVideo={setVideo}
      />
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

export default VideoToGif
