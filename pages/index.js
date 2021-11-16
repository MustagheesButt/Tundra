import Link from 'next/link'

import Layout from '../components/layout'
import Products from '../components/products'
import Slider from '../components/slider'
import StaticHeader from '../components/StaticHeader'
import styles from '../styles/Home.module.css'
import { header_buttons as styles_header_btns } from "../styles/Header.module.css"

const carouselData = [
  {link: '/apple-logo.webp', alt: "Apple Inc."},
  {link: '/microsoft-logo.webp', alt: "Microsoft Corporation"},
  {link: '/amazon-logo.webp', alt: "Amazon"},
  {link: '/google-logo.webp', alt: "Google, Alphabet"}
]

export default function Home() {
  const images = carouselData.map((d, i) => {
    return <img key={i} src={d.link} alt={d.alt} height="150" width="150" style={{objectFit: 'contain'}} />
  })

  return (
    <Layout title='Tundra' meta-desctription='A modern, minimalist ecommerce theme.'>
      <main>
        <StaticHeader bgStyle={styles.header_bg} overlayColor='rgba(255, 192, 203, 0.499)' flipped={true}>
          <>
            <h1>Tundra</h1>
            <p>Redefine Fashion. Modern & Elegant Designs.</p>
            <div className={styles_header_btns}>
              <Link href='/shop'><button className="btn btn-primary">Shop Now</button></Link>
              <Link href='/shop'><button className="btn btn-outline-info">Learn More</button></Link>
            </div>
          </>
        </StaticHeader>

        <section style={{ textAlign: 'center' }}>
          <h2>Our Customers</h2>
          <div>
            {images}
          </div>
        </section>

        <section style={{textAlign: 'center'}}>
          <h2>Fall {(new Date()).getFullYear()} Collection</h2>
          <p></p>
          <Slider>
            <Products tags={['gidle']} />
          </Slider>
        </section>
        
        <section style={{textAlign: 'center'}}>
          <h2>Summer {(new Date()).getFullYear()} Collection</h2>
          <p>Keep your cool in this scorching heat with our specialy crafted summer wear</p>
          <Slider>
            <Products excludeTags={['gidle']} />
          </Slider>
        </section>

        <section style={{textAlign: 'center'}}>
          <h2>Spring {(new Date()).getFullYear()} Collection</h2>
          <p>Flow with the exquisite beauty of this season, with our colorful spring designs</p>
          <Slider>
            <Products excludeTags={['gidle']} />
          </Slider>
        </section>
      </main>
    </Layout>
  )
}