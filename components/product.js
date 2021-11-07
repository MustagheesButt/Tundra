import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'

import styles from '../styles/Card.module.css'
import placeholder from '../public/pexels-mahdi-chaghari-10047607.jpg'
import { AppContext } from '../lib/AppContext'

const Product = ({ product }) => {
  const [cart, _addToCart] = useContext(AppContext)
  const { slug, name, image, description, price } = product

  const addToCart = (e) => {
    e.preventDefault()
    _addToCart(product)
  }

  return (
    <Link href={`/product/${slug}`}>
      <a>
        <div className={styles.card} style={{width: '18rem'}}>
          <Image src={image?.sourceUrl || placeholder} width='300' height='250' className="card-img-top" alt="..." />
          <div className={styles['card-body']}>
            <h5 className="card-title">{name} {price}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{__html: `${description.substring(0,100)}...`}}></p>
            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Product