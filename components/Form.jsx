import styles from "../styles/components/form.module.scss"
import { useState } from "react"

const Form = (props) => {
      const [ input, setInput ] = useState({
            username: "",
            password: ""
      })

      const [ valid, setValid ] = useState({
            username: false,
            password: false
      })

      const usernameStyle = {}
      const passwordStyle = {}

      valid.username ? 
      (usernameStyle.border = "2px solid green"):
      (usernameStyle.border = "2px solid red")

      valid.password ? 
      (passwordStyle.border = "2px solid green"):
      (passwordStyle.border = "2px solid red")

      const handleChange = (e) => {
            const { name, value } = e.target
            const regex = /\w{2,}/ig
            setInput(prev => {
                  return {
                        ...prev,
                        [name]: value
                  }
            })
            regex.test(value) ? 
            setValid(prev => {
                  return {
                        ...prev,
                        [name]: true
                  }
            }) :
            setValid(prev => {
                  return {
                        ...prev,
                        [name]: false
                  }
            })
      }

      const handleClick = (e) => {
            (!valid.username || !valid.password) && e.preventDefault()
      }

      return (
            <form method="POST" action={`/${props.type}`} className={styles.form}>
                  <input type="text" name="username" placeholder="Guest"
                  autoComplete="off" value={input.username} onChange={handleChange}
                  style={usernameStyle}/>
                  <input type="password" name="password" placeholder="Guest"
                  autoComplete="off" value={input.password} onChange={handleChange}
                  style={passwordStyle}/>
                  <div className={styles.line} />
                  <input type="submit" value={`${props.type}`} onClick={handleClick} />
            </form>
      )
}

export default Form