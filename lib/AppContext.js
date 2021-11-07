import { useState, useEffect, createContext } from "react"
import { addToWPCart, getWPCart } from "./api"

export const AppContext = createContext([
  {},
  () => {console.log('hula hoo')}
])

const cartHistory = []

export const AppProvider = (props) => {
  const [cart, setCart] = useState({})

  const addToCart = (product) => {
    cartHistory.push(cart)

    const quantity = cart[product.id] ? cart[product.id].quantity + 1 : 1
    setCart({...cart, [product.id]: {product, quantity }})

    addToWPCart(product.databaseId)
  }

  const undo = () => {
    const lastState = cartHistory.pop()
    setCart(lastState)
  }

  useEffect(() => {
    window.onkeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z')
        undo()
    }

    async function initCart() {
      const data = await getWPCart()
    }

    initCart()
  }, [])

  return (
    <AppContext.Provider value={[cart, addToCart]}>
      {props.children}
    </AppContext.Provider>
  )
}