
 const Header = (props) => {
   return (
     <h1>{props.course.name}</h1>
   )
 }

import { useState } from "react"

 const Part = (props) => {
   return (
     <p>{props.name} {props.exercises}</p>
   )
 }

 const Content = (props) => {
   return (
     <div>
       {props.parts.map((part) => (
         <Part key={part.name} name={part.name} exercises={part.exercises} />
       ))}
     </div>
   )
 }

 const Total = (props) => {
   const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

   return (
     <div>
       <p>Number of exercises {total}.</p>
     </div>
   )
 }

 const App = () => {
   const course = {
     name: 'Half Stack application development',
     parts: [
       {
         name: 'Fundamentals of React',
         exercises: 10
       },
       {
         name: 'Using props to pass data',
         exercises: 7
       },
       {
         name: 'State of a component',
         exercises: 14
       }
     ]
   }

   return (
     <div>
       <Header course={course} />
       <Content parts={course.parts} />
       <Total parts={course.parts} />
     </div>
   )
 }
 export default App






//     const Hello = ({ name, age }) => {
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




// import { useState } from 'react'

// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   console.log('rendering with counter value', counter)

//   const increaseByOne = () => {

//     console.log('increasing, value before', counter)
//     setCounter(counter + 1)
//   }

//   const decreaseByOne = () => { 

//     console.log('decreasing, value before', counter)
//     setCounter(counter - 1)
//   }

//   const setToZero = () => {

//     console.log('resetting to zero, value before', counter)
//     setCounter(0)
//   }

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="plus" />
//       <Button onClick={setToZero} text="zero" />
//       <Button onClick={decreaseByOne} text="minus" />
//     </div>
//   )
// } 
// export default App


// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(" ")}
//     </div>
//   )
// }

// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// const App = () => {

//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)


//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(updatedRight + left)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick} text ='right' />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }

// const App = () => {
//   const [value, setValue] = useState(10)

//   return (
//     <div>
//       {value}
//       <button>reset to zero</button>
//     </div>
//   )
// }



// const Button = (props) => (
//   <button onClick={props.onClick}>
//     {props.text}
//   </button>
// )

// const Display = props => <div>{props.value}</div>

// const App = () => {
//   const [value, setValue] = useState(10)


//   const setToValue = (newValue) => () => {
//       console.log('value now', newValue)
//       setValue(newValue)
//     }
  
//   const Button = (props) => (
//     <button onClick={props.onClick}>
//       {props.text}
//     </button>
//   )

//   return (
//     <div>
//       {value}
//       <Button onClick={setToValue(1000)}text="thousand" />
//       <Button onClick={setToValue(0)}text="reset" />
//       <Button onClick={setToValue(value + 1)} text="increment" />
//     </div>
//   )
// }

