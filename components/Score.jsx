import styles from "../styles/components/score.module.scss"
import Logo from "./Logo"

const Score = (props) => {
      const type = props.game == "normal" ? "primary" : "secondary"
      return (
            <header className={styles[type]}>
                  <Logo type={type}/>
                  <span>
                        <p>SCORE</p>
                        <h2>{props.score}</h2>
                  </span>
                  <section className={styles.chart}>
                  </section>
            </header>
      )
}

export default Score