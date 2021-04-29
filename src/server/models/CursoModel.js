import mongoose from "mongoose"

const cursoSchema = new mongoose.Schema({
    title : {
        type : String
    },
    price : {
        type : Number
    },
    cant : {
        type : Number
    },
    created_at : {
        type : Date
    },
    updated_at : {
        type : Date
    }
})

const Curso = mongoose.model("Curso",cursoSchema)

export default Curso