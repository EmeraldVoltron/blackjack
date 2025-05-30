const API = "http://localhost:3000/api";

// Helper Functions
const getJson = (response) => {
    if (!response.ok){
        throw new Error(`HTTP ${response.status}`)
    }
    return response.json();
};

// Crud fron end code
//Get all recipes
export const getRecipes = () => {
    return fetch(`${API}/recipes`).then(getJson);
};

// get recipe by ID
export const getRecipeById = (_id) => {
    return fetch(`${API}/recipes/${_id}`).then(getJson);
};

// post a new recipe
export const createRecipe = (recipe) => {
  return fetch(`${API}/recipes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  }).then(getJson);
};

// update recipe by id
export const updateRecipe = (_id, recipe) => {
  return fetch(`${API}/recipes/${_id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipe),
  }).then(getJson);
};

// delete recipe by ID
export const deleteRcipe = (_id) => {
  return fetch(`${API}/recipes/${_id}`, { method: "DELETE" }).then(getJson);
};
