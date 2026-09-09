function RecipeList({ recipes, onToggle }) {
  return (
    <section>
      <h2>Mina recept</h2>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
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