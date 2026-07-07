export const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

export const Content = (props) => {
  return (
    <div>
      {props.parts.map((parts) => (
        <Part key={parts.name} name={parts.name} exercises={parts.exercises} />
      ))}
    </div>
  )
}

export const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <p>Number of exercises {total}.</p>
    </div>
  )
}