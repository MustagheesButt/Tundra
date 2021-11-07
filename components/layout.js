import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import styles from '../styles/Layout.module.css'
import { SITE_TITLE, SITE_DESCRIPTION } from '../lib/constants'
import { AppContext } from '../lib/AppContext'

const Layout = ({ title, metaDescription, children }) => {
  const [cart] = useContext(AppContext)

  return (
    <>
      <Head>
        <title>{title || SITE_TITLE}</title>
        <meta name="description" content={metaDescription || SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href='/'>Home</Link>
          <Link href='/shop'>Shop</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/cart'><a>Cart ({Object.keys(cart).length})</a></Link>
        </nav>
      </header>

      {children}

      <footer className={styles.footer}>
        &copy; Copyright 2022. All rights reserved. Made with <span style={{color: 'red'}}>&hearts;</span> at <a href="https://nezuco.com" target="_blank" rel="noopener noreferrer">Nezuco Inc.</a>
      </footer>
    </>
  )
}

export default Layout