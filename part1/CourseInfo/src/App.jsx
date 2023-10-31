const Header = (props) => {
  return (
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.exerciseinfo[0].name} {props.exerciseinfo[0].number}</p>
      <p>{props.exerciseinfo[1].name} {props.exerciseinfo[1].number}</p>
      <p>{props.exerciseinfo[2].name} {props.exerciseinfo[2].number}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exerciseinfo[0].number + props.exerciseinfo[1].number + props.exerciseinfo[2].number}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [
    {name: 'Fundamentals of React', number: 10},
    {name: 'Using props to pass data', number: 7},
    {name: 'State of a component', number: 14},
  ]
 
  return (
    <div>
      <Header course = {course}/>
      <Content exerciseinfo = {exercises}/>
      <Total exerciseinfo = {exercises}/>
    </div>
  )
}


export default App
