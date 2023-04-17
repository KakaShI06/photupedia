import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import styles from './videotoGif.module.scss'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
const ffmpeg = createFFmpeg({ log: true })

interface pageProps {
  title: string
  subHeading: string
  description: string
}

const VideoToGifContainer = ({ title, subHeading, description }: pageProps) => {
  const [file, setFile] = useState<any>('')
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>('')

  function handleFileUpload(e: any) {
    if (!fileName) {
      setFileName(e.target.files[0].name)
    }
    setFile(e.target.files?.item(0))
  }

  const load = async () => {
    await ffmpeg.load()
    setIsLoading(false)
  }

  useEffect(() => {
    if (file) {
      setIsLoading(true)
      load()
    }
  }, [file])

  const convertToGif = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    ffmpeg.FS('writeFile', 'text.mp4', await fetchFile(file))

    await ffmpeg.run(
      '-i',
      'text.mp4',
      '-t',
      '2.5',
      '-ss',
      '2.0',
      '-f',
      'gif',
      'out.gif'
    )

    const data = ffmpeg.FS('readFile', 'out.gif')

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' })
    )

    setIsLoading(false)
    setResult(url)
  }

  const download = (e: any) => {
    fetch(e.target.href, {
      method: 'GET',
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', 'image.png') //or any other extension
          document.body.appendChild(link)
          link.click()
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='container page-maxcover'>
      <div className={styles.pageContainer}>
        <h1 className={styles.mainHeading}> {title} </h1>
        <p className={styles.mainSubHeading}>{subHeading}</p>

        <form onSubmit={convertToGif}>
          <div className={styles.formWrapper}>
            <div className={styles.fileContainer}>
              <input
                required
                type='file'
                onChange={(e) => handleFileUpload(e)}
              />
            </div>

            <small>File Size Limit : 50mb</small>

            <Button type='submit' isLoading={!!isLoading} disabled={false}>
              Convert
            </Button>
          </div>
        </form>

        {result && (
          <div className={styles.resutWrapper}>
            <div className={styles.resultImageWrapper}>
              <img src={result} width='90%' />
            </div>

            <Button
              type='button'
              isLoading={false}
              disabled={false}
              onClick={() => {}}
            >
              <a
                href={result}
                onClick={(e: any) => {
                  download(e)
                }}
                download
              >
                Download
              </a>
            </Button>
          </div>
        )}

        <div className={styles.description}>
          <h3>About the Photopedia GifMaker:</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoToGifContainer
