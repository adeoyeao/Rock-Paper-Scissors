import styles from "../styles/components/result.module.scss"
import ResultIcon from "./ResultIcon"

const Result = (props) => {
      const result = props.choices
      return (
            <div className={styles.result}>
                  <ResultIcon type={result.player}/>
                  <ResultIcon type={result.computer}/>
                  <h2> You {result.outcome}!</h2>
                  <button
                  onClick={() => props.result()}>Play Again</button>
            </div>
      )
} 

export default Result