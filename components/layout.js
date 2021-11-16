import Head from 'next/head'

import Navbar from './navbar'
import { SITE_TITLE, SITE_DESCRIPTION } from '../lib/constants'
import styles from '../styles/Layout.module.css'

const Layout = ({ title, metaDescription, children }) => {
  return (
    <>
      <Head>
        <title>{title || SITE_TITLE}</title>
        <meta name="description" content={metaDescription || SITE_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" onload="this.onload=null;this.rel='stylesheet'" /> */}
      </Head>

      <Navbar />

      {children}

      <footer className={styles.footer}>
        &copy; Copyright {(new Date()).getFullYear()}. All rights reserved. Made with <span style={{color: 'red'}}>&hearts;</span> at <a href="https://nezuco.com" target="_blank" rel="noopener noreferrer">Nezuco Inc.</a>
      </footer>
    </>
  )
}

export default Layout