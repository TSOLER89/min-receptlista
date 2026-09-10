import { useEffect,useState } from 'react'
import Header from './components/Header.jsx'
import RecipeForm from './components/RecipeForm.jsx'
import RecipeList from './components/RecipeList.jsx'
import './App.css'


// Main application component for the recipe list
function App() {
const [recipes, setRecipes] = useState([
  { id: 1, name: 'Grillad kyckling', favorite: true },
  { id: 2, name: 'Tacos', favorite: false },
  { id: 3, name: 'Köttbullar', favorite: false }
]) // Array to store the list of recipes


/* Loggar uppdateringar av receptlistan till konsolen */
useEffect(() => {
  document.title = `Recept (${recipes.length})`
}, [recipes])


function addRecipe(name) {
  const newRecipe = {
    id: Date.now(),
    name: name,
    favorite: false
  }

  setRecipes([
    ...recipes,
    newRecipe
  ])
}

function toggleFavorite(id) {
  setRecipes(
    recipes.map(recipe =>
      recipe.id === id ? { ...recipe, favorite: !recipe.favorite } : recipe
    )
  )
}
function deleteRecipe(id) {
  setRecipes(
    recipes.filter((recipe) => recipe.id !== id)
  )
}
  return (
    <main className="app">
      <Header count={recipes.length}/>

      <RecipeForm onAdd={addRecipe} />

      <RecipeList
  recipes={recipes}
  onToggle={toggleFavorite}
  onDelete={deleteRecipe}
/>
    </main>
  )
}

export default App