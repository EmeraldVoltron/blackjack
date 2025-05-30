## Welcome to the Abby's Fryshack Recipe Manager!

This app allows you to store recipe cards into a database and see them in your recipe folder. It allows you to add recipes, read recipes, and delete them.

## This is a full stack MERN App:
M - MongoDB + Mongoose
E - Express 
R - React
N - Node + nodemon

## How To Run:
-Begin by making sure you have all of the neccesary dependencies downloaded.
-Begin by starting your mongoDB environment using docker. Then, in MongoDB compass, connect to your localhost:27107.
-In a terminal, CD into the backend folder and type in the command "npm dev run" this should start the backend.
-In the terminal, CD into the recipeBook folder adn type in the command "npm dev run" this should start the react frontend.
-You can then navigate to the localhost environment the terminal tells you to (ctrl+click).
-You should be getting an error showing that there is an issue with the api. This is because there is no data to show.
-Click on the recipe creator, and fill in your recipe details, submit, and then you should see the entry.

---

## Project Requirements:
See levels below for detailed completion
Levels completed: 1, 2, 3, and 4 (kinda)

What works:
View, add, edit, and delete recipe cards.

What doesn't yet (ToDos):
Little iffy on the edit and delete part of the project.

## :package: Level 1 – Backend Bootup
*Goal:* Set up a basic Express server
### Requirements:
Create an Express server
Implement at least 2 routes (GET, POST)
Send/receive JSON
Use nodemon for development
Test with Postman or Curl
---
## Level 2 – Database Connection
*Goal:* Add MongoDB with Mongoose
### Requirements:
Create at least one model (Game, Player, Session, etc.)
Save and retrieve data from MongoDB (local or Atlas)
Implement full API interaction (GET, POST, DELETE)
---
## Level 3 – React Frontend
*Goal:* Build a basic frontend to consume your API
### Requirements:
Set up a React app
Fetch data from your backend
Display and submit data via forms or buttons
---
## Level 4 – Full Integration
*Goal:* Connect everything into a working full-stack app
### Requirements:
Full CRUD integration between frontend/backend
Forms to create/edit/delete data
Working API and database functionality
Basic UX (loading/error states, feedback)