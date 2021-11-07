import { useContext, useEffect, useState } from "react"
import Link from 'next/link'

import Layout from "../components/layout"
import { getWPCart } from "../lib/api"
import { AppContext } from "../lib/AppContext"

const Cart = () => {
  // const [cart] = useContext(AppContext)
  const [cart, setCart] = useState([])

  useEffect(() => {
    async function fetchCart() {
      const data = await getWPCart()
      console.log(data)
    }

    fetchCart()
  }, [])

  return (
    <Layout>
      <h1>Cart</h1>
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
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.name}</td>
                <td>{cartItem.product.price}</td>
                <td>{cartItem.quantity}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Link href='/checkout'>Proceed to checkout</Link>
    </Layout>
  )
}

export default Cart