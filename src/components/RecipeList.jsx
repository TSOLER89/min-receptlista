function RecipeList({ recipes }) {
  return (
    <section>
      <h2>Mina recept</h2>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecipeList