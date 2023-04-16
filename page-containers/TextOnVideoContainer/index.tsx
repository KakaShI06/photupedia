import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react'
import Button from '@/components/Button'
import styles from './style.module.scss'
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg'
const ffmpeg = createFFmpeg({ log: true })

const TxtOnVideoContainer = () => {
  const [file, setFile] = useState<any>('')
  const [fileName, setFileName] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [position, setPosition] = useState('')
  const [ready, setReady] = useState<Boolean>(false)
  const [result, setResult] = useState<any>('')

  function handleFileUpload(e: any) {
    if (!fileName) {
      setFileName(e.target.files[0].name)
    }
    setFile(e.target.files?.item(0))
  }

  const load = async () => {
    // await ffmpeg.load()
    setReady(true)
  }

  useEffect(() => {
    load()
  }, [])

  const convertToGif = async () => {
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

    const data = ffmpeg.FS('readFile', 'output.gif')

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' })
    )

    setResult(url)
  }

  useEffect(() => {
    if ( file ) {
      convertToGif()
    }
  },[file])

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

            <Button isLoading={false} disabled={false} type='submit'>
              Convert
            </Button>
          </div>
        </form>

        {/* {file && (
          <>
            <div className={styles.endResult}>
              <video
                controls
                width='250'
                src={URL.createObjectURL(file)}
              ></video>
            </div>
          </>
        )} */}

        {result && (
          <div>
            <img src={result} />
          </div>
        )}
      </div>
    </div>
  )
}

export default TxtOnVideoContainer
