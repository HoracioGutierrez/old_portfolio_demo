import express from "express"
import liveReload from "livereload"
import connectLivereload from "connect-livereload"
import path from "path"

const app = express()

const liveReloadServer = liveReload.createServer()
liveReloadServer.watch(path.join(__dirname,"dist","public"))

app.use(connectLivereload())
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})


liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/")
    }, 100)
})

app.listen(8000)