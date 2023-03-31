<!-- imports all at the top -->
```js
import React from "react"
// Declare funtional component:react app will allways be defined as App (line 3)
const App = () => {
  // data needed for the component 

  // return statement is JSX, what is being seen on the UI
  return (
    <>
     <h1>Yo</h1>
    </>
   
  )

}
// export default app, so that the components can be accessed
export default App
// This is the bare minimum to display data on your live server
// You need to use a component call Ex: <Episode /> in you App.js const App () => {
//     return (
//    <>
//    <Episode />
//    </>
// )
// }

const App = () => {
  return (
    <>
     <h1>Compressed.fm Clone</h1>
     <div className="cards">
     <Episode title="A New Era of Framework Agnostic Components"/> 
     <Episode title="Goodbye Passwords, Hello Passkey"/>
     <Episode title="Awesome Title"/>
     <Episode title="Cool Stuff"/>
     </div>
    </>
  )
}
// Right now the title is being hard coded, so to make it more dynamic we can place all the title info into an array. we need to create a new variable that = and [of titles] then in your <Episode /> component call your can reference the {episode variable [0]}

return (
    <>
     <h1>Compressed.fm Clone</h1>
     <div className="cards">
        {episodes.map((episode, index) => {
          return <Episode title={episode}/>
        })}
)
// Line 42-43 makes our list of episodes lines 29-32 redundent because our map function iterates through our episode [] and match up the corresponding titles index to the card

```
```js
// Dice roll challange


// react state is used when values will change
//  useState Syntax:
// Import on App.js
import {useState} from "react"
// Data that is needed, place in between the component declaration and the return statement
const [roll, setRoll] = useState (initial value)
// line 64 roll is the initial variable, and setRoll is the function to change it
const rollDice = () => {
  let diceNumber = Math.ceil(Math.random() * 5)
  setRoll(diceNumber)
}
// Function call will be performed by onClick attribut on Box.js
  //  pass the function and state variable as a prop on Box component call
// App.js 
<>
<Box roll={roll} rollDice={rollDice} />
</>
  
// Box.js
const Box = (props) => {
// data needed for the component

// return statement with JSX, what is being seen on the UI
return(
  <div className="box" onClick={props.rollDice}>
  {props.roll}
  </div>
)
}
  // Accept props on Box.js
  // Pass function into the onClick attribute
  // Reference the state variable to display the value
```