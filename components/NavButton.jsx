import Link from "next/link"
import styles from "../styles/components/navbutton.module.scss"

const NavButton = (props) => {

      return (
            <Link href={`/${props.link}`}><a className={styles.navbutton}>{props.type}</a></Link>
      )
}

export default NavButton