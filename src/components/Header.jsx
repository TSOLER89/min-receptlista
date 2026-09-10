
// Header component for the recipe list
function Header({ count }) {
  return (
    <header className="header">
        <div>
      <h1>🍝 Min receptlista</h1>
      <p>Här kan jag samla mina favoritrecept.</p>
      </div>

      <span className="recipe-count">
        <p>Antal recept: {count}</p>
      </span>
    </header>
  )
}

export default Header