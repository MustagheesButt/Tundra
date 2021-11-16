import { useEffect, useState } from 'react'
import { getAllProducts } from '../lib/api'
import Product from './product'

const fakeProducts = [
  {id: 1, name: 'Sample Product 1', shortDescription: 'Lorem impsum dalor consit'},
  {id: 2, name: 'Sample Product 2', shortDescription: 'Lorem impsum dalor consit'},
  {id: 3, name: 'Sample Product 3', shortDescription: 'Lorem impsum dalor consit'},
  {id: 4, name: 'Sample Product 4', shortDescription: 'Lorem impsum dalor consit'}
]

const Products = ({ search, tags, excludeTags, limit }) => {
  const [productsData, setProductsData] = useState(null)

  useEffect(() => {
    async function loadProducts() {
      const products = await getAllProducts()
      setProductsData(products.nodes)
    }

    loadProducts()
  }, [])

  let filteredProducts = productsData || fakeProducts

  if (search) {
    search = search.toLowerCase()
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)
    )
  }

  if (tags)
    filteredProducts = filteredProducts.filter(p => p.productTags?.nodes.map(t => t.name).filter(t => tags.includes(t)).length > 0)
  if (excludeTags)
    filteredProducts = filteredProducts.filter(p => p.productTags?.nodes.map(t => t.name).filter(t => excludeTags.includes(t)).length === 0)
  
  filteredProducts = filteredProducts.slice(0, limit)

  const products = filteredProducts.map((p) => {
    return <Product product={p} key={p.id} />
  })

  return (
    <>
      {products}
    </>
  )
}

export default Products