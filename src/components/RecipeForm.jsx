import { useState } from 'react'

function RecipeForm({ onAdd }) {
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '') {
      return
    }

    onAdd(name)

    setName('')
  }

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Skriv ett recept..."
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button type="submit">
        Lägg till
      </button>
    </form>
  )
}

export default RecipeForm