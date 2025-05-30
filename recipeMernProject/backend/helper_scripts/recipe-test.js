
import mongoose from "mongoose";
import Recipe from "../models/recipe.js";
// import dotenv from 'dotenv';
// dotenv.config();
// const MONGO_URI = process.env.MONGO_URI;

const createRecipe = async () => {
    try{
        const recipe = await Recipe.create({
            title: "TestRecipe",
            difficulty: "Easy",
            yield: 1,
            time: "10 minutes",
            ingredients: "Many ingredients",
            instructions: "a lot of instructions"
        });
        console.log(recipe);
        
        return recipe._id;
    } catch (error) {
        console.error("Error creating recipe", error)
    }
}
const getRecipe = async (id) => {
    try {
        const recipe = await Recipe.findById(id);
        console.log(recipe);
    } catch (error) {
        console.error("❌ error getting recipe", error);
    }
}

// ---------- 1. DB Connection ----------
(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            bufferTimeoutMS: 1000,
            connectTimeoutMS: 1000,
        });
        console.log("✅ successfully connected to MongoDB");
        const recipeId = await createRecipe();

        console.log("------ getting user ------");
        await getRecipe(recipeId);

    } catch (error) {
        console.error("❌ error connecting to MongoDB", error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log("✅ successfully disconnected from MongoDB");
        process.exit(0);
    }
})();