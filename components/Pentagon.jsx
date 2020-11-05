import Icon from "./Icon"
import styles from "../styles/components/pentagon.module.scss"
import Result from "./Result"
import { useState } from "react"

const Pentagon = (props) => {
      const outcomes = [
            {choice: "rock", beats: ["scissors", "lizard"], loses: ["paper", "spock"]},
            {choice: "scissors", beats: ["paper", "lizard"], loses: ["rock", "spock"]},
            {choice: "paper", beats: ["rock", "spock"], loses: ["scissors", "lizard"]},
            {choice: "lizard", beats: ["spock", "paper"], loses: ["scissors", "rock"]},
            {choice: "spock", beats: ["scissors", "rock"], loses: ["lizard", "papaer"]}
      ]

      const [ choices, setChoices ] = useState()

      const stats = props.stats

      const advancedResult = (e) => {
            const player = e.target.name
            const computer = outcomes[Math.floor(Math.random()*5)]
            let outcome
            let point
            switch(player) {
                  case computer.choice: (outcome = "draw", point = 0);
                  break;
                  case computer.beats[0]: (outcome = "lose", point = -1);
                  break;
                  case computer.beats[1]: (outcome = "lose", point = -1);
                  break;
                  case computer.loses[0]: (outcome = "win", point = 1);
                  break;
                  case computer.loses[1]: (outcome = "win", point = 1);
                  break;
                  default: return
            }
            setChoices({
                  player: player,
                  computer: computer.choice,
                  outcome: outcome
            })
            props.updateScore(point)
            props.result(true)

            const data = {
                  ...stats,
                  score: stats.score + point,
                  advanced: {
                        ...stats.advanced,
                        played: stats.advanced.played + 1,
                        [outcome]: stats.advanced[outcome] + 1
                  }
            }

            fetch("/update", {
                  method: "POST",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
            }).then(() => props.updateStat(data))
      }

      return (
            !props.showResult ?
            <div className={styles.pentagon}>
                  <Icon game="advanced" type="scissors" advancedResult={advancedResult}/>
                  <Icon game="advanced" type="paper" advancedResult={advancedResult}/>
                  <Icon game="advanced" type="rock" advancedResult={advancedResult}/>
                  <Icon game="advanced" type="lizard" advancedResult={advancedResult}/>
                  <Icon game="advanced" type="spock" advancedResult={advancedResult}/>
            </div> :
            <Result choices={choices} result={props.result}/>
      )
}

export default Pentagon