<!-- React Imputs and Events 3/31/23 -->

## DOM Events
-user interactions tracked by the Document Object Model (DOM)
-Examples: typing on a form, clicking a button, selecting an element

## Updating state with the user input

1. Create state for input
-Create a basic functional component in App.js
```js
// import
import React, {useState} from "react"
// Functional component declaration
const App = () => {
    // return to the UI
    return(
    <>
    
    </>

    )
}
// export
export default App
```

-create a state that will track the name of the user as a string

```js
// import
import React, {useState} from "react"
// Functional component declaration
const App = () => {
  // additional data: ("Bravo 20213") is the default value.
  const [user, setUser] = useState("Bravo 2023")
    // return to the UI
    return(
    <>
    // calls the, default value, ex:"Bravo 2023
    <h1>{user}</h1>
    </>

    )
}

```
2. Provide a space to capture what the user is typing
  -use the input tag: specifies an input field where the user can enter data
  -attributes of input:
    -type: specifies what type of input you will use 
    <!-- <input type="text"/> --> -->
    -placeholder: hint of the expected data for the input field
    <!-- <input type="text" placeholder= "what is your name?"/> -->
    -value: specifies what state variable will store this value, in this example we are using the useState {user}
    <!-- <input type="text" placeholder= "what is your name?" value={user} /> -->
    -onChange: listens for any changes to the input field and sends DOM event to functions
```js
// import
import React, {useState} from "react"
// Functional component declaration
const App = () => {
  // additional data: ("Bravo 20213") is the default value. user = state variable
  const [user, setUser] = useState("Bravo 2023")
    // return to the UI
    return(
    <>
    // calls the, default value, ex:"Bravo 2023
    <h1>Aloha, Bravo!!!</h1>
    <input 
    type="text" 
    placeholder= "what is your name?"
    value={user}
    onChange=""
    />
    </>

    )
}
```
3. Display user input
  -create custom function
<!-- const handleChange = (e) => {
     console.log(e) -->
  -then reference the func name, handleChange, in your onChange
  <!--  onChange={handleChange} -->
  -then you can target, which returns the element that is triggered
  <!-- const handleChange = (e) => {
         console.log(e.target) -->

```js
// import
import React, {useState} from "react"
// Functional component declaration
const App = () => {
  // additional data: ("What is your name?") is the default value. Then it needs to be a blank string to leave space for the user input
  const [user, setUser] = useState("")
  const [nickName, setNickName] = useState("")
  const handleChange = (e) => {
      //to see the element
    //console.log(e)
      //to see the target being triggered by onChange
    //console.log(e.target)
      // to see the value that is triggered by onChange
    //console.log(e.target.value)
      //to see the setUser change
    setUser(e.target.value)

  }
  const handleNickName = (e) => {
    //to see our second useState, setNickName
    setNickName(e.target.value)
  }
    // return to the UI
    return(
    <>
    // calls the, default value, ex:"Bravo 2023
    <h1>Aloha, Bravo!!!</h1>
    <input 
    type="text" 
    placeholder= "what is your name?"
    value={user}
    onChange={handleChange}
    />
    <input 
    type="text" 
    placeholder= "what is your nickname?" // need to create another state to store your place holder, and a second function to track it
    value={nickName}
    onChange={handleNickName}
    />
    // to track the onChange being made on UI
    <p>{user}, Thanks for helping Charlean, Can we call you {nickName}</p>
    </>
    )
}
```
-to create a component you need to pass your component with props to App.js

ex: component setup in NickName.js
```js
import React, {useState}
const App = () => {
  const [user, setUser] = useState("")
  const [nickName, setNickName] = useState("")
  const handleChange = (e) => {
    setUser(e.target.value)
  }
  const handleNickName = (e) => {
    setNickName(e.target.value)
  }
    return(
    <>
    <h1>Aloha, Bravo!!!</h1>
    <input 
    type="text" 
    placeholder= "what is your name?"
    value={user}
    onChange={handleChange}
    />
    <input 
    type="text" 
    placeholder= "what is your nickname?" 
    value={nickName}
    onChange={handleNickName}
    />
    <p>{user}, Thanks for helping Charlean, Can we call you {nickName}</p>
    </>
    )
}

export default NickName

```