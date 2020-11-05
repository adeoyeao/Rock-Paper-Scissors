import styles from "../styles/components/loading.module.scss"
import { useState, useEffect } from "react"

const Loading = () => {
      const [ position, setPosition ] = useState(0)
      const icons = ["rock", "paper", "scissors", "lizard", "spock"]

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(position => position + 1);
    }, 1000);
  }, []);

      const iconStyle = {
            backgroundImage: `url("./images/icon-${icons[position]}.svg")`,
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
      }

      return (
            <section className={styles.loading}>
                  <div className={styles.outer}></div>
                  <div className={styles.icon} style={iconStyle}></div>
            </section>
      )
}

export default Loading