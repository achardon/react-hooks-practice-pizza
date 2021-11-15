import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([])
  const [currentPizza, setCurrentPizza] = useState({
    topping: '',
    size: '',
    vegetarian: ''
  })

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setPizzas(data)
    })
  }, [])

  function handleEdit (pizza) {
    console.log(pizza)
    setCurrentPizza(pizza)
  }

  function handleSubmit (e, pizza) {
    e.preventDefault()
    console.log(pizza)
    fetch(`http://localhost:3001/pizzas/${pizza.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      const updatedPizzas = pizzas.map(pizzaInList => {
        if (pizzaInList.id === pizza.id) {
          return pizza
        }
        return pizzaInList
      })
      setPizzas(updatedPizzas)
    })
  }
  

  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} setCurrentPizza={setCurrentPizza} handleSubmit={handleSubmit} />
      <PizzaList pizzas={pizzas} handleEdit = {handleEdit} />
    </>
  );
}

export default App;
