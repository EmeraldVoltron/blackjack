import RecipeCard from './RecipeCard';
import { Stack } from "@mui/material";
import EmptyBanner from "./EmptyBanner";

export default function RecipeCards({ recipes }) {
    if (recipes.length === 0) {
        return <EmptyBanner title="Error" text="no recipes" severity="errpr"/>
    } else {
        return (
            <Stack spacing={2}>
                {recipes.map((recipe) => {
                    return <RecipeCard {...recipe} />;
                })}
            </Stack>
        )
    }
}