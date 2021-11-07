import { useState } from "react"
import Layout from "../components/layout"
import Products from "../components/products"

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Layout title="Shop &mdash; Tundra">
      <main>
        <h1>shop</h1>
        <input placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
        <Products search={searchTerm} />
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