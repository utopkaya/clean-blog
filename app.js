const express = require("express")
const app = express()

const hostname = "localhost"
const port = 3000

const blog = {
    id: 1,
    title: "Blog Title",
    description: "Blog description"
}

// index page
app.get("/", (req, res) => {
    res.send(blog)
})

app.listen(port, ()=>{
    console.log(`server is online http://${hostname}:${port}`)
})