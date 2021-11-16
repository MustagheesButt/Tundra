import { useRef } from "react"

/* TODO: Smooth scrolling doesn't work on Safari */
const Slider = ({ children, controls=true }) => {
  const sliderRef = useRef(null)

  const right = () => {
    sliderRef.current.scrollBy({top: 0, left: 250, behavior: 'smooth'})
  }

  const left = () => {
    sliderRef.current.scrollBy({top: 0, left: -250, behavior: 'smooth'})
  }

  return (
    <>
      {controls ?
      <div style={{display: 'flex', justifyContent: 'center', gap: '20px', margin: '15px 0'}}>
        <i className="fa fa-arrow-circle-left fa-2x" onClick={left}></i>
        <i className="fa fa-arrow-circle-right fa-2x" onClick={right}></i>
      </div> : ''}
      <div  ref={sliderRef} style={{display: 'flex', flexWrap: 'nowrap', gap: '20px', overflowX: 'scroll'}}>
        {children}
      </div>
    </>
  )
}

export default Slider