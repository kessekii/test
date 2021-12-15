const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")


const { env } = require("process")
const db = require("./models");
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get("/", cors(), async(req, res) => {

    res.send("This is working")
})

app.get("/home", cors(), async(req, res) => {
    const dataRaw = await db.song_list.findAll()
    const data = dataRaw.map((song) => song.dataValues)
    res.send(data)
})
app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}`)

})