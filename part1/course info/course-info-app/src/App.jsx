// // header section
// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }

// // part section
// const Part = (props) => {
//   return (
//     <p>{props.name} {props.exercises}</p>
//   )
// }

// const Content = (props) => {
//   return (
//     <div>
//       {props.parts.map((part) => (
//         <Part key={part.name} name={part.name} exercises={part.exercises} />
//       ))}
//     </div>
//   )
// }

// const Total = (props) => {
//   const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

//   return (
//     <div>
//       <p>Number of exercises {total}.</p>
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }
// export default App






// const Hello = ({ name, age }) => {
//     const bornYear = () => new Date().getFullYear() - age
    
//   return (
//     <div>
//       <p>Hello {name}, you are {age} years old</p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
// export default App




import { useState } from 'react'
const App = () => {
  const [counter, setCounter] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    100
  )

  return (
    <div> {counter} </div>
  )
}
export default App