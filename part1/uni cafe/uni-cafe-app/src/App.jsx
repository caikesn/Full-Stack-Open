import { useState } from 'react'


const Header = (props) => (
  <h1> {props.header} </h1>
)
const Statistics = (props) => {
  const feedbackNone = "No feedback given"
  return (
  <h1> {props.statistics} </h1>
  )
}
const FeedbackGiven = (props) => (
  <h3> {props.text} </h3>
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
  return (
  <div> Average: {props.value} </div>
  )
}
const Positive = (props) => (
  <div> Positive: {props.value}% </div>
)




const App = () => {
  // save clicks of each button to its own state
  const header = "Give feedback"
  const statistic = "Statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [showStats, setShowStats] = useState(false)
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive = total === 0 ? 0 : (good / total) * 100


  const setToGood = (newValue) => () => {
    setGood(newValue)
    setShowStats(true)
  }   

  const setToNeutral = (newValue) => () => {
    setNeutral(newValue)
    setShowStats(true)
  }   

  const setToBad = (newValue) => () => {
    setBad(newValue)
    setShowStats(true)
  }   

  const Reset = (newValue) => () => {
    setBad(0)
    setGood(0)
    setNeutral(0)
    setShowStats(false)
  }   

  return (
    <div>
      <Header header={header}/>
      <Button onClick={setToGood(good + 1)} text={'Good'}/>
      <Button onClick={setToNeutral(neutral + 1)} text={'Neutral'}/>
      <Button onClick={setToBad(bad + 1)} text={'Bad'}/>
      <Button onClick={Reset()} text={'Reset'} />
      {!showStats ? (
        <FeedbackGiven text={'No feedback given'} />
      ) : (
        <>
          <Statistics statistics={statistic} />
          <Value text={'Good:'} value={good}/>
          <Value text={'Neutral:'} value={neutral}/>
          <Value text={'Bad:'} value={bad}/>
          <Total value={total}/>
          <Average value={average}/>
          <Positive value={positive} />
        </>
      )}
    </div>
  )
}

export default App
