import Image from "next/image"
import Layout from "../../components/layout"
import { getAllProducts, getProduct } from "../../lib/api"

const Product = ({ product }) => {
  return (
    <Layout title={`${product.name} &mdash; Tundra`}>
      <section>
        <div>
          {product.image ? <Image src={product.image.sourceUrl} width='480' height='320' /> : ''}
        </div>
        <div>
          <h1>{product.name}</h1>
          <article dangerouslySetInnerHTML={{__html: product.description}}></article>
          <button>Add to Cart</button>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const products = await getAllProducts()

  const paths = products.nodes.map(p => ({ params: { slug: p.slug } }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)

  return {
    props: { product }
  }
}

export default Product