function RecipeList({ recipes, onToggle, onDelete }) {
  return (
    <section className="recipe-section">
      <h2>Mina recept</h2>

      {recipes.length ===0 ? (
        <p>Inga recept ännu. Lägg till ditt första recept ovan.</p>
      ) : (
        
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <h3>{recipe.name}</h3>

            <button onClick={() => onToggle(recipe.id)}>
              {recipe.favorite ? '❤️ Favorit' : '🤍 Favorit'}
            </button>
            <button onClick={() => onDelete(recipe.id)}>
              Ta bort
            </button>
          </div>
        ))}
      </div>
      )}
    </section>
  )
}

export default RecipeList