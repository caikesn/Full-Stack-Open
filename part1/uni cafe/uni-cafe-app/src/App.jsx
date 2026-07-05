import { useState } from 'react'


const Header = (props) => (
  <h1> {props.header} </h1>
)
const Statistics = (props) => (
  <h1> {props.statistics} </h1>
)
const Button = (props) => (
   <button onClick={props.onClick}>
    {props.text}
   </button>
)
const Value = (props) => (
  <div> {props.text} {props.value}</div>
) 

const Total = (props) => (
  <div> Total: {props.value} </div>
)
const Average = (props) => {
  let good = 1
  let bad = -1
  let neutral = 0 
  return (
  <div> Average: {props.value} </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const header = "Give feedback"
  const statistic = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue) => () => {
    setGood(newValue)
  }   

  const setToNeutral = (newValue) => () => {
    setNeutral(newValue)
  }   

  const setToBad = (newValue) => () => {
    setBad(newValue)
  }   

  const Reset = (newValue) => () => {
    setBad(0)
    setGood(0)
    setNeutral(0)
  }   

  return (
    <div>
      <Header header={header}/>
      <Button onClick={setToGood(good + 1)} text={'Good'}/>
      <Button onClick={setToNeutral(neutral + 1)} text={'Neutral'}/>
      <Button onClick={setToBad(bad + 1)} text={'Bad'}/>
      <Button onClick={Reset()} text={'Reset'} />
      <Statistics statistics={statistic} />
      <Value text={'Good:'}value={good}/>
      <Value text={'Neutral:'}value={neutral}/>
      <Value text={'Bad:'}value={bad}/>
      <Total value={good + bad + neutral}/>
      <Average value={(good + bad + neutral)}/>
    </div>
  )
}

export default App
