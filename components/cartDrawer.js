import { useContext } from "react"
import Link from "next/link"

import { AppContext } from "../lib/AppContext"
import styles from "../styles/CartDrawer.module.css"

const CartDrawer = () => {
  const { cart, setCartDrawer } = useContext(AppContext)

  return (
    <div className={styles.cart_drawer}>
      <i className={`fa fa-close`} onClick={() => {setCartDrawer(false)}}></i>
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(cart).map(cartItem => {
            return (
              <tr key={cartItem.product.node.databaseId}>
                <td>{cartItem.product.node.name}</td>
                <td>{cartItem.product.node.price}</td>
                <td>{cartItem.quantity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link href="/checkout"><a className="btn btn-success">Checkout</a></Link>
    </div>
  )
}

export default CartDrawer