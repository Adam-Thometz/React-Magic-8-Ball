import React, {useState} from "react";
import './EightBall.css'

const genMessage = (arr) => {
  const randIdx = Math.floor(Math.random() * arr.length)
  return arr[randIdx]
}

const EightBall = ({answers}) => {
  const [msg, setMsg] = useState("Think of a question")
  const [color, setColor] = useState('black')
  
  const getReply = () => {
    const {msg, color} = genMessage(answers)
    setMsg(msg)
    setColor(color)
  }

  return (
    <div className="EightBall" onClick={getReply} style={{backgroundColor: color}}>
      <strong className="EightBall-msg">{msg}</strong>
    </div>
  )
}

export default EightBall