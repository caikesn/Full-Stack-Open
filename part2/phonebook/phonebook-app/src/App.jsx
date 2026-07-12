import { useState } from 'react'


const Search = (props) => (
  <input type="text" value={props.query} onChange={props.onQueryChange} placeholder='Type to search...'/>
)

const PersonForm = (props) => (
    <form onSubmit={props.onSubmit}>
      <div>name: <input value={props.newName} onChange={props.onNameChange}/></div>
      <div>number: <input value={props.newNumber} onChange={props.onNumberChange}/></div>
      <div><button type="submit">add</button></div> 
    </form>
)

const Persons = ({ persons }) => (
  <div>
    {persons.map(person => (
      <div key={person.id}>{person.name} {person.number} </div>
    ))}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Connor Aikens', number: '040-1243535', id: 1 },
    { name: 'Arto Hellas', number: '040-123456', id: 5 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [query, setQuery] = useState('')

  const filteredPersons = persons.filter((person) => 
    person.name.toLowerCase().includes(query.toLowerCase())
  )

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
        <PersonForm
          newName={newName}
          newNumber={newNumber}
          onNameChange={handleNameChange}
          onNumberChange={handleNumberChange}
          onSubmit={addPerson}
        />
      <h2>Names</h2>
        <Persons persons={persons} />
      <h2>Search for names</h2>
        <Search query={query} onQueryChange={(e) => setQuery(e.target.value)} />
        <ul>
          <Persons persons={filteredPersons} />
        </ul>
    </div>
  )
}

export default App
