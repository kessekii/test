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
db.sequelize.sync()

app.post("/post_name", async(req, res) => {
    let { name } = req.body
    console.log(name)
})
app.listen(port, () => {

    console.log(`Listening at http://localhost:${port}`)

})