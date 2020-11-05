import Link from "next/link"
import styles from "../styles/layouts/index.module.scss"

import Logo from "../components/Logo"
import NavButton from "../components/NavButton"

const Index = () => {
      return (
            <main className={styles.index}>
                  <Logo type="primary"/>
                  <NavButton type="login" link="login"/>
                  <NavButton type="register" link="register"/>
            </main>
      )
}

export default Index