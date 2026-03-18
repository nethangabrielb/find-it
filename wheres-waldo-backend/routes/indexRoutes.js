const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

// Health check / keep-alive ping target
indexRouter.get("/health", indexController.health);

// Get all photos and their information
indexRouter.get("/photos", indexController.getAllGames);

// Get just one photo and their information
indexRouter.get("/photos/:photoId", indexController.getGame);

// Post the info on specific photo and validate click coordinates with
// Coordinates of characters in photo
indexRouter.post("/photos/:photoId", indexController.validateCoordinates);

// Post user and their score on the photo that they played in
indexRouter.post("/photos/:photoId/users", indexController.postScore);
module.exports = indexRouter;
