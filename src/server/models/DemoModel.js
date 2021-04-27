import mongoose from "mongoose"

const demoSchema = new mongoose.Schema({
    title : {
        type : String
    },
    description : {
        type : String
    }
})

const Demo = mongoose.model("Demo",demoSchema)

export default Demo