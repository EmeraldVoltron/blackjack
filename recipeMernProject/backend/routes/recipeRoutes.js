import express from "express";
import {
    createRecipe,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    getAllRecipes,
} from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getAllRecipes);
router.post("/", createRecipe);
router.post("/:id", getRecipe);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

export default router;
