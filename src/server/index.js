import express from "express"
import liveReload from "livereload"
import connectLivereload from "connect-livereload"
import path from "path"
import viewRouter from "./routes/viewRoutes"

const app = express()

const liveReloadServer = liveReload.createServer()
liveReloadServer.watch(path.join(__dirname,"dist","public"))

app.use(connectLivereload())
app.use(express.static(path.join(__dirname,"public")))
app.use(viewRouter)

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/")
    }, 100)
})

app.listen(8000)