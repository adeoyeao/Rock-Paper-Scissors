import styles from "../styles/layouts/authorisation.module.scss"
import Form from "../components/Form"
import NavButton from "../components/NavButton"

const Register = () => {
      return (
            <section className={styles.authorisation}>
            <Form type="register" />
            <NavButton link="" type="back"/>
            </section>
      )
}

export default Register