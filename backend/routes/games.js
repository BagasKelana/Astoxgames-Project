import express from "express"
import {
	addGame,
	getGames,
	sortGames,
	searchGames,
	updateGames,
	getGame,
	updateManyGames,
} from "../controllers/game.js"

const router = express.Router()

//api auth

//add game to db
router.post("/", addGame)

//update game in db
router.put("/admin/:name", updateGames)

//get all
router.get("/", getGames)
//update many 
router.put("/update" , updateManyGames)

//get One
router.get("/game/:id", getGame)

// get elastic search
router.get("/search/:name", searchGames)

//get all sort by name
router.get("/name", sortGames)

//get all sort by popularity
router.get("/added", sortGames)

//get all sort by release date
router.get("/released", sortGames)

//get all sort by rating
router.get("/rating", sortGames)

export default router