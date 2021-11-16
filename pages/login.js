import { useRouter } from "next/router"
import { useContext, useRef } from "react"

import Layout from "../components/layout"
import { loginUser } from "../lib/api"
import { AppContext } from "../lib/AppContext"
import { SITE_TITLE } from "../lib/constants"
import cardStyles from "../styles/Card.module.css"
import styles from "../styles/Login.module.css"


const bgs = [
  'https://cdn.wallpapersafari.com/80/30/5AHKJg.jpg',
  'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80',
  'https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
]

const Login = () => {
  const router = useRouter()
  const bgIndex = Math.round(Math.random() * (bgs.length - 1))
  const username = useRef()
  const password = useRef()
  const { user, setUser } = useContext(AppContext)

  const login = async () => {
    const user = await loginUser(username.current.value, password.current.value)
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
    router.push('/shop')
  }

  if (user) router.push('/shop')

  return (
    <Layout title={`Login — ${SITE_TITLE}`}>
      <main className={styles.container} style={{ backgroundImage: `url(${bgs[bgIndex]})` }}>
        <div className={`${cardStyles.card} ${styles.card}`}>
          <div className={cardStyles['card-header']}>
            Login
          </div>
          <div className={`${cardStyles['card-body']} ${styles['card-body']}`}>
            <h5 className="card-title">Login to your account</h5>
            {/* <p class="card-text">...</p> */}
            <input placeholder="Email" ref={username} />
            <input placeholder="Password" ref={password} type="password" />
            <button className="btn btn-primary" onClick={login}>Login</button>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Login