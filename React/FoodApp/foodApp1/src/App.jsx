import './App.css'
import { useState } from 'react'
import AddFood from './components/AddFood'
import Container from './components/Container'
import FoodHeader from './components/FoodHeader'
import FoodItems from './components/FoodItems'

function App() {
  let [foodItems , setFoodItems] = useState(['Protein','Coffee','Monster Energy','Tamarind Rice'])

  let inputChangeHandler = (e) => {
    if(e.key === 'Enter') {
      let newItem = e.target.value;
      let newArr=[...foodItems,newItem];
      setFoodItems(newArr);
    }
  }

  return (
    <Container>

    <FoodHeader/>
    <AddFood inputChangeHandler={inputChangeHandler}> </AddFood>
    <FoodItems items={foodItems} > </FoodItems>

    </Container>
  )
}

export default App
