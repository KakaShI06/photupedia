import classNames from 'classnames'
import { FunctionTypeNode } from 'typescript'
import styles from './videotoGif.module.scss'

interface containerProps {
  name: string
  setName: any
  video: string
  setVideo: any
}

const VideoToGifContainer = ({
  name,
  setName,
  video,
  setVideo,
}: containerProps) => {
  function handleSubmit(e: any) {}

  function handleVideo(e: any) {
    if (!name) {
      setName(e.target.files[0].name)
    }
    setVideo(e.target.files?.item(0))
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h2 className={classNames('theme-color, text-center')}>
            Upload Your Video
          </h2>
          <div className={styles.fieldContainer}>
            <label>Name of the video</label>
            <input
              type='text'
              placeholder='Enter Name of Video'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.fieldContainer}>
            <label>Video</label>
            <input type='file' onChange={(e) => handleVideo(e)} />
          </div>

          <div className={styles.btnWrapper}>
            <button>Do Magic</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default VideoToGifContainer
