import mongoose from "mongoose"

const totalSchema = new mongoose.Schema({
    amount : {
        type : Number
    },
    concepts : {
        type : Array
    }
})

const Total = mongoose.model("Total",totalSchema,"total")

export default Total