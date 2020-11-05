import styles from "../styles/components/gamebutton.module.scss"

const GameButton = (props) => {
      let gameStyle = {}
      props.game == "menu" &&
      (gameStyle = {
            position: "absolute",
            bottom: "2rem",
            right: "5vw",
            width: "100px"
      })
      return (
            <button 
            className={styles.gamebutton}
            name={props.name} 
            onClick={(e) => (props.handleClick(e), 
                              props.result(false))}
            style={gameStyle}>
            {props.game}
            </button>
      )
}

export default GameButton