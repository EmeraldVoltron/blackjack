import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json({
            message: "Recipe fetched successfully",
            data: recipes,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createRecipe = async (req, res) => {
    try {
        const recipe = new Recipe({
            title: req.body.title,
            difficulty: req.body.difficulty,
            yield: req.body.yield,
            time: req.body.time,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
        })

        const savedRecipe = await recipe.save();
        res.status(201).json({
            message: "Recipe created successfully",
            data: {
                id: savedRecipe._id,
            },
        });
    } catch (error){
        res.status(500).json({message : error.message});
    }
}

export const getRecipe = async (req, res) => {
    try{
        console.log(req);
        const recipe = await Recipe.findById(req.params._id);
        
        if (!recipe) {
            return res.status(404).json({
                message: `Recipe with id ${req.params._id} not found`
            });
        }

        res.status(200).json({
            message: "Recipe fetched successfully",
            data: recipe,
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const updateRecipe = async (req, res) => {
    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(req.params._id, req.body, {
            new: true,
        });

        if (!updatedRecipe) {
            return res.status(404).json({
                message: `Recipe with id ${req.params._id} not found.`
            });
        }

        res.status(200).json({
            message: "Recipe updated successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        const deletedRecipe = await UserActivation.findByIdAndDelete(req.params._id);
        
        if (!deletedRecipe) {
            return res.status(404).json({
                message: `Recipe with id ${req.params._id} not found`
            });
        }

        res.status(200).json({
            message: "Recipe deleted successfully",
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}