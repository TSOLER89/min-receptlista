
// Header component for the recipe list
function Header({ count }) {
  return (
    <header>
      <h1>🍝 Min receptlista</h1>
      <p>Här kan jag samla mina favoritrecept.</p>
      <p>Antal recept: {count}</p>
    </header>
  )
}

export default Header