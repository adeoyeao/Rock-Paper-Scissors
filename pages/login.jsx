import styles from "../styles/layouts/authorisation.module.scss"
import Form from "../components/Form"
import NavButton from "../components/NavButton"

const Login = () => {
      return (
            <section className={styles.authorisation}>
            <Form type="login"/>
            <NavButton link="" type="Back"/>
            </section>
      )
}

export default Login