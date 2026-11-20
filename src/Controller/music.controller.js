const musicModel = require('../models/music.model')
const {uploadFile} = require("../service/storage.service")

async function createMusic(req,res) {
    const {title}= req.body
    const file = req.file
    const result= await uploadFile(file.buffer.toString('base64'))
    const music = await musicModel.create({
        uri:result.url,
        title,
        artist:req.user.id
    })

    res.status(201).json({
        message:"Music created successfully",
        music
    })

    


}


async function getAllMusic(req,res) {
    const musics = await musicModel
    .find() // sab data le aati he 
    .limit(5)  // limit me data laati he serever se 
    .populate("artist")

    res.status(201).json({
        message:"Musics fetched",
        musics : musics
    })
}
module.exports={createMusic,getAllMusic}