React State
  - a place to store data
  - can be reasigned
  - Display only components will not use State
  - closer to App.js, data will flow easier

React props (properties)
 - Objects that transfers information between components
 - props don't get updated
 - 

 √State and Props analogy√
 " 
 The weather would be the state object, because it is constantly changing,
 and your phone reading temperature would be props"


React Functional props
  - allow us to send data and behaviors back upstream to the parent
  -


Bravo Tailgait Party example
```js
// This is the basic setup, but you can make it more dynamic by using a useState, and saving your menu items in Key:Value pairs (next code block is dynamic)

// import React from "react"

// const App = () => {
//   return (
//     <>
//       <h1> Bravo Tailgait Party </h1>
//         <ul>
//           <li>Burger</li>
//           <li>New York Hot Dogs</li>
//           <li>Chicken Wings</li>
//           <li>Sushi</li>
//           <li>Coors Light</li>
//         </ul>
    
//     </>
//   )
// }
// export defaul App

// New Dynamic code

import React from "react"
import MenuItem from "./components/MenuItem"

const App = () => {

  const [menu, setMenu] = useState([
   { name: "Burger", ordered: false},
   { name: "NY Hot Dogs", ordered: false},
   { name: "Chicken wings", ordered: false},
   { name: "Sushi", ordered: false},
   { name: "Coors Light", ordered: false},
  ])
  return (
    <>
      <h1> Bravo Tailgait Party </h1>
        <h4>Menu</h4>

        {menu.map((menuItem, index) => { // this will iterate through each value
          return (
            <MenuItem 
              menuItem={menuItem}
              key={index}
              />
          )
        })}
    
    </>
  )
}
export defaul App

// create a components file named MenuItem.js

// props is an object, and you can * console.log("props: ", props) to see your call in the live host terminal
const MenuItem = (props) => {
  console.log("props: ", props) //*

  return(
    <>
      <h4>{props.menuItem.name}</h4>  
      {props.menuItem.ordered && <h5>Ordered!</h5>}
      <button>Order</button>

    </>
  )
}
export default MenuItem

// Destructuring Props example:

const MenuItem = (props) => {
  const { menuItem } = props

  return(
    <>
      <h4>{menuItem.name}</h4>
      {menuItem.ordered && <h5>Ordered!</h5>}
      <button>Order</button>

    </>
  )
}
export default MenuItem

// 2nd Destructuring example: you can remove this line  const { menuItem } = props and replace our (props) parameter with the ({ menuItem })

const MenuItem = ({ menuItem }) => {

  return(
    <>
      <h4>{menuItem.name}</h4>
      {menuItem.ordered && <h5>Ordered!</h5>}
      <button>Order</button>

    </>
  )
}
export default MenuItem

// Now, back on App.js, we want to make our order button change its value to true, when it is ordered

import React from "react"
import MenuItem from "./components/MenuItem"

const App = () => {

  const [menu, setMenu] = useState({
   { name: "burger", ordered: false},
   { name: "NY Hot Dogs", ordered: false},
   { name: "Chicken wings", ordered: false},
   { name: "Sushi", ordered: false},
   { name: "Coors Light", ordered: false},
  })

  const orderMenuItem = (selectedItem) => {
    //console.log("clicked") // to make sure the button and the func are connected
    //console.log("item: ", menu[selectedItem]) // to check if item gets logged in browser console.
    menu[selectedItem].ordered = true //changes the value in the code
    setMenu([...menu]) // To copy all ordered item into the new array
  }
  return (
    <>
      <h1> Bravo Tailgait Party </h1>
        <h4>Menu</h4>

        {menu.map((menuItem, index) => { // this will iterate through each value
          return (
            <MenuItem 
              menuItem={menuItem}
              orderMenuItem={orderMenuItem}
              key={index}
              />
          )
        })}
    
    </>
  )
}
export defaul App






class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      trader Joes:["peanut butter", "apples", "goat cheese", "cheese"]
      ralphs: ["ice cream", "salmon", "bread"]
    }
  }
  render() {
    return (
      <>
        <h1> </h1>
      </>
    )
  }

}

// On component MenuItem.js, we can connect our onClick to {orderMenuItem}*, then connect our index (you must add index={index} under key={index} on your App.js), you need to add an annonomous func inside our onClick to make our func only run when clicked, instead of instantly running the func when the page loads - <button onClick={() =>{orderMenuItem(index)}}>Order</button>

const MenuItem = ({ menuItem, orderMenuItem, index }) => {

  return(
    <>
      <h4>{menuItem.name}</h4>
      {menuItem.ordered && <h5>Ordered!</h5>}
      <button onClick={() =>{orderMenuItem(index)}}>Order</button>  *

    </>
  )
}
export default MenuItem


// Now to set up our ordered item "recipe" list

import React from "react"
import MenuItem from "./components/MenuItem"

const App = () => {

  const [menu, setMenu] = useState({
   { name: "burger", ordered: false},
   { name: "NY Hot Dogs", ordered: false},
   { name: "Chicken wings", ordered: false},
   { name: "Sushi", ordered: false},
   { name: "Coors Light", ordered: false},
  })

  const orderMenuItem = (selectedItem) => {
    //console.log("clicked") // to make sure the button and the func are connected
    //console.log("item: ", menu[selectedItem]) // to check if item gets logged in browser console.
    menu[selectedItem].ordered = true //changes the value in the code
    setMenu([...menu]) // To copy all ordered item into the new array
  }
  return (
    <>
      <h1> Bravo Tailgait Party </h1>
        <h4>Menu</h4>

        {menu.map((menuItem, index) => { // this will iterate through each value
          return (
            <MenuItem 
              menuItem={menuItem}
              orderMenuItem={orderMenuItem}
              key={index}
              index={index}
              />
          )
        })}
    
    </>
  )
}
export defaul App

```