import { useState } from 'react'
import Header from './components/Header.jsx'
import RecipeForm from './components/RecipeForm.jsx'
import './App.css'


// Main application component for the recipe list
function App() {
  const [recipes, setRecipes] = useState([
    {id:1, name: 'Spaghetti Bolognese'},
    {id:2, name: 'Chicken Salad'},
    {id:3, name: 'Beef Stroganoff'},
  ]) // Array to store the list of recipes

  function addRecipe(name) {
    setRecipes([
      ...recipes,
      { id: Date.now(), name }
    ])
  }
  return (
    <>
      <Header count={recipes.length}/>
      <RecipeForm onAdd={addRecipe} />
    </>
  )
}

export default App