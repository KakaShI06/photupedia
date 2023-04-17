import { burgerIcon } from '@/utility/svg'
import styles from './styles.module.scss'

const MobileLayout = () => {
  return (
    <div className={styles.burger}>
      {burgerIcon}
    </div>
  )
}

export default MobileLayout
