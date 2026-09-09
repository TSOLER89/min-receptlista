import Header from './components/Header.jsx'
import './App.css'


// Main application component for the recipe list
function App() {
  const recipes = [
    {id:1, name: 'Spaghetti Bolognese'},
    {id:2, name: 'Chicken Salad'},
    {id:3, name: 'Beef Stroganoff'},
  ] // Array to store the list of recipes
  return (
    <>
      <Header count={recipes.length}/>
    </>
  )
}

export default App