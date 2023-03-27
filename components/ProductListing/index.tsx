import Link from 'next/link'
import { productListing } from './constant'
import styles from './listing.module.scss'

const ProductListing = () => {
  return (
    <div className={styles.listing}>
      <div className={styles.listing__container}>
        {productListing.map((prod, index) => (
          <Link key={index} href={prod.link}>
            <div className={styles['listing__container-list']}>{prod.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductListing
