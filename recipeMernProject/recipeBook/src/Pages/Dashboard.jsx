import RecipeLoader from "../Components/RecipeLoader";
import RecipeCards from "../Components/RecipeCards";
import EmptyBanner from "../Components/EmptyBanner";
import { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import AddRecipeDialog from "../Components/AddRecipeDialog";
import { getRecipes } from "../services/recipes.js"

export default function Dashboard() {
    const [recipes, setRecipes] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await getRecipes();
                setRecipes(response.data);
                setStatus("ready");
            } catch (error) {
                console.error("Error fetching recipes: ", error);
                setStatus("error");
            }
        };
        fetchRecipes();
    }, []);

    const onCreateRecipe = async (recipe) => {
        setRecipes((r) => [...r, recipe]);
    };

    const renderingMap = {
        loading: <RecipeLoader />,
        ready: <RecipeCards recipes={recipes} />,
        error: (
            <EmptyBanner 
                title="Error"
                text="Something went wrong with the API"
                severity="error"
            />
        ),
    };

    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handleClickOpen = () => {
        setDialogIsOpen(true);
    }

    const handleClose = () => {
        setDialogIsOpen(false);
    }

    return (
        <div>
            <h1>Abby's Fry Shack</h1>
            <h1>Recipe Book</h1>
            {renderingMap[status]}
            <br></br>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}>
                Open Recipe Creator
            </Button>
            
            <AddRecipeDialog 
                dialogIsOpen={dialogIsOpen}
                handleClose={handleClose}
                onCreateRecipe={onCreateRecipe}
            />
        </div>
    );
}