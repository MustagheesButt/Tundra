import Link from 'next/link'
import { useContext } from 'react'

import { AppContext } from '../lib/AppContext'
import { toast } from '../lib/util'
import styles from '../styles/Card.module.css'

const Product = ({ product }) => {
  const { addToCart } = useContext(AppContext)
  const { slug, name, image, shortDescription, price } = product

  const _addToCart = (e) => {
    e.preventDefault()
    addToCart(product)
    toast("Added to cart!", 'success')
  }

  return (
    <Link href={`/product/${slug}`}>
      <a>
        <div className={styles.card} style={{width: '18rem'}}>
          <img src={image?.sourceUrl || '/placeholder.png'} width='300' height='250' className={styles['card-img-top']} alt="..." />
          <div className={styles['card-body']}>
            <h3 className="card-title">{name} {price}</h3>
            <p className="card-text" dangerouslySetInnerHTML={{__html: `${shortDescription?.substring(0,100)}...`}}></p>
            <button className="btn btn-primary" onClick={_addToCart}>Add to Cart</button>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Product