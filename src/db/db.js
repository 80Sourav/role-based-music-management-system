const moongoose = require('mongoose');
const { log } = require('node:console');
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
async function connectDB() {
    try{
        await moongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected")
    }catch(err){
        console.error("DataBase connection error : ",err)
    }
}


module.exports= connectDB;