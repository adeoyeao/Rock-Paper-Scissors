import { useState } from "react"
import styles from "../styles/components/rules.module.scss"

const Rules = (props) => {
      const [ open, setOpen ] = useState(false)

      const handleClick = () => {
            setOpen(!open)
      }

      return (
            <section className={styles.rules}>
                  <button onClick={handleClick}>{!open ? "Rules" : "Close"}</button>
                  {open && <div className={styles[props.mode]} />}
            </section>
      )
}

export default Rules