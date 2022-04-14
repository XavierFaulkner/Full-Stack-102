import React from 'react'
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Xavier" age={19}/>
      <Hello/>      
      <Hello/>
      <Hello/>   
    </div>
  )
};

export default App