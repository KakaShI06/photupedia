import { useState } from 'react'
import Button from '@/components/Button'
import styles from './styles.module.scss'
import { plusSignIcon } from '@/utility/svg'

const GifMakerContainer = () => {
  const [defaultInput, setDefaultInput] = useState(['', '', '', ''])
  const [moreInputField, setMoreInputField] = useState([])

  return (
    <div className='container page-maxcover'>
      <div className={styles.container}>
        <h1> Make GIF Animation</h1>

        <p className='text-center'>
          {' '}
          Upload Multiple Photos and make gif Animations{' '}
        </p>

        <form>
          <div className={styles.formWrapper}>
            <div className={styles.fileContainer}>
              <input type='file' value={defaultInput[0]} />
            </div>

            <div className={styles.fileContainer}>
              <input type='file' value={defaultInput[1]} />
            </div>

            <div className={styles.fileContainer}>
              <input type='file' value={defaultInput[2]} />
            </div>

            <div className={styles.fileContainer}>
              <input type='file' value={defaultInput[3]} />
            </div>

            {moreInputField.map((field, index) => (
              <div className={styles.fileContainer}>
                <input type='file' />
              </div>
            ))}

            <div className={styles.addMore}>
              <span>{plusSignIcon}</span>
            </div>

            <Button isLoading={false} disabled={false} type='submit'>
              Convert
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GifMakerContainer
