import styles from './styles.module.scss'
import cx from 'classnames'

interface ButtonProps {
  isLoading: Boolean
  children: any
  disabled?: any,
  type?: any,
  onClick?: any 
}

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.waves} />
      <div className={styles.waves} />
      <div className={styles.waves} />
      <div className={styles.waves} />
      <div className={styles.waves} />
    </div>
  )
}

const Button = ({ isLoading, children, disabled, type = 'button', onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cx('theme-btn', styles.btn)} disabled={disabled} type={type}>
      {isLoading ? <Loader /> : <>{children}</>}
    </button>
  )
}

export default Button
