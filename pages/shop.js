import { useState } from "react"

import Layout from "../components/layout"
import Products from "../components/products"
import StaticHeader from "../components/StaticHeader"
import { SITE_TITLE } from "../lib/constants"
import styles from "../styles/Shop.module.css"

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Layout title={`Shop — ${SITE_TITLE}`}>
      <main>
        <StaticHeader size='small' bgStyle={styles.header_bg} overlayColor='rgba(95, 157, 159, 0.5)'>
          <h1>Shop</h1>
          <p>Experience today the shop of tomorrow</p>
        </StaticHeader>
        
        <aside>
          <input placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
        </aside>

        <section>
          <h2 style={{ textAlign: 'center' }}>Everything You Need</h2>
          <div className={styles.products_grid}>
            <Products search={searchTerm} />
          </div>
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Shop