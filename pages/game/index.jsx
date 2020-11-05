import styles from "../../styles/layouts/game/index.module.scss"
import { useState } from "react"
import GameButton from "../../components/GameButton"
import NavButton from "../../components/NavButton"
import Triangle from "../../components/Triangle"
import Pentagon from "../../components/Pentagon"
import Score from "../../components/Score"
import Rules from "../../components/Rules"
import useSWR from "swr"

const Game = () => {
      const [ stats, setStats ] = useState()
      const [ score, setScore ] = useState(0)
      const [ mode, setMode ] = useState()
      const [ showResult, setShowResult ] = useState(false)

      const getStats = () => {
      const fetcher = (...args) => 
      fetch(...args)
                  .then(res => res.json())
                  .then(data => (setStats(data), setScore(data.score), console.log(data)))
      const { data, error } = useSWR("/initial", fetcher)
      }

      getStats()

      const selectMode = (e) => {
            const name = e.target.name
            setMode(name)
      }

      const updateScore = (point) => {
            setScore(score+point)
      }

      const result = (bool) => {
            setShowResult(bool)
      }

      const updateStat = (newStat) => {
            setStats(newStat)
      }

      return (
            <section className={styles.index}>
                  {!mode ?
                  <div className={styles.buttons}>
                  <GameButton name="normal" 
                  game="normal" 
                  handleClick={selectMode} 
                  result={result}/>
                  <GameButton 
                  name="advanced" 
                  game="advanced" 
                  handleClick={selectMode} 
                  result={result}/>
                  </div>  :
                  
                  mode === "normal" ?
                  <div className={styles.board}>
                  <Score game="normal" score={score}/>
                  <Triangle 
                  updateScore={updateScore}
                  result={result}
                  showResult={showResult}
                  stats={stats}
                  updateStat={updateStat}/>
                  <GameButton 
                  game="menu" 
                  handleClick={selectMode}
                  result={result}/>
                  <Rules mode="normal"/>
                  </div> :

                  mode === "advanced" &&
                  <div className={styles.board}>
                  <Score game="advanced" score={score}/>
                  <Pentagon 
                  updateScore={updateScore}
                  result={result}
                  showResult={showResult}
                  stats={stats}
                  updateStat={updateStat}/>
                  <GameButton 
                  game="menu" 
                  handleClick={selectMode}
                  result={result}/>
                  <Rules mode="advanced"/>
                  </div>
                  }
            </section>
      )
}

export default Game