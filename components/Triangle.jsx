import Icon from "./Icon"
import styles from "../styles/components/triangle.module.scss"
import Result from "./Result"
import { useState } from "react"

const Triangle = (props) => {
      const outcomes = [
            {choice: "rock", beats: "scissors", loses: "paper"},
            {choice: "scissors", beats: "paper", loses: "rock"},
            {choice: "paper", beats: "rock", loses: "scissors"}
      ]

      const [ choices, setChoices ] = useState()

      const stats = props.stats

      const normalResult = (e) => {
            const player = e.target.name
            const computer = outcomes[Math.floor(Math.random()*3)]
            let point
            let outcome
            switch(player) {
                  case computer.choice: (outcome = "draw", point = 0);
                  break;
                  case computer.beats: (outcome = "lose", point = -1);
                  break;
                  case computer.loses: (outcome = "win", point = 1);
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
                  normal: {
                        ...stats.normal,
                        played: stats.normal.played + 1,
                        [outcome]: stats.normal[outcome] + 1
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
            <div className={styles.triangle}>
                  <Icon game="normal" type="rock" normalResult={normalResult}/>
                  <Icon game="normal" type="paper" normalResult={normalResult}/>
                  <Icon game="normal" type="scissors" normalResult={normalResult}/>
            </div> :
            <Result choices={choices} result={props.result}/>
      )
}

export default Triangle