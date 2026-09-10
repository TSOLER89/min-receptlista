function RecipeList({ recipes, onToggle }) {
  return (
    <section className="recipe-section">
      <h2>Mina recept</h2>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <h3>{recipe.name}</h3>

            <button onClick={() => onToggle(recipe.id)}>
              {recipe.favorite ? '❤️ Favorit' : '🤍 Favorit'}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecipeList