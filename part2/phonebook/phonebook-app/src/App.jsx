import { useState } from 'react'


const Names = (props) => {
  return (
    <div> {props.value} </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Connor Aikens', id: 1 }
  ]) 
  const [numbers, setNumbers] = useState([
    { number: '0404 156 789', id: 2}
  ])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
      name: newName,
      id: String(Math.floor(Math.random() * 10000))
    }

      setPersons(persons.concat(nameObject))
      setNewName('')
    }

  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const addNumber = (event) => {
    event.preventDefault()

    const numberExists = numbers.some(i => i.number === newNumber)

    if (numberExists) {
      alert(`${newNumber} is already added to phonebook`)
    } else {
      const numberObject = {
      number: newNumber,
      id: String(Math.floor(Math.random() * 10000))
    }

      setPersons(persons.concat(numberObject))
      setNewName('')
    }

  }
    const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNote}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Names</h2>
      {persons.map(person => 
        <Names key={person.id} value={person.name} />
      )}
      <h2>Numbers</h2>
      <form onSubmit={addNumber}>
        <div>
          nunber: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Number List</h2>
        {numbers.map(i => 
        <Names key={i.id} value={numbers.number} /> 
        )}
    </div>
  )
}

export default App
