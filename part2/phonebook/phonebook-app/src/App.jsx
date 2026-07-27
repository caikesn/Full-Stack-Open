import { useState, useEffect } from 'react'
import axios from 'axios'
import numberService from './services/persons'
import Notification from './services/Notification'


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

const Persons = ({ persons, onDelete }) => (
  <div>
    {persons.map(person => (
      <div key={person.id}>
        {person.name} {person.number} 
        <button onClick={() => onDelete(person.id)}>delete</button>
      </div>
    ))}
  </div>
)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [query, setQuery] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    numberService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'persons')

  const filteredPersons = persons.filter((person) => 
    person.name.toLowerCase().includes(query.toLowerCase())
  )

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)
    if (!person) return

    if (window.confirm(`Delete ${person.name}?`))
    numberService
      .deletePerson(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`'${person.name}' was already deleted from server`)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

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

    numberService
      .create(nameObject)
      .then(returnedName => {
        setPersons(persons.concat(returnedName))
        setNewName('')
        setNewNumber('')
        setNotification(`${returnedName.name} was added to phonebook`)
      })
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
        <Notification message={notification}/>
        <Persons 
          persons={persons}
          onDelete={deletePerson}
          />
      <h2>Search for names</h2>
        <Search query={query} onQueryChange={(e) => setQuery(e.target.value)} />
        <ul>
          <Persons persons={filteredPersons} />
        </ul>
    </div>
  )
}

export default App
