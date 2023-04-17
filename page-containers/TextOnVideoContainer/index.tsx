import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import styles from './style.module.scss'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
const ffmpeg = createFFmpeg({ log: true })

const TxtOnVideoContainer = () => {
  const [file, setFile] = useState<any>('')
  const [fileName, setFileName] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [position, setPosition] = useState('')
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

  const convertToGif = async () => {
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
    console.log(e.target.href)
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
      <div className={styles.container}>
        <h1> Add Text to Video </h1>
        <p className='text-center'>Add Text to any video.</p>

        <form>
          <div className={styles.formWrapper}>
            <div className={styles.fileContainer}>
              <input
                required
                type='file'
                onChange={(e) => handleFileUpload(e)}
              />
            </div>

            <div className={styles.inputField}>
              <label>Text/Subtitle</label>
              <input
                required
                value={subTitle}
                onChange={(e: any) => setSubTitle(e.target.value)}
              />
            </div>

            <div className={styles.inputField}>
              <label> Select Position </label>
              <select
                required
                value={position}
                onChange={(e: any) => setPosition(e)}
              >
                <option value='top'>Top</option>
                <option value='bottom'>Bottom</option>
              </select>
            </div>

            <Button
              type='submit'
              isLoading={!!isLoading}
              disabled={false}
              onClick={convertToGif}
            >
              Convert
            </Button>
          </div>
        </form>

        {result && (
          <div className={styles.resutWrapper}>
            <div className={styles.resultImageWrapper}>
              <img src={result} width='90%' />
            </div>

            <div className={styles.inputField}>
              <label>Text/Subtitle</label>
              <input
                required
                value={subTitle}
                onChange={(e: any) => setSubTitle(e.target.value)}
              />
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
      </div>
    </div>
  )
}

export default TxtOnVideoContainer
