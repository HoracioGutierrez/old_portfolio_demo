import express from "express"
import liveReload from "livereload"
import connectLivereload from "connect-livereload"
import path from "path"
import viewRouter from "./routes/viewRoutes"
import mongoose from "mongoose"

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

mongoose.connect("mongodb://localhost:27017/portfolio", { useNewUrlParser: true , useUnifiedTopology : true })
.then(connection=>{
  console.log("DB connected to 27017")
  app.listen(8000,()=>{
    console.log("Web Server connected to 8000")
  })
})