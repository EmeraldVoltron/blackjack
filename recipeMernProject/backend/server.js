import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    getAllRecipes,
} from "./controllers/recipeController.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
// const PORT = 3000;
const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})
app.use(cors());

// 2. DB connection 
try {
    await mongoose.connect(MONGO_URI);
    console.log("Successfully connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
}


// 3. Routes

app.get("/ping", (req, res) => {
    res.send("Pong!");
})

app.get("/api/recipes/", getAllRecipes);
app.post("/api/recipes/", createRecipe);
app.post("/api/recipes/:_id", getRecipe);
app.put("/api/recipes/:_id", updateRecipe);
app.delete("/api/recipes/:_id", deleteRecipe);

// 4. Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})