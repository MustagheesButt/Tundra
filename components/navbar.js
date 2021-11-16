import Link from 'next/link'
import { useContext, useState } from 'react'

import CartDrawer from './cartDrawer'
import { AppContext } from '../lib/AppContext'
import { SITE_TITLE } from '../lib/constants'
import styles from "../styles/Navbar.module.css"

const Navbar = ({ cartPage=false }) => {
  const { cart, cartDrawer, setCartDrawer } = useContext(AppContext)
  const [active, setActive] = useState(false)

  const cartIcon = <><i className="fa fa-shopping-cart" style={{width: '18px'}}></i> ({Object.keys(cart).length})</>

  return (
    <nav className={styles.navbar}>
      <i className={`fa fa-bars`} onClick={() => {setActive(!active)}}></i>
      <Link href='/'><a><h1>{SITE_TITLE}</h1></a></Link>
      <div className={`${styles.nav} ${active ? styles.active : ''}`}>
        <i className={`fa fa-close ${styles.nav_item}`} style={{alignSelf: 'center'}} onClick={() => {setActive(!active)}}></i>
        <Link href='/'><a className={styles.nav_item}>Home</a></Link>
        <Link href='/shop'><a className={styles.nav_item}>Shop</a></Link>
        <Link href='/login'><a className={styles.nav_item}>Login</a></Link>
        <Link href='/blog'><a className={styles.nav_item}>Blog</a></Link>
      </div>
      {cartPage ?
        <Link href='/cart'><a>{cartIcon}</a></Link> :
        <a onClick={() => setCartDrawer(!cartDrawer)}>{cartIcon}</a>
      }
      {cartDrawer ? <CartDrawer /> : ''}
    </nav>
  )
}

export default Navbar