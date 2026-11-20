const express = require('express')
const cookieparser = require('cookie-parser')
const authRoutes = require('./Routes/auth.route')
const musicRoutes = require('./Routes/music.route')
const app = express()

app.use(express.json())
app.use(cookieparser())

app.use("/api/auth",authRoutes)
app.use("/api/music",musicRoutes)

module.exports=app