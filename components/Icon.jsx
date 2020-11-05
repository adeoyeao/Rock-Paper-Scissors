import styles from "../styles/components/icon.module.scss"

const Icon = (props) => {
      const iconStyle = {
            backgroundImage: `url("./images/icon-${props.type}.svg")`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
      }
      const cname = `icon--${props.game}`
      const result = props.game == "normal" ? props.normalResult : props.advancedResult
      return (
            <button className={styles[cname]} 
            style={iconStyle}
            name={props.type}
            onClick={(e) => result(e)}/>
      )
}

export default Icon