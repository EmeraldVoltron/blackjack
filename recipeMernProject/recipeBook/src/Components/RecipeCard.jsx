import { Card, CardContent, Typography, Box, Divider} from "@mui/material";
import { useState } from "react";

export default function RecipeCard({ title, difficulty, recipeYield, time, ingredients, instructions }) {
    console.log(title, difficulty, recipeYield, time, ingredients, instructions);

    return (
        <Card>
            <CardContent sx={{ p: 3, bgcolor: 'grey.100' }}>
                {/* Title */}
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>

                {/* Line under title */}
                <Divider sx={{ mb: 3 }} />

                {/* Difficulty, Yield, Time */}
                <Box display="flex" justifyContent="space-between" mb={3}>
                    <Typography variant="h5">Difficulty: {difficulty}</Typography>
                    <Typography variant="h5">Yield: {recipeYield}</Typography>
                    <Typography variant="h5">Time: {time}</Typography>
                </Box>

                {/* Ingredients Section */}
                <Box
                    mb={3}
                    p={2}
                    border="1px solid"
                    borderColor="grey.400"
                    bgcolor="white"
                    borderRadius={2}
                >
                    <Typography variant="h5" align="left" gutterBottom>
                        Ingredients:
                    </Typography>
                    <Typography variant="body1" align="left">
                        {ingredients}
                    </Typography>
                </Box>

                {/* Instructions Section */}
                <Box
                    p={2}
                    border="1px solid"
                    borderColor="grey.400"
                    bgcolor="white"
                    borderRadius={2}
                >
                    <Typography variant="h5" align="left" gutterBottom>
                        Instructions:
                    </Typography>
                    <Typography variant="body1" align="left">
                        {instructions}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}