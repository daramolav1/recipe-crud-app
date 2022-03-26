import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const INITIAL_STATE = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [newRecipe, setNewRecipe] = useState({ ...INITIAL_STATE });

  const handleInputChange = ({ target }) => {
    setNewRecipe({ ...newRecipe, [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(newRecipe);
    setNewRecipe({ ...INITIAL_STATE });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
                value={newRecipe.name}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                onChange={handleInputChange}
                value={newRecipe.cuisine}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                name="photo"
                id="photo"
                onChange={handleInputChange}
                value={newRecipe.photo}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleInputChange}
                value={newRecipe.ingredients}
                placeholder="Ingredients"
                required
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                onChange={handleInputChange}
                value={newRecipe.preparation}
                placeholder="Preparation"
                required
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
