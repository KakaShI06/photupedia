import { rightArrow } from '@/utility/svg'
import styles from './style.module.scss'

const IndexPage = () => {
  return (
    <div className='container page-cover'>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className='text-center'>
            Transform Your Images into Masterpieces
          </h1>
          <p className={styles.lead}>
            Photopedia is a platform that can help in to elevate Your Photos to
            the Next Level. Getting started for free.
          </p>

          <div className={styles.btnWrapper}>
            <button className='theme-btn'>
              GET STARTED NOW {rightArrow}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
