import { useState } from 'react'


const Names = (props) => {
  return (
    <div> {props.value} </div>
  )
}
const Numbers = (props) => {
  return (
    <div> {props.value}</div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Connor Aikens', number: '0404 156 789', id: 1 }
  ]) 
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    const numberExists = persons.some(person => person.number === newNumber)

    if (nameExists || numberExists) {
      alert(`${newName} is already added to phonebook / number is already in use`)
    } else {
      const nameObject = {
      name: newName,
      number: newNumber,
      id: String(Math.floor(Math.random() * 10000))
    }

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          nunber: <input value={newNumber} onChange={handleNumberChange} />
        </div>        
        <div>
          <button type="submit">add</button>
        </div>
      </form>    
      <h2>Names</h2>
      {persons.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      )}
    </div>
  )
}

export default App
