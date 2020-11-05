import styles from "../styles/components/resulticon.module.scss"

const ResultIcon = (props) => {
      const iconStyle = {
            backgroundImage: `url("./images/icon-${props.type}.svg")`,
            backgroundSize: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
            backgroundColor: "white"
      }

      const cname = props.type

      return (
            <button className={styles[cname]} 
            style={iconStyle}
            name={props.type}/>
      )
}

export default ResultIcon