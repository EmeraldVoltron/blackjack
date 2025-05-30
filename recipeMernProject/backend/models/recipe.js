import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true},
    difficulty: {type: String, required: true},
    recipeYield: {type: Number, min: 0, default: 0, required: true},
    time: {type: String, required: true},
    ingredients: {type: String, required: true}, 
    instructions: {type: String, required: true}
})

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;