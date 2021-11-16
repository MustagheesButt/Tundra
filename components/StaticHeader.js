import styles from "../styles/Header.module.css"

const StaticHeader = ({ bgStyle, children, overlayColor, size='medium', flipped=false }) => {
  return (
    <header className={`${styles.header} ${styles[size]}`}>
      <div className={`${styles.bg} ${bgStyle} ${flipped ? styles.flipped : ''}`}>
        {overlayColor ? <div className={styles.bg_overlay} style={{backgroundColor: overlayColor}}></div> : ''}
      </div>
      <div className={styles.header_content}>
        {children}
      </div>
    </header>
  )
}

export default StaticHeader