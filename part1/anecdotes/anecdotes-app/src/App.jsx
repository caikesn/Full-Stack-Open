import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

const Favourite = (props) => {
    return (
      <div>
        <h1> {props.text} </h1>
        <div> {props.value} </div>
      </div>
    )
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const favouriteIndex = votes.indexOf(Math.max(...votes))
  const favouriteAnecdote = anecdotes[favouriteIndex]
  const favouriteVoteCount = votes[favouriteIndex]


  const setToNew = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
    return randomIndex
  }
  const increaseVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }



  return (
    <div>
      <h1> Anecdote of the day! </h1>
      {anecdotes[selected]}
      <Button onClick={setToNew} text={'next anecdote'} />
      <Button onClick={increaseVote} text={'vote'} />
      <div>Votes: {votes[selected]}</div>
      <Favourite value={`${favouriteAnecdote} (votes: ${favouriteVoteCount})`} text={'Anecdote with most votes'} />
    </div>
  )
}

export default App