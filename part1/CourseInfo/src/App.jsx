const Header = (props) => {
  return (
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  //const exerciseinfo = props.exerciseinfo
  return (
    <div>
      <Part name = {props.part1.name} exercise = {props.part1.exercises}/>
      <Part name = {props.part2.name} exercise = {props.part2.exercises}/>
      <Part name = {props.part3.name} exercise = {props.part3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercise}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 
  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} part2 = {part2} part3 = {part3} />
      <Total part1 = {part1.exercises} part2 = {part2.exercises} part3 = {part3.exercises} />
    </div>
  )
}


export default App
