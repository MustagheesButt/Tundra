import Image from 'next/image'

const Carousel = ({ imageData, style }) => {
  const images = imageData.map((d, i) => {
    return <Image key={i} src={d.link} height="150" width="150" />
  })

  return (
    <div style={style}>
      {images}
    </div>
  )
}

export default Carousel