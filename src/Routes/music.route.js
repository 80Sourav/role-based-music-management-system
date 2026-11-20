const express = require ("express")
const musicController = require("../Controller/music.controller")
const authMiddleware= require('../Middleware/auth.middleware')
const router = express.Router();
const multer = require('multer')
const upload = multer({
    storage:multer.memoryStorage()
})


router.post("/upload",authMiddleware.authArtist,upload.single("music"),musicController.createMusic)
// first authmiddleware se jayega then multer middle ware sse fir controller ke pasa
router.get("/",authMiddleware.authUser,musicController.getAllMusic)
module.exports=router