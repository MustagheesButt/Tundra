import { useEffect, useContext } from "react"
import Link from 'next/link'

import { AppContext } from "../lib/AppContext"
import Layout from "../components/layout"
import StaticHeader from "../components/StaticHeader"
import { SITE_TITLE } from "../lib/constants"

import { header_buttons as styles_header_btns } from "../styles/Header.module.css"
import styles from "../styles/Cart.module.css"

const Cart = () => {
  const { cart } = useContext(AppContext)

  useEffect(() => {
    
  }, [])

  return (
    <Layout title={`Cart — ${SITE_TITLE}`}>
      <main>
        <StaticHeader overlayColor='rgba(55,55,55, 0.5)' bgStyle={styles.header_bg} size='small'>
          <>
            <h1>Cart</h1>
            <p>Redefine Fashion. Modern & Elegant Designs.</p>
            <div className={styles_header_btns}>
              <Link href='/shop'><button className="btn btn-primary">Shop Now</button></Link>
              <Link href='/shop'><button className="btn btn-outline-info">Learn More</button></Link>
            </div>
          </>
        </StaticHeader>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(cart).map(cartItem => {
              return (
                <tr key={cartItem.product.node.databaseId}>
                  <td>{cartItem.product.node.databaseId}</td>
                  <td>{cartItem.product.node.name}</td>
                  <td>{cartItem.product.node.price}</td>
                  <td>{cartItem.quantity}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <Link href='/checkout'>Proceed to checkout</Link>
      </main>
    </Layout>
  )
}

export default Cart