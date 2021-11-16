import { useState, useEffect, createContext } from "react"
import { addToWPCart, getWPCart } from "./api"
import { toast } from "./util"

export const AppContext = createContext([
  {},
  () => {console.log('hula hoo')}
])

const cartHistory = []

export const AppProvider = (props) => {
  const [cart, setCart] = useState({})
  const [cartDrawer, setCartDrawer] = useState(false)
  const [user, setUser] = useState(null)

  const addToCart = (product) => {
    cartHistory.push(cart)

    const quantity = cart[product.databaseId] ? cart[product.databaseId].quantity + 1 : 1
    setCart({...cart, [product.databaseId]: {product: { node: product }, quantity }})

    addToWPCart(product.databaseId)
  }

  // TODO: sync with WP
  const undo = () => {
    const lastState = cartHistory.pop() || {}
    setCart(lastState)
    toast("Undo successful!")
  }

  useEffect(() => {
    window.onkeydown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z')
        undo()
    }

    async function init() {
      const cartContents = await getWPCart()
      setCart(cartContents)

      setUser(JSON.parse(localStorage.getItem('user')))
    }

    init()
  }, [])

  return (
    <AppContext.Provider value={{cart, addToCart, cartDrawer, setCartDrawer, user, setUser}}>
      {props.children}
    </AppContext.Provider>
  )
}