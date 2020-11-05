import styles from "../styles/components/logo.module.scss"

const Logo = (props) => {
      return (
            <img src={`./images/logo-${props.type}.svg`} 
            className={styles.logo}/>
      )
}

export default Logo