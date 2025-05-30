import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import { useState } from "react";
import { createRecipe } from "../services/recipes.js";

export default function AddRecipeDialog({
    dialogIsOpen,
    handleClose,
    onCreateRecipe
}) {
    const [title, setTitle] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [recipeYield, setRecipeYield] = useState("");
    const [time, setTime] = useState("");
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const API = "http://localhost:3000/api";

    const handleAddRecipe = async () => {
        console.log(title, difficulty, recipeYield, time, ingredients, instructions);

        const newRecipe = {
            title,
            difficulty,
            recipeYield,
            time,
            ingredients,
            instructions
        };

        const response = await createRecipe(newRecipe);
        console.log(response);

        onCreateRecipe(newRecipe);

        handleClose();
    }

    return (
        <Dialog open={dialogIsOpen} onClose={handleClose}>
            <DialogTitle>Add Recipe</DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e => setTitle(e.target.value))}
                    />
                    <TextField
                        label="Difficulty"
                        value={difficulty}
                        onChange={(e => setDifficulty(e.target.value))}
                    />
                    <TextField
                        label="Recipe Yield"
                        type="number"
                        value={recipeYield}
                        onChange={(e => setRecipeYield(e.target.value))}
                    />
                    <TextField
                        label="Time"
                        value={time}
                        onChange={(e => setTime(e.target.value))}
                    />
                    <TextField
                        label="Ingredients"
                        value={ingredients}
                        onChange={(e => setIngredients(e.target.value))}
                    />
                    <TextField
                        label="Instructions"
                        value={instructions}
                        onChange={(e => setInstructions(e.target.value))}
                    />
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddRecipe}>Add Recipe</Button>
            </DialogActions>
        </Dialog>
    )
} 

/**
 * title: {type: String, required: true},
    difficulty: {type: String, required: true},
    recipeYield: {type: Number, min: 0, default: 0, required: true},
    time: {type: String, required: true},
    ingredients: [{type: String, required: true}], 
    instructions: [{type: String, rFequired: true}]
 */