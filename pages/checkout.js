import { useContext } from "react"
import Layout from "../components/layout"

import { AppContext } from "../lib/AppContext"
import { parseCurrency } from "../lib/util"

const Checkout = () => {
  const { cart } = useContext(AppContext)

  return (
    <Layout>
      <h1 style={{textAlign: 'center'}}>Checkout</h1>
      <section style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{display: 'flex', flexDirection: 'column', width: '40%'}}>
          <h1>Billing Details</h1>
          <input placeholder="First Name" type='text' />
          <input placeholder="Last Name" type='text' />
          <input placeholder="Company Name (optional)" type='text' />
          
          <label>Country</label>
          <select>
            <option>Pakistan</option>
          </select>
          <label>Address</label>
          <input placeholder="House # and street address" type='text' />
          <input placeholder="Apartment, suite, unit (optional)" type='text' />
          <input placeholder="City/Town" type='text' />
          
          <label>State/County</label>
          <select>
            <option>Punjab</option>
          </select>

          <input placeholder="Postcode/Zip Code" type='text' />
          <input placeholder="Phone Number" type='tel' />
          <input placeholder="Email" type='email' />

          <input type='checkbox' /> Create an Account?
          <input type='checkbox' /> Ship to a different Address?

          <textarea placeholder="Order notes (optional)"></textarea>
        </div>

        <div>
          <h1>Your Order</h1>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(cart).map(c => {
                return (
                  <tr key={c.product.node.id}>
                    <td>{c.product.node.name} &times; {c.quantity}</td>
                    <td>{parseCurrency(c.product.node.price) * c.quantity}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <button>Place Order</button>
        </div>
      </section>
    </Layout>
  )
}

export default Checkout