import Head from 'next/head'
import Link from 'next/link'

import Carousel from '../components/carousel'
import Layout from '../components/layout'
import Products from '../components/products'
import styles from '../styles/Home.module.css'

const carouselData = [
  {link: '/pexels-mahdi-chaghari-10047607.jpg'},
  {link: '/pexels-mahdi-chaghari-10047607.jpg'},
  {link: '/pexels-mahdi-chaghari-10047607.jpg'},
  {link: '/pexels-mahdi-chaghari-10047607.jpg'}
]

export default function Home() {
  return (
    <Layout title='Tundra' meta-desctription='A modern, minimalist ecommerce theme.'>
      <main>
        <div className={styles.jumbotron} style={{backgroundImage: 'url(/pexels-mahdi-chaghari-10047607.jpg)'}}>
          <h1 style={{textAlign: 'right'}}>Tundra,<br />Fashion Redefined</h1>
        </div>

        <Carousel style={{margin: '10px 0'}} imageData={carouselData} />
        
        <section>
          <h2 style={{textAlign: 'center'}}>GIDLE Collection</h2>
          <Products tags={['gidle']} />
        </section>
        
        <section>
          <h2 style={{textAlign: 'center'}}>Others - Not GIDLE</h2>
          <Products excludeTags={['gidle']} />
        </section>
      </main>
    </Layout>
  )
}