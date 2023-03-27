import Footer from '../Footer'
import MainLogo from '../MainLogo'
import DesktopLayout from './desktop'
import styles from './layout.module.scss'
import MobileLayout from './mobile'

interface layoutProps {
  children: any
  isMobile: boolean
}

const Layout = ({ children, isMobile }: layoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__container}>
        <MainLogo />
        {isMobile ? <MobileLayout /> : <DesktopLayout />}
      </div>
      <div className={styles.layout__body}>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
